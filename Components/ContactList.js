import React from "react";

function ContactList({ list, removeContact, editContact }) {
  console.log("here", list);
  let b = list.map((contact) => {
    return (
      <div style={{ margin: "30px" }}>
        <div style={{ textTransform: "capitalize", fontWeight: "bold" }}>
          {contact.name}
        </div>
        <span>{contact.email}</span>
        <br />
        <button
          style={{ margin: "5px" }}
          onClick={() => removeContact(contact.name)}
        >
          Remove
        </button>
      </div>
    );
  });
  return b;
}

export default ContactList;
