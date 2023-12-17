import React, { Component } from 'react';
import { Form } from './ContactForm.styled.js';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleAddContact = evt => {
    evt.preventDefault();

    this.props.getNewContact(this.state);

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleAddContact}>
        <label>
          Enter your name:
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            value={this.state.name}
            required
          />
        </label>

        <label>
          Enter your number:
          <input
            onChange={this.handleChange}
            type="tel"
            name="number"
            value={this.state.number}
            required
          />
        </label>

        <button>Add contact</button>
      </Form>
    );
  }
}
