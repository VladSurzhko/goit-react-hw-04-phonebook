import React from "react";
// import PropTypes from 'prop-types';
//import { nanoid } from "nanoid";
import css from "../Phonebook/phonestyle.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.lists}>
      {contacts.map((contact) => (
        <li className={css.items} key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className={css.btnDelete}
            onClick={() => onDeleteContact(contact.id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

// ContactList.propTypes = {
//   contacts:PropTypes.string,
// }