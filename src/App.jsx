import initialContacts from './contacts.json';
import { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList/ContactList';

const App = () => {
  const [contacts, setContacts] = useState(initialContacts);

  return (
    <div>
      <h1>Phonebook</h1>
      {/* <ContactForm />
      <SearchBox />
      <ContactList /> */}

      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
