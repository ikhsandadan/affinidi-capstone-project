"use client"; // This is a client componentimport React, {useState} from 'react';
import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleXmark} from '@fortawesome/free-regular-svg-icons';
import { getCode } from 'country-list';
import countryToCurrency from "country-to-currency";
import getSymbolFromCurrency from 'currency-symbol-map';
import UserContext from '../contexts/UserContext';
import CartContext from '../contexts/CartContext';

const Cart = () => {
  const Router = useRouter();
  const { profile } = useContext(UserContext);
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  let userCountry = profile?.country || '';
  let countryCode = getCode(userCountry);
  let countryCurrency = countryToCurrency[countryCode];
  let currencySymbol = getSymbolFromCurrency(countryCurrency);

  const getTotalPrice = () => {
    return Intl.NumberFormat().format(cartItems?.reduce((total, item) => total + item.quantity * item.price, 0));
  };

  const goToCheckout = () => {
    Router.push('/Checkout');
  };

  return (
    <div className="pt-8 flex justify-center justify-items-center">
      {cartItems?.length === 0 ? (
        <div className="text-center text-2xl font-semibold pt-10">Your cart is empty.</div>
      ) : (
        <div>
          <table className="table-auto text-center border-separate">
            <thead>
              <tr>
                <th></th>
                <th className="border border-slate-600 px-24 py-8">Product</th>
                <th className="border border-slate-600 px-16">Name</th>
                <th className="border border-slate-600 px-16">Quantity</th>
                <th className="border border-slate-600 px-16">Price</th>
              </tr>
            </thead>
            <tbody>
                {cartItems?.map((item) => (
                  <tr key={item.id}>
                    <td className="justify-center justify-items-center">
                      <FontAwesomeIcon className="size-8 text-rose-600 px-8 cursor-pointer hover:scale-125" icon={faCircleXmark} onClick={() => removeFromCart(item)}/>
                    </td>
                    <td className="flex justify-center justify-items-center border border-slate-600 py-10"><img className="size-24" src={item.imageUrl} alt={item.name} /></td>
                    <td className="border border-slate-600">{item.name}</td>
                    <td className="border border-slate-600">{item.quantity}</td>
                    <td className="border border-slate-600">{currencySymbol} {Intl.NumberFormat().format(item.price)}</td>
                  </tr>
                ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4" className="py-8 font-bold">Total</td>
                <td className="border border-slate-600 font-bold">{currencySymbol} {getTotalPrice()}</td>
              </tr>
            </tfoot>
          </table>
          <div className="flex justify-center justify-items-center">
            <button onClick={goToCheckout} disabled={cartItems?.length === 0} className="bg-blue-500 text-white rounded-md hover:bg-blue-700">
              <div className="p-3">Go to Checkout</div>
            </button>
          </div>
        </div>
        )}
    </div>
  );
};

export default Cart;