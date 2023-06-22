import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import css from "../components/Phonebook/phonestyle.module.css";
import ContactForm from "components/ContactForm/ContactForm.jsx";
import Filter from "components/Filter/Filter.jsx";
import ContactList from "components/ContactList/ContactList";

const Phonebook = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const storedContacts = JSON.parse(window.localStorage.getItem("contacts"));
    if (storedContacts && storedContacts.length) {
      setContacts(storedContacts);
    }
  }, []);

  useEffect(() => {
    if (contacts.length) {
      window.localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }, [contacts]);

  const handleAddContact = (name, number) => {
    const errorContact = contacts.find((contact) => contact.name === name);

    if (errorContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const handleDeleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const handleFilterChange = (event) => {
    const { value } = event.target;
    setFilter(value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.section}>
      <h2 className={css.contText}>Phonebook</h2>

      <ContactForm onAddContact={handleAddContact} />

      <div className={css.formContact}>
        <h2 className={css.text}>Contacts</h2>

        <Filter filter={filter} onFilterChange={handleFilterChange} />

        <ContactList
          contacts={filteredContacts}
          onDeleteContact={handleDeleteContact}
        />
      </div>
    </div>
  );
};

export const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 40,
        color: "#010101",
      }}
    >
      <Phonebook />
    </div>
  );
};




