import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../context/cart/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default store;
