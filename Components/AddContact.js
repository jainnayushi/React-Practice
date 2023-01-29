import React, { useEffect, useState } from "react";

function AddContact({ contactAdd }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  let contact = {
    name: "",
    email: "",
  };
  const addDetails = (e) => {
    e.preventDefault();
    contact.name = name;
    contact.email = email;
    contactAdd(contact);
    setName("");
    setEmail("");
  };
  return (
    <div>
      <label> Name </label>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <br />
      <label> Email </label>
      <input
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <br />
      <button onClick={addDetails}>Submit</button>
    </div>
  );
}

export default AddContact;
