import styles from './ContactsList.module.scss';
import ContactListItem from './ContactListItem';

import { useSelector } from 'react-redux';

const visibleContacts = ({ contactsReducer: { items, filter } }) => {
  return items.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
};

const ContactsList = () => {
  const contacts = useSelector(visibleContacts);
  return (
    contacts.length > 0 && (
      <>
        <ul className={styles.contacts}>
          {contacts.map(({ id }) => (
            <ContactListItem key={id} id={id} />
          ))}
        </ul>
      </>
    )
  );
};

export default ContactsList;
