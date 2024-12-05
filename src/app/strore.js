import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../context/cart/cartSlice'

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
})