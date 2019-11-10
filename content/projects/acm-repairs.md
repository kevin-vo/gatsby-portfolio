---
title: ACM Repairs
date: 2019-11-07T02:34:41.870Z
path: /acm-repairs
thumbnail: /img/logo512.png
color: '#69beff'
description: ReactJS netlify netlify-cms netlify-functions mailgun mapboxGL
---
<https://acmrepairs.com/>

Business website for the HVAC and Appliance repair company ACM Repairs.

![page-gif](https://i.imgur.com/zhUDhTS.gif)

## Features

### General

* Webpage built on create-react-app and hosted on Netlify which offers continuous deployment from this repo
* Responsive for view on desktop, tablet, and mobile
* Mostly single-page application with exception of map tool (see below)
* Contact form which forwards its information to the business via email.
  * Utilizes [Netlify serverless functions](https://docs.netlify.com/functions/overview/), a wrapper for AWS [Lambda functions](https://aws.amazon.com/lambda/), eliminating the need for a dedicated server for sending email in the backend!
  * Emails powered by [Mailgun](https://www.mailgun.com/) SMTP
  * Protected by [Google recaptcha v2](https://developers.google.com/recaptcha/docs/display)

### Map Tool

![map-gif](https://i.imgur.com/7EsqIzB.gif)

* Interactive map tool allowing prospective customers to determine if they fall in the company's service range
  * Powered by [Uber's MapboxGL wrapper](https://uber.github.io/react-map-gl/#/)
  * Dynamically update the viewport based on user's distance from the company
  * Utilizes [Mapbox Geocoding API](https://docs.mapbox.com/api/search/#geocoding) to query manual location requests with great flexibility

### Content Management System

![cms-gif](https://i.imgur.com/RNjLbU3.gif)

* Gives the company flexibility in updating what is on the site, such as their contact information, their available hours, and the page content itself
  * Allows the company to have admin CMS privileges, without requiring them to make any extra accounts for third party sites. Authentication is handled through their Google account
  * Content updates are handled directly in GitHub, meaning changes are visible as soon as a publish builds through Netlify
  * Company can update their location and service range as they scale. Updates here are reflected in the map tool (see above)
  * Powered by [NetlifyCMS](https://www.netlifycms.org/)

### Todo

* Implement photos integration with Instagram as company scales
* Add reviews section using Google My Business API as company scales
