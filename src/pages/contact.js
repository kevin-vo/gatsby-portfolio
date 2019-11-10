import React from 'react'
import ContactForm from "../components/ContactForm"
import Header from "../components/Header"
import SEO from "../components/seo"
import "./styles/contact.css"

const Contact = () => (
  <React.Fragment>
    <Header/>
    <div className="main">
      <SEO title="Kevin Vo | Contact" />
      <div className="content" id="contact-form">
        <h2> {"Hey, I'm Kevin. Let's chat!"} </h2>
        <p>
          You can also email me directly:{' '}
          <a className="animated" href="mailto:hey@vokev.in">
            hey@vokev.in
          </a>
        </p>
        <ContactForm />
      </div>
    </div>
  </React.Fragment>
)

export default Contact;
