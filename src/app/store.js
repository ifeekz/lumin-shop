import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "../components/slice/cartSlice"
import currencyReducer from "../components/slice/currencySlice"

export default configureStore({
  reducer: {
    cart: cartReducer,
    currency: currencyReducer
  },
})