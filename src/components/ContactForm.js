import React, { Component } from 'react'
import { Form, Alert } from 'react-bootstrap'
import axios from 'axios'

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    alertShow: false,
    alertStatus: "",
    alertMsg: "",
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
          this.handleSuccessfulSubmission();
        } else {
          this.handleFailedSubmission();
        }
      })
      .catch(error => {
        console.log(error);
        this.handleFailedSubmission();
      })
  }

  clearAlerts = () => {
    this.setState({
      alertShow: false
    });
  }

  handleSuccessfulSubmission = () => {
    this.setState({
      alertShow: true,
      alertStatus: "success",
      alertMsg: "Message sent successfully. I will get back to you as soon as I can!"
    });
  }

  handleFailedSubmission = () => {
    this.setState({
      alertShow: true,
      alertStatus: "danger",
      alertMsg: "Message failed to send. Please try again or contact me directly at hey@vokev.in"
    });
  }

  render() {
    const {alertShow, alertStatus, alertMsg} = this.state;
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
        <Alert
          show={alertShow}
          variant={alertStatus}>
          {alertMsg}
        </Alert>
        <button className="themed" type="submit">Submit</button>
      </Form>
    )
  }
}

export default ContactForm
