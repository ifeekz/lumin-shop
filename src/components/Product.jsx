import React from 'react';
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'
import { addToCart, toggleCartModal } from "./slice/cartSlice";

const Product = (props) => {
    const dispatch = useDispatch();
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        dispatch(toggleCartModal());
    }
    return (
        <div>
            {/* <div style={{ backgroundImage: `url(${image})` }}></div> */}
            <Link to="#" className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-neutral-300 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img
                        src={props.product.image_url}
                        alt={props.product.title.substr(0, 50)}
                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                    />
                </div>
                <div className="text-center">
                    <h3 className="mt-4 text-sm text-gray-700">
                        {props.product.title.substr(0, 50)}
                    </h3>
                    <p className="mt-1 text-lg font-medium text-gray-900">
                        From {props.product.price}
                    </p>
                    <button
                        className="bg-stone-700 hover:bg-stone-500 text-white mt-1 py-2 px-4"
                        onClick={() => handleAddToCart(props.product)}
                    >
                        Add to Cart
                    </button>
                </div>

            </Link>
        </div>
    );
}
export default Product;