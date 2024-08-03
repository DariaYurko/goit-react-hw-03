import css from './ContactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = event => {
    event.preventDefault();

    const formEl = event.currentTarget.elements;
    const name = formEl.username.value;
    const number = formEl.userphone.value;

    const userProfile = {
      name,
      number,
    };
    //console.log(userProfile);
    //
    onAddContact(userProfile);
    //
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.contactForm}>
      <label>
        <span>Name</span>
        <input
          name="username"
          type="text"
          placeholder="Enter your name"
          required
        />
      </label>

      <label>
        <span>Phone</span>
        <input
          name="userphone"
          type="tel"
          placeholder="Enter your phone"
          required
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
