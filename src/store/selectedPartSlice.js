import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: null,
};

export const selectedPartSlice = createSlice({
  name: 'selectedPart',
  initialState,
  reducers: {
    setSelectedPart: (state, action) => {
      console.log('action.payload', action.payload);
      state.value = action.payload;
    },
  },
});

export const { setSelectedPart } = selectedPartSlice.actions;
export default selectedPartSlice.reducer;