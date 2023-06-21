import React, { useState } from "react";

import css from "../Phonebook/phonestyle.module.css";

 const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  
  
  const handleSubmit = (event) => {
    event.preventDefault();

    onAddContact(name, number);
   setName("");
   setNumber("");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
    setName(value);
  } else if (name === "number") {
    setNumber(value);
    }
};


    return (
      <form className={css.pform} onSubmit={handleSubmit}>
        <label className={css.contact} htmlFor="nameInput">
          Name
          <input
            className={css.cont}
            id="nameInput"
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.contact} htmlFor="numberInput">
          Number
          <input
            className={css.cont}
            id="numberInput"
            type="tel"
            name="number"
            value={number}
            onChange={handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    );
    }
 
  

export default ContactForm;





// import React, { Component } from "react";
// //import { nanoid } from "nanoid";
// import css from "../Phonebook/phonestyle.module.css";



// class ContactForm extends Component {
//   state = {
//     name: "",
//     number: ""
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const { name, number } = this.state;
//     this.props.onAddContact(name, number);
//     this.setState({ name: "", number: "" });
//   };

//   handleInputChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     const { name, number } = this.state;

//     return (
//       <form className={css.pform} onSubmit={this.handleSubmit}>
//         <label className={css.contact} htmlFor="nameInput">
//           Name
//           <input
//             className={css.cont}
//             id="nameInput"
//             type="text"
//             name="name"
//             value={name}
//             onChange={this.handleInputChange}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </label>
//         <label className={css.contact} htmlFor="numberInput">
//           Number
//           <input
//             className={css.cont}
//             id="numberInput"
//             type="tel"
//             name="number"
//             value={number}
//             onChange={this.handleInputChange}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </label>
//         <button className={css.btn} type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }








// const ContactForm = ({ name, number, onInputChange, onAddContact }) => {
//   const handleSubmit = (event) => {
//   event.preventDefault();
//   onAddContact(event);
// };

//   return (
//     <form className={css.form} onSubmit={handleSubmit}>
//       <label className={css.contact} htmlFor="nameInput">
//         Name
//         <input
//           className={css.cont}
//           id="nameInput"
//           type="text"
//           name="name"
//           value={name}
//           onChange={onInputChange}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//       </label>
//       <label className={css.contact} htmlFor="numberInput">
//         Number
//         <input
//           className={css.cont}
//           id="numberInput"
//           type="tel"
//           name="number"
//           value={number}
//           onChange={onInputChange}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//       </label>
//       <button className={css.btn} type="submit">
//         Add contact
//       </button>
//     </form>
//   );
// };

// export default ContactForm;

