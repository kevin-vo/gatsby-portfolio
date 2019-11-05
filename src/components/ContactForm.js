import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import axios from 'axios'

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  }

  onChange = (e) => {
    this.setState({[e.target.name] : e.target.value});
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.sendMail();
  }

  sendMail = () => {
    const {name, email, message} = this.state;
    axios.post(process.env.GATSBY_LAMBDA_ENDPOINT + "/.netlify/functions/send", {
      name,
      email,
      message
    }).then(res => {
        if (res.data === "success") {
          console.log("Message sent.");
        } else if (res.data === "fail") {
          console.log("Message failed to send.");
        } else {
          console.log(res)
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
            required
            />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            required
            />
        </Form.Group>
        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows="4"
            name="message"
            value={this.state.message}
            onChange={this.onChange}
            required
            />
        </Form.Group>
        <button className="themed" type="submit">Submit</button>
      </Form>
    )
  }
}

export default ContactForm
