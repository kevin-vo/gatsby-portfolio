---
title: Gatsby Portfolio
date: 2019-11-01T06:30:30.157Z
path: /projects/gatsby-portfolio
link: 'https://www.vokev.in/'
github: 'https://github.com/kevin-vo/gatsby-portfolio'
thumbnail: /img/gatsby-portfolio-thumb.jpg
tags:
  - featured
  - web
color: '#000000'
description: 'Personal software development portfolio, powered by GatsbyJS'
technologies:
  - GatsbyJS
  - GraphQL
  - ReactJS
  - netlify-cms
  - netlify-functions
  - mailgun
---
A little more insight on how I made this site!

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
