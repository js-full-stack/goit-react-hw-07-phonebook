import { createSelector } from 'reselect';

export const getCurrentContacts = state => state.contactsReducer.items;
export const getFilterContacts = state => state.contactsReducer.filter;

export const getContactItemById = id =>
  createSelector([getCurrentContacts], contacts => {
    return contacts.find(contact => contact.id === id);
  });

export const getVisibleContacts = createSelector(
  [getCurrentContacts, getFilterContacts],
  (items, filter) => {
    return items.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
  },
);
