import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../components/reducers/cartReducer'
import currencyReducer from '../components/reducers/currencyReducer'

export default configureStore({
    reducer: {
        cart: cartReducer,
        currency: currencyReducer
    },
})