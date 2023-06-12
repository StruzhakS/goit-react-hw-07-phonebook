import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';

export const contactSlice = createSlice({
  name: 'Contact',
  initialState,
  reducers: {
    addContactAction: (state, action) => ({
      ...state,
      contacts: [...state.contacts, action.payload],
    }),
    deleteContactAction: (state, action) => ({
      ...state,
      contacts: state.contacts.filter(el => el.id !== action.payload),
    }),
    filterContactAction: (state, action) => ({
      ...state,
      filter: action.payload,
    }),
  },
});

export const contactReducer = contactSlice.reducer;
export const { addContactAction, deleteContactAction, filterContactAction } =
  contactSlice.actions;
