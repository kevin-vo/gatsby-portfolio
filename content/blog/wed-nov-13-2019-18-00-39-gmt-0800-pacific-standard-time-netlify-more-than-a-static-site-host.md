---
title: 'Netlify: More than a static site host '
date: 2019-10-18T01:00:39.237Z
path: /blog/ode-to-netlify
thumbnail: /img/netlify-functions-thumb.jpg
description: >-
  Everyone loves free. And the best website hosting service is a free one. See
  how Netlify offers functionality beyond its competitors.
---
### An ode to Netlify

I'll just go ahead and say it. Netlify should not be free... Yet here I am, deploying sites that continuously build from my GitHub repos, all without me paying a single dime. For that, I am eternally grateful. I now recommend using Netlify to deploy any small to medium scale projects.

"Isn't there always a catch to 'free' though?" you might ask. To that question, my astute and observant readers, you are correct. To a degree.

### Backstory

Netlify strictly deploys _static_ web sites. This makes backend functionality exceptionally difficult.

When tackling a business website for one of my commissioned projects, I decided to create a ReactJS app hosted on Netlify. Good enough, right? A frontend framework handling simple static web content. Netlify seemed perfect for the job.

A challenge presented itself when implementing a contact form. I wanted to forward form submissions to the business's email. This was easily solved by running an Express.js server exposing a POST route and listening to requests, sending emails with the request body. 

### The Problem

The look on my face when learning that I couldn't bundle my React app with my Express server and deploy it simultaneously. That was the moment I learned Netlify only served static sites. Big oof. Major design oversight on my part!

Now, Netlify offers the ability to integrate their forms service with your app to handle form submissions in shop. However, that would require my client to consistently check Netlify for contact updates _on top_ of the emails+calls they were already receiving. No self-respecting developer would let their client do that! Netlify forms have a time and place but this was not one of them.

I considered hosting the Express server on Heroku. However, wake-times attributed with the free tier made me explore more options. 

### The Solution

Netlify functions to the rescue. Netlify functions, powered by AWS Lambda, allows you to perform backend tasks when called upon. You don't need a server running 24/7 just to send emails... just ping the functions when you need them. 

This makes paying for required backend functionality infinitely scalable and economical. The free tier offers you 125k function requests per month (very gracious, thank you again Netlify.) This was way more than the business needed. This made the main bottleneck the SMTP transport I used for email (most free transports offer about 5k to 10k emails per month). For small businesses where projected growth is not so certain, this plan is perfect for the job. And if for any reason they exceed this limit, you can pay as you go!

A free, modern backend service with free site hosting? A match made in heaven. Cue Eric Clapton's _Wonderful Tonight_. This is my ode to Netlify.

For more information on how I implemented the functions, see my blog post about contact forms.
