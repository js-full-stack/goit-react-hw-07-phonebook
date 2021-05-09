import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContact,
  filterContacts,
} from './phonebook-actions';

const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

const items = createReducer(initialState.contacts.items, {
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer(initialState.contacts.filter, {
  [filterContacts]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
});
