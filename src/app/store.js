import { configureStore } from '@reduxjs/toolkit'
// import productReducer from '../components/slice/productSlice'
import cartReducer from '../components/slice/cartSlice'
import currencyReducer from '../components/slice/currencySlice'

export default configureStore({
    reducer: {
        // product: productReducer,
        cart: cartReducer,
        currency: currencyReducer
    },
})