import styles from './ContactsList.module.scss';
import ContactListItem from './ContactListItem';
import { fetchContacts } from '../../redux/phonebook/phonebook-operations';
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/phonebook/phonebook-selectors';

const ContactsList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  const contacts = useSelector(getVisibleContacts);
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
