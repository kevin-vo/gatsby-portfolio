import React, { Component } from 'react'
import Helmet from "react-helmet"
import SEO from "../components/seo"
import "../components/layout.css"
import "./index.css"

class Contact extends Component {

  render() {
    return (
      <div className="main">
        <SEO title="Kevin Vo | Contact" />
        <div className="content" id="home">
          <Helmet>
            <link href="https://fonts.googleapis.com/css?family=Lato|Roboto&display=swap" rel="stylesheet"/>
          </Helmet>
        </div>
      </div>
    );
  }

}

export default Contact;
