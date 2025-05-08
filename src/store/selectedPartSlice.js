import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  style: null,
  bodyPart: null,
};

export const selectedPartSlice = createSlice({
  name: 'selectedPart',
  initialState,
  reducers: {
    setStyle: (state, action) => {
      state.style = action.payload;
    },
    setBodyPart: (state, action) => {
      state.bodyPart = action.payload;
    },
  },
});

export const { setStyle, setBodyPart } = selectedPartSlice.actions;
export default selectedPartSlice.reducer;