import {
  addContactRequest,
  addContactSuccess,
  addContactError,
} from './phonebook-actions';

import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3040/';

export const addContact = (name, number) => dispatch => {
  const contact = { name, number };

  dispatch(addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

export const deleteContact = id => dispatch => {
  dispatch();
};
