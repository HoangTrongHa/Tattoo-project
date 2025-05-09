import { configureStore } from '@reduxjs/toolkit';
import selectedPartReducer from './selectedPartSlice';
import galleryReducer from './gallerySlice';
export const store = configureStore({
  reducer: {
    selectedPart: selectedPartReducer,
    gallery: galleryReducer,
  },
});