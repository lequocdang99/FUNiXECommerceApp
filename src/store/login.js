import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: { login: false },
  reducers: {
    ON_LOGIN: (state) => {
      state.login = true;
    },
    ON_LOGOUT: (state) => {
      state.login = false;
    },
  },
});

export const { ON_LOGIN, ON_LOGOUT } = loginSlice.actions;

export default loginSlice.reducer;
