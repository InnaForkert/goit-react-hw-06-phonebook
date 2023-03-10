import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.unshift(action.payload);
    },
    removeContact(state, action) {
      return state.filter(el => el.name !== action.payload);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

export const getContacts = state => state.contacts;
