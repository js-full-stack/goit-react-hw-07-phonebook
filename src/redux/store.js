import {
  persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import contactsReducer from '../redux/phonebook/phonebook-reducer';
import logger from 'redux-logger';
// import storage from 'redux-persist/lib/storage';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),

  // logger,
];

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: 'items',
// };

export const store = configureStore({
  reducer: {
    contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
