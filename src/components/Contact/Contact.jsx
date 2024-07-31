import { FaUserCircle } from 'react-icons/fa';
import { AiFillPhone } from 'react-icons/ai';
import css from './Contact.module.css'

const Contact = ({ name, phone }) => {
  return (
    <>
      <div className="profile">
        <p className={css.name}>
          <FaUserCircle />
          {name}
        </p>
        <a href={`tel:${phone.split('-').join('')}`} className={css.phone}>
          <AiFillPhone />
          {phone}
        </a>
      </div>
      <button className={css.button}>Delete</button>
    </>
  );
};

export default Contact;
