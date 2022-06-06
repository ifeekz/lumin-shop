import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@apollo/client";
import { GET_CURRENCIES } from '../graphql/queries/currency';
import { changeCurency } from './slice/currencySlice';

const Currency = () => {
    const dispatch = useDispatch();
    const currency = useSelector((state) => state.currency);
    const { loading, error, data } = useQuery(GET_CURRENCIES);

    const handleCurrencyChange = (currency) => {
        dispatch(changeCurency(currency));
    }

    if (error)
        return (
            <select className="block w-24 border-0 bg-neutral-300">
                <option value="">ERROR</option>
            </select>
        );

    return (
        <>
            {loading
                ? null
                : <select
                    value={currency.currentCurrency}
                    className="block w-24 border-0 bg-neutral-300"
                    onChange={(e) => handleCurrencyChange(e.target.value)}
                >
                    {data.currency.map((c) => (
                        <option product={c} key={c}>{c}</option>
                    ))}
                </select>}
        </>
    );
}
export default Currency;