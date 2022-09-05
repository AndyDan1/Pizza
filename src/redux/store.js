import { configureStore } from '@reduxjs/toolkit'
import filterReducer from "./slice/filterSlice";
import cartReducer from "./slice/cartSlice";
import pizzasReducer from "./slice/pizzasSlice";

export const store = configureStore({
  reducer: {
    filters:filterReducer,
    cart:cartReducer,
    pizzas:pizzasReducer
  },
})