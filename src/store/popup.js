import { createSlice } from '@reduxjs/toolkit';

export const popupSlice = createSlice({
  name: 'popup',
  initialState: { popup: false, items: '' },
  reducers: {
    showPopUp: (state, actions) => {
      state.popup = true;
      state.items = actions.payload;
    },
    hidePopUp: (state) => {
      state.popup = false;
      state.items = '';
    },
  },
});

export const { showPopUp, hidePopUp } = popupSlice.actions;

export default popupSlice.reducer;
