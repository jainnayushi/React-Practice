import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { useEffect, useState } from "react";

function App() {
  const [contacts, setContacts] = useState([]);
  const KEY = "list";

  const contactAdd = (contact) => {
    setContacts([...contacts, contact]);
  };

  const removeContact = (name) => {
    const newList = contacts.filter((contact) => {
      return contact.name != name;
    });
    setContacts(newList);
  };

  // useEffect(() => {
  //   const storedList = JSON.parse(localStorage.getItem(KEY));
  //   if (storedList) setContacts(storedList);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(KEY, JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className="App">
      <Header />
      <AddContact contactAdd={contactAdd} />
      <ContactList list={contacts} removeContact={removeContact} />
    </div>
  );
}

export default App;
