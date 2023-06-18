
import React, { Component } from "react";
import { nanoid } from "nanoid";
import css from "../components/Phonebook/phonestyle.module.css";
import ContactForm from "components/ContactForm/ContactForm.jsx";
import Filter from "components/Filter/Filter.jsx";
import ContactList from "components/ContactList/ContactList";

class Phonebook extends Component {
  state = {
    contacts: [],
    filter: "",
    // name: "",
    // number: ""
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // handleAddContact = (event) => {
  //   event.preventDefault();
  //   const { name, number, contacts } = this.state;

  //   const errorContact = contacts.find((contact) => contact.name === name);

  //   if (errorContact) {
  //     alert(`${name} is already in contacts`);
  //     return;
  //   }

  handleAddContact = (name, number) => {
    const { contacts } = this.state;

    const errorContact = contacts.find((contact) => contact.name === name);

    if (errorContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      name: "",
      number: ""
    }));
  };

  handleDeleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== contactId)
    }));
  };

  handleFilterChange = (event) => {
    const { value } = event.target;
    this.setState({ filter: value });
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className={css.section}>
        <h2 className={css.contText}>Phonebook</h2>

        <ContactForm
          // name={name}
          // number={number}
          // onInputChange={this.handleInputChange}
          onAddContact={this.handleAddContact}
        />

        <div className={css.formContact}>
          <h2 className={css.text}>Contacts</h2>

          <Filter
            filter={filter}
            onFilterChange={this.handleFilterChange}
          />

          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.handleDeleteContact}
          />
        </div>
      </div>
    );
  }
}

export default Phonebook;

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
       >
   

      <Phonebook
        state={{
          contacts: [],
          filter: '',
          name: '',
          number: ''
        }}
      />
    </div>
  );
};
