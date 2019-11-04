import React, { Component } from 'react'
import { Link } from "gatsby"
import ContactForm from "../components/ContactForm"
import SEO from "../components/seo"

class Contact extends Component {

  render() {
    return (
      <div className="main">
        <SEO title="Kevin Vo | Contact" />
        <div className="content" id="home">
          <h1> {"Hi, I'm Kevin. Let's chat!"} </h1>
          <ContactForm />
        </div>
      </div>
    );
  }
}

export default Contact;
