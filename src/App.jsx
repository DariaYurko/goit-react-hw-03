import initialContacts from './contacts.json'
import { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList/ContactList';

// const [contacts, setContacts] = useState(initialContacts);

const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      {/* <ContactForm />
      <SearchBox />
      <ContactList /> */}

      <ContactList contacts={initialContacts} />
    </div>
  );
};

export default App;
