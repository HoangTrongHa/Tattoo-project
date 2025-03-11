import { configureStore } from '@reduxjs/toolkit';
import selectedPartReducer from './selectedPartSlice';

export const store = configureStore({
  reducer: {
    selectedPart: selectedPartReducer,
  },
});