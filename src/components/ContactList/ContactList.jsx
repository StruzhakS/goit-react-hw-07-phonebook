import { useDispatch, useSelector } from 'react-redux';
import s from './ContaactList.module.css';
import { deleteContactAction } from 'strore/contacts/contactSlice';

const ContactList = () => {
  const { contacts, filter } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const deleteContact = contactId => {
    dispatch(deleteContactAction(contactId));
  };

  const filteredContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ul className={s.contactList}>
        {filteredContacts.map(contact => (
          <li className={s.listItem} key={contact.id}>
            <p className={s.name}>{contact.name}: </p> <p>{contact.number}</p>
            <button
              className={s.deleteButton}
              type="button"
              onClick={e => deleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <p className={s.totalContacts}>
        Total contacts {filteredContacts.length}
      </p>
    </>
  );
};

export default ContactList;
