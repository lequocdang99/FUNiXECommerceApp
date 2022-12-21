import { configureStore } from '@reduxjs/toolkit';
import popupReducer from './popup';
import loginReducer from './login';
import cartReducer from './cart';

//Store

export default configureStore({
  reducer: { popup: popupReducer, login: loginReducer, cart: cartReducer },
});
