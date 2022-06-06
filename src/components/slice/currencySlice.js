import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentCurrency: localStorage.getItem("currency")
        ? localStorage.getItem("currency")
        : 'USD'
};

const currencySlice = createSlice({
    name: "currency",
    initialState,
    reducers: {
        changeCurency(state, action) {
            state.currentCurrency = action.payload;
            localStorage.setItem("currency", action.payload);
        },
    },
});

export const { changeCurency } = currencySlice.actions;

export default currencySlice.reducer;
