import React, { Component } from 'react'
import { Link } from "gatsby"
import ContactForm from "../components/ContactForm"
import SEO from "../components/seo"

class Contact extends Component {

  render() {
    return (
      <div className="main">
        <SEO title="Kevin Vo | Contact" />
        <div className="content">
          <h1> hi </h1>
          <ContactForm />
        </div>
      </div>
    );
  }

}

export default Contact;
