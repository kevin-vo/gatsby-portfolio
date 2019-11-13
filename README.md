<a href=https://vokev.in/><img src="https://d33wubrfki0l68.cloudfront.net/482b495ecb5d6e73fa417070d52616135b33cc5b/e113a/static/kv_transparent-d489735b89556ed891dbdeca6c242f82.svg" alt="alt text" width="150"/></a>
# Gatsby Portfolio
>https://vokev.in/

>Personal software development portfolio, powered by GatsbyJS

[![Netlify Status](https://api.netlify.com/api/v1/badges/bb395865-0d68-49f3-8fc3-50bf371e24e9/deploy-status)](https://app.netlify.com/sites/wonderful-lovelace-4d6f07/deploys)

![page-gif](https://i.imgur.com/RFdnygn.gif)

## Features
### General
* Webpage built on GatsbyJS and hosted on Netlify which offers continuous deployment from this repo
* Responsive for view on desktop, tablet, and mobile
* Showcases projects and blogposts
* Contact form which fowards to my email.
	* Utilizes [Netlify serverless functions](https://docs.netlify.com/functions/overview/), a wrapper for AWS [Lambda functions](https://aws.amazon.com/lambda/), eliminating the need for a dedicated server for sending email in the backend!
	* Emails powered by [Mailgun](https://www.mailgun.com/) SMTP

### Projects section
![projects](https://i.imgur.com/7Zu2aJ9.png)
* Projects are added through a CMS (see below)
* Project information are stored as markdown files which are queried using GraphQL
* Static pages are generated using each project, powered by [Gatsby's Node.js createPage API](https://www.gatsbyjs.org/docs/node-apis/)
* Project filters are made possible by modifying the GraphQL queries to include specific tags
* Site uses similar template and layouts to produce a Blog section as well

### Content Management System
![cms-gif](https://i.imgur.com/HZs7Sx8.gif)
* Allows me to easily submit project/blog updates which are readily visible once a publish builds through Netlify
* Color field allows me to thematically style how a project looks on the site.
* Tags offer the ability to filter projects by its type.
* Powered by [NetlifyCMS](https://www.netlifycms.org/)

### Todo
* Depending on the amount of blog/project posts:
  * lazy load images to speed up performance
  * paginate so single-page content is less bloated
