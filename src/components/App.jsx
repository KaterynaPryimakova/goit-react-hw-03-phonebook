import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  updateState = newContact => {
    const alreadyExist = this.state.contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (alreadyExist) {
      alert(`${newContact.name} is already in contact.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
    }));
  };

  handleFindContact = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };

  handleDeleteContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.trim().toLowerCase()) ||
        contact.number.includes(filter)
    );
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm title="Phonebook" getNewContact={this.updateState} />

        <h2>Contacts</h2>
        <Filter
          findContact={this.handleFindContact}
          filter={this.state.filter}
        />
        <ContactList
          title="Contacts"
          contacts={this.getFilteredContacts()}
          deleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}
