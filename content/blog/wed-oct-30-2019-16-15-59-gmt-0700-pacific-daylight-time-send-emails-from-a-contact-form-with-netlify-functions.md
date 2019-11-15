---
title: Send emails from a contact form with Netlify functions
date: 2019-10-30T23:15:59.217Z
path: /blog/contact-form-tutorial
thumbnail: /img/contact-form-thumb.jpg
description: >-
  It can be difficult to get started with Netlify functions. Get started with
  this comprehensive tutorial that takes you through the process of setting up
  and writing your first function.
---
"Dead simple forms". You've heard this before, a phrase describing boilerplates that take the guesswork out of something so menial, such as internet form. Does that imply that making a form from scratch cannot be dead simple? Certainly not.

Fear not the length of this post. I will explain the process of hosting a contact form on Netlify that emails on submission. It may seem long, but this exercise can be extrapolated to many more backend operations beyond sending emails. See the backstory behind this tutorial [here](https://www.vokev.in/blog/ode-to-netlify).

### Prerequisites
* React app (or Gatsby)
* Nodemailer
* Site hosted on Netlify

### Setup

To set up command-line tools for local testing, please install `netlify-lambda`. More information about this [here](https://github.com/netlify/netlify-lambda). I find local testing important so you don't have to publish the site every time you want to test out your feature.

`npm i netlify-lambda`

Your functions will simulate listening on a server on port 9000. We will cover how to proxy this port later in this tutorial. On Gatsby, a proxy requires a special install. (No need for create-react-app).

`npm i http-proxy-middleware`

To "tell" Netlify where to point to your functions when you deploy, you need to make a `netlify.toml` file on your root directory with the following content. This will override your Netlify settings, so please respecify your publish directory. We will be building our functions to a `lambda-build/` directory in our root.

```
[build]
  command = "npm run build"
  functions = "lambda-build"
  publish = "public"
```

### A little setup explanation

We will make a `lambda/` directory in our root directory. This is where you will write your functions. Running
`netlify-lambda build lambda` will build your functions into the `lambda-build/` directory.

After building, functions in `lambda/` directory will be an exposed api route with the file name.
for example:

* In production,
`lambda/send.js` will expose an api route on http://mysite.com/.netlify/functions/send

To test your functions locally, `netlify-lambda serve lambda` exposes your api routes locally
on http://localhost:9000.
* in development,
`lambda/send.js` will expose an api route on http://localhost:9000/.netlify/functions/send


**IMPORTANT:**
When you deploy, Netlify will serve functions in the `lambda-build/` directory! **NOT** where you write your functions in the `lambda/` directory.
So remember! Run `netlify-lambda build lambda` *before* deploying to
production **OR** if you have `netlify-lambda serve lambda` running on port 9000,
any changes to the functions will rebuild automatically upon save.

### Setting up the proxy
When testing your app locally, if your app is running on localhost:3000, fetching data from
localhost:9000 will break CORS and error out.

If you plan on testing your netlify functions locally, then it is important
that you set up a proxy.

For Gatsby, add the following in your `gatsby-config.js`:
```
var proxy = require("http-proxy-middleware")
module.exports = {
  developMiddleware: app => {
    app.use(
      "/.netlify/functions/",
      proxy({
        target: "http://localhost:9000",
        pathRewrite: {
          "/.netlify/functions/": "",
        },
      })
    )
  },
}
```
For create-react-app, add the following in your `package.json`:
```
{
  "name": ...,
  "dependencies": {
    ...
  },
  "scripts": ...
  "proxy": "http://localhost:9000",
}
```

### The fun part
Now you are all set up!
Any requests that access this api will run the corresponding function in your
lambda directory.

In your react or gatsby app, set up your contact form. The way I set it up, each input field runs `setState` when `onChange` is triggered. You can get the fields however you want, I will not explain that here.

I want to retrieve these fields from state, and send an email with the body. I do so with the following in my React application. This class function will run when a submit button is triggered (notice this is a React function! We are not writing netlify functions quite yet).

```
sendMail = () => {
  const {name, email, message} = this.state;
  axios.post(process.env.GATSBY_LAMBDA_ENDPOINT + "/.netlify/functions/send", {
    name,
    email,
    message
  }).then(res => {
      if (res.data === "success") {
        console.log("Message sent.");
      } else if (res.data === "fail") {
        console.log("Message failed to send.");
      } else {
        console.log(res)
      }
    })
    .catch(error => {
      console.log(error);
    })
}
```

Notice `process.env.GATSBY_LAMBDA_ENDPOINT`. This makes it so this code will work locally
and in production (remember the api is exposed on localhost in development,
but in production, the api is exposed on your site domain). Refer to the previous section of this blog *A little setup explanation* for review.

We now have to set the endpoint in our local and production environment on Netlify.

##### Local:
* We set our endpoint in an `.env` file in our root directory.
  * Gatsby requires environment file to be specified ex. `.env.development`. The file should contain the following body: `GATSBY_LAMBDA_ENDPOINT="http://localhost:8000"`. I have my Gatsby app running on port 8000.

  * create-react-app can just be in a `.env` file with the following body: `REACT_APP_LAMBDA_ENDPOINT="http://localhost:3000/"`. create-react-app typically runs on port 3000.
  * **IMPORTANT:** Notice how the environment variables are prefixed by `GATSBY_` and `REACT_APP_`.
  * **IMPORTANT:** Remember to .gitignore your environment variables! Though not important for this exercise, it is good practice!

##### Production:

On netlify, set your production environment variables in the site settings. This can be found under `Settings > Build & Deploy > Environment`. Set this variable to be your root domain (ex. https://mysite.com)

### Time to write some Netlify Functions. Finally!

Now, we want the POST request we wrote earlier in our React app to trigger the function `send.js`, which we will make in our `lambda/` directory.

The way netlify-functions work is that each function is required to export a handler. The body inside the handler is executed whenever the request is made.

For example:
```
exports.handler = function(event, context, callback) {
  //...
}
```

The body would be our nodemailer code! If you already know how to use nodemailer, create your transport and send a `callback` (see below). If not, here is a comprehensive way to do it.

In our `send.js`:
```

exports.handler = function(event, context, callback) {
  //If request is not a post method, don't send mail
  if (event.httpMethod !== "POST") {
    callback(null, {
      statusCode: 200,
      body: "Not a post request"
    })
  }


  //Gatsby ONLY! Gatsby does not automatically read from .env files. This is the workaround.
  //For some reason, netlify functions read from the production environment so
  //put your nodemailer settings in a .env.production instead
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })

  //create-react-app ONLY! Here it is a little bit easier.
  require('dotenv').dotenv.config()

  //The host, port, and username could be hard-coded but I like to put all of
  //them into the same file so I can easily change my smtp transport whenever.
  //It's only IMPORTANT to hide the password!
  const MAIL_HOST = process.env.GATSBY_NODEMAILER_HOST;
  const MAIL_PORT = process.env.GATSBY_NODEMAILER_PORT;
  const MAIL_USER = process.env.GATSBY_NODEMAILER_USERNAME;
  const MAIL_PASS = process.env.GATSBY_NODEMAILER_PASSWORD;


  //The following is the same for both Gatsby and React. Standard nodemailer code.

  var nodemailer = require('nodemailer');

  var transport = {
    host: MAIL_HOST,
    port: MAIL_PORT,
    auth: {
      user: MAIL_USER,
      pass: MAIL_PASS
    }
  }

  var transporter = nodemailer.createTransport(transport)

  transporter.verify((error, success) => {
    if (error) {
      console.log('Verify failed');
    } else {
      console.log('Server is ready to take messages');
    }
  });

  const data = JSON.parse(event.body)
  var name = data.name
  var email = data.email
  var message = data.message

  var content = `Name: ${name} \nEmail: ${email} \nMessage: ${message}`
  var subject = `New message from ${name}`

  var mail = {
    to: 'youremail@gmail.com',
    subject: subject,
    text: content
  }


  transporter.sendMail(mail, (error, info) => {
    if (error) {
      console.log("error sending mail")
      callback(null, {
        statusCode: 200,
        body: "fail"
      });
    } else {
      console.log("mail sent")
      callback(null, {
        statusCode: 200,
        body: "success"
      });
    }
  })
}
```

Note how you specify your email recipient in the mail variable. Other than that, remember that the function terminates by the `callback()` function.
This `callback()` function is how it responds to the post request and returns you your data body!

**IMPORTANT:** Another friendly remember to build your functions before you deploy and to set your environment
variables through the Netlify site settings as well. Remember to hide your api keys and STMP authentication information via .gitignore.

I hope this tutorial was helpful for you today. I know it is a little long but I found that other tutorials online regarding netlify-functions left out stuff that required me some digging (such as how to set up the proxies and environment variables to work with Gatsby). I wanted to produce an all-comprehensive guide to get you up and running with netlify-functions without the guesswork.

If you have any questions, feel free to [contact me](https://www.vokev.in/contact/).
