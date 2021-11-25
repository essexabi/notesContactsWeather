import React, { Fragment, useState } from "react";
import { Contact } from "./Contact";

export const PhoneBook = ({ contacts, setContacts }) => {
  const [newContact, setNewContact] = useState({
    id: null,
    name: "",
    number: ""
  });

  const handleChange = (event) => {
    console.log(newContact);

    setNewContact({
      ...newContact,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const AddNewContactToState = {
      id: contacts.length + 1,
      name: newContact.name,
      number: newContact.number
    };
    console.log(AddNewContactToState);
    setContacts(contacts.concat(AddNewContactToState));
    setNewContact({ id: null, name: "", number: "" });
  };

  return (
    <Fragment>
      <div className="titleSection">
        <h2>#PhoneBook</h2>
      </div>
      <div className="clearfix"></div>

      <div className="section">
        <div className="note">
          <ul>
            {contacts.map((contact) => (
              <Contact
                key={contact.id}
                name={contact.name}
                number={contact.number}
              />
            ))}
          </ul>
        </div>

        <div className="clearfix"></div>

        <div className="aside">
          <h4>add new contact!!</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Contact Name</label>
              <input type="text" name="name" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="name">Contact Number</label>
              <input type="text" name="number" onChange={handleChange} />
            </div>
            <button type="submit">add contact</button>
          </form>
        </div>
        <div className="clearfix"></div>
      </div>
    </Fragment>
  );
};
