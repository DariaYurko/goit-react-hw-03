import Contact from '../Contact/Contact';
import css from './ContactsList.module.css';

const ContsctList = ({ contacts }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => {
        return (
          <li key={contact.id} className={css.contact}>
            <Contact name={contact.name} phone={contact.number} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContsctList;
