import React, { Component } from 'react'
import { Link } from "gatsby"
import ContactForm from "../components/ContactForm"
import SEO from "../components/seo"
import "./contact.css"

class Contact extends Component {

  render() {
    return (
      <div className="main">
        <SEO title="Kevin Vo | Contact" />
        <div className="content" id="contact-form">
          <h2> {"Hey, I'm Kevin. Let's chat!"} </h2>
          <ContactForm />
        </div>
      </div>
    );
  }
}

export default Contact;
