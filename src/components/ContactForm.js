import React, { Component } from 'react'
import { Form, Alert, Spinner } from 'react-bootstrap'
import axios from 'axios'

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    alertShow: false,
    alertStatus: "",
    alertMsg: "",
    isSending: false,
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
    this.clearAlerts();
    this.setSendingState(true);
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
        this.setSendingState(false);
      })
      .catch(error => {
        this.handleFailedSubmission();
        this.setSendingState(false);
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

  setSendingState = (isSending) => {
    this.setState({
      isSending
    });
  }

  render() {
    const {isSending, alertShow, alertStatus, alertMsg} = this.state;
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
          style={{display: (alertShow ? "initial" : "none")}}
          variant={alertStatus}>
          {alertMsg}
        </Alert>
        <button className="themed" type="submit">Submit</button>
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            height: "100vh",
            width: "100%",
            background: "rgba(0, 0, 0, 0.8)",
            display: (isSending ? "flex" : "none"),
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Spinner animation="border" variant="light"/>
        </div>
      </Form>
    )
  }
}

export default ContactForm
