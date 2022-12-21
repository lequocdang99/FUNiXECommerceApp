import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: { listCart: JSON.parse(localStorage.getItem('cart')) },
  reducers: {
    ADD_CART: (state, actions) => {
      state.listCart = state.listCart.concat(actions.payload);
      localStorage.setItem('cart', JSON.stringify(state.listCart));
    },
    UPDATE_CART: (state, actions) => {
      state.listCart[actions.payload[0]] = {
        ...state.listCart[actions.payload[0]],
        quantity:
          state.listCart[actions.payload[0]].quantity + actions.payload[1],
        totalPrice:
          (state.listCart[actions.payload[0]].quantity + actions.payload[1]) *
          state.listCart[actions.payload[0]].price,
      };
      localStorage.setItem('cart', JSON.stringify(state.listCart));
    },
    DELETE_CART: (state, actions) => {
      state.listCart.splice(actions.payload, 1);
      localStorage.setItem('cart', JSON.stringify(state.listCart));
    },
  },
});

export const { ADD_CART, UPDATE_CART, DELETE_CART } = cartSlice.actions;

export default cartSlice.reducer;
