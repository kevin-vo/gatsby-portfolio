import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

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
  }

  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
            />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
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
            />
        </Form.Group>
        <Button type="submit" onClick={this.onSubmit}>Submit</Button>
      </Form>
    )
  }
}

export default ContactForm
