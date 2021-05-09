import ContactForm from './Components/ContactForm';
import Filter from './Components/Filter/';
import ContactsList from './Components/ContactsList';
import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchContacts } from './redux/phonebook/phonebook-operations';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />

      <ContactsList />
    </div>
  );
}

export default App;
