import React, { Component } from 'react'
import { Link } from "gatsby"
import ContactForm from "../components/ContactForm"
import Header from "../components/Header"
import SEO from "../components/seo"
import "./contact.css"

class Contact extends Component {

  render() {
    return (
      <React.Fragment>
        <Header/>
        <div className="main">
          <SEO title="Kevin Vo | Contact" />
          <div className="content" id="contact-form">
            <h2> {"Hey, I'm Kevin. Let's chat!"} </h2>
            <ContactForm />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
