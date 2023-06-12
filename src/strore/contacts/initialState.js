import { nanoid } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: nanoid(), name: 'Julia Turkina', number: '050-111-86-46' },
    { id: nanoid(), name: 'Vova Turkin', number: '095-222-81-12' },
    { id: nanoid(), name: 'Kyivstar', number: '0-800-300-460' },
    { id: nanoid(), name: 'Ukrtelecom', number: '0-800-506-800' },
    { id: nanoid(), name: 'Serhii Struzhak', number: '0666-77-22-74' },
  ],
  filter: '',
};
export default initialState;
