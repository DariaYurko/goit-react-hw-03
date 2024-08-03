import initialContacts from './contacts.json';
import { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';

import { nanoid } from 'nanoid';

const App = () => {
  const [contacts, setContacts] = useState(initialContacts);
  // console.log(contacts);

  const onAddContact = contact => {
    const finalContact = {
      id: nanoid(),
      ...contact,
    };
    setContacts([finalContact, ...contacts]);
    // console.log(contacts);
  };

  const onDeleteContact = contactId => {
    // console.log(contactId);
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const [filtredContactValue, setFiltredContactValue] = useState('');
  // console.log(filtredContactValue);

  const onInputChange = e => {
    const value = e.target.value;
    setFiltredContactValue(value);
    // console.log(value);
  };

  const filtredContactList = contacts.filter(contact => {
    return contact.name
      .toLowerCase()
      .includes(filtredContactValue.toLowerCase());
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />

      <SearchBox
        filtredContactValue={filtredContactValue}
        handleChange={onInputChange}
      />

      <ContactList
        contacts={filtredContactList}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
};

export default App;
