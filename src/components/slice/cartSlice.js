import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showCartModal: false,
    cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        toggleCartModal(state) {
            state.showCartModal = !state.showCartModal;
        },

        addToCart(state, action) {
            const existingIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );

            if (existingIndex >= 0) {
                state.cartItems[existingIndex] = {
                    ...state.cartItems[existingIndex],
                    cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
                };
            } else {
                let tempProductItem = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(tempProductItem);
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );

            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1;
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter(
                    (item) => item.id !== action.payload.id
                );

                state.cartItems = nextCartItems;
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        removeFromCart(state, action) {
            state.cartItems.map((cartItem) => {
                if (cartItem.id === action.payload.id) {
                    const nextCartItems = state.cartItems.filter(
                        (item) => item.id !== cartItem.id
                    );

                    state.cartItems = nextCartItems;
                }
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
                return state;
            });
        },

        getTotals(state, action) {
            let { total, quantity } = state.cartItems.reduce(
                (cartTotal, cartItem) => {
                    const { price, cartQuantity } = cartItem;
                    const itemTotal = price * cartQuantity;

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;

                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );
            total = parseFloat(total.toFixed(2));
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },

        recalculateCart(state, action) {
            const productIdsInCart = [];
            const productsInCart = [];

            state.cartItems.map(cartItem => {
                productIdsInCart.push(cartItem.id)
            });

            action.payload.products.map(product => {
                if (productIdsInCart.includes(product.id)) {
                    productsInCart[product.id] = product;
                }
            });

            state.cartItems.map(cartItem => {
                const existingIndex = state.cartItems.findIndex(
                    (item) => item.id === productsInCart[cartItem.id].id
                );

                state.cartItems[existingIndex] = {
                    ...state.cartItems[existingIndex],
                    price: productsInCart[cartItem.id].price,
                    cartQuantity: state.cartItems[existingIndex].cartQuantity
                };
            }
            );

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        clearCart(state, action) {
            state.cartItems = [];
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
    },
});

export const {
    toggleCartModal,
    addToCart,
    decreaseCart,
    removeFromCart,
    getTotals,
    recalculateCart,
    clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
