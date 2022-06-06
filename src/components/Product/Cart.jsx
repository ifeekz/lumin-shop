import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TrashIcon, ArrowCircleRightIcon } from '@heroicons/react/outline';
import {
    toggleCartModal,
    addToCart,
    clearCart,
    decreaseCart,
    getTotals,
    removeFromCart
} from "../slice/cartSlice";
import Currency from "../Curency";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const currency = useSelector((state) => state.currency);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const handleCartModalToggle = () => {
        dispatch(toggleCartModal());
    };
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };
    const handleDecreaseCart = (product) => {
        dispatch(decreaseCart(product));
    };
    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
    };
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    return (
        <>
            {cart.showCartModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative md:w-1/2 my-6 ml-auto h-screen max-w-3xl">
                            {/*content*/}
                            <div className="bg-neutral-300 border-0 shadow-lg relative flex flex-col w-full h-screen outline-none focus:outline-none">

                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <div className="cart-container">
                                        <h3 className="font-bold">My Shopping Cart ({cart.cartTotalQuantity})</h3>
                                        <div className="flex justify-between">
                                            <div className="flex-none">
                                                <Currency />
                                            </div>
                                            <div className="flex-1 w-1 text-right">
                                                <button
                                                    className="background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={() => handleCartModalToggle()}
                                                >
                                                    <ArrowCircleRightIcon className="h-6 w-6" aria-hidden="true" />
                                                </button>
                                            </div>
                                        </div>
                                        {cart.cartItems.length === 0 ? (
                                            <div className="cart-empty">
                                                <p>Your cart is currently empty</p>
                                                <div className="start-shopping">
                                                    <button onClick={() => handleCartModalToggle()}>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="20"
                                                            height="20"
                                                            fill="currentColor"
                                                            className="inline bi bi-arrow-left"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                                            />
                                                        </svg>
                                                        <span> Start Shopping</span>
                                                    </button>
                                                </div>
                                            </div>
                                        ) : (
                                            <div>
                                                {cart.cartItems &&
                                                    cart.cartItems.map((cartItem) => (
                                                        <div className="flex flex-col cart-item bg-white px-4" key={cartItem.id}>
                                                            <div className="flex justify-between">
                                                                <div className="flex-none">
                                                                    <h3 className="font-bold text-xs">{cartItem.title}</h3>
                                                                </div>
                                                                <div className="flex-1 w-1 text-right">
                                                                    <button onClick={() => handleRemoveFromCart(cartItem)}>
                                                                        <TrashIcon className="h-4 w-4 text-red-500" aria-hidden="true" />
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className="flex justify-between">
                                                                <div className="flex-none w-64">
                                                                    <div className="flex justify-between">
                                                                        <div className="flex-none cart-product-quantity">
                                                                            <button onClick={() => handleDecreaseCart(cartItem)}>
                                                                                -
                                                                            </button>
                                                                            <div className="count">{cartItem.cartQuantity}</div>
                                                                            <button onClick={() => handleAddToCart(cartItem)}>+</button>
                                                                        </div>
                                                                        <div className="flex-1 w-1 text-right">
                                                                            <div><span>{currency.currentCurrency}</span> {cartItem.price * cartItem.cartQuantity}</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="flex-1 w-1 text-right">
                                                                    <img
                                                                        src={cartItem.image_url}
                                                                        alt={cartItem.title}
                                                                        width={40}
                                                                        align="right"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                <div className="cart-summary">
                                                    <button className="clear-btn" onClick={() => handleClearCart()}>
                                                        Clear Cart
                                                    </button>
                                                    <div className="cart-checkout">
                                                        <div className="subtotal">
                                                            <span>Subtotal</span>
                                                            <span className="amount">{currency.currentCurrency} {cart.cartTotalAmount}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-between p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => handleCartModalToggle()}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            className="inline bi bi-arrow-left"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                            />
                                        </svg>
                                        <span> Continue Shopping</span>
                                    </button>
                                    <button
                                        className="bg-stone-700 hover:bg-stone-500 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => handleCartModalToggle()}
                                    >
                                        Proceed to Checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}

export default Cart;