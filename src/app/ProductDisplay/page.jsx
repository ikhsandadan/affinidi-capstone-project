"use client"; // This is a client componentimport React, {useState} from 'react';
import React, { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import UserContext from '../contexts/UserContext';
import CartContext from '../contexts/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { getCode } from 'country-list';
import countryToCurrency from "country-to-currency";
import getSymbolFromCurrency from 'currency-symbol-map';
import './ProductDisplay.css';

const ProductDisplay = () => {
  const Router = useRouter();
  const { profile } = useContext(UserContext);
  const { addToCart } = useContext(CartContext);
  const [rates, setRates] = useState();
  const [open, setOpen] = useState(false);

  let arrayPrice = [];

  let userCountry = profile?.country || '';
  let countryCode = getCode(userCountry);
  let countryCurrency = countryToCurrency[countryCode];
  let currencySymbol = getSymbolFromCurrency(countryCurrency) || '$';

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    p: 4,
  };

  const getRates = async () => {
    try {
      // fetch the data from API
      const response = await fetch(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/${countryCurrency.toLowerCase()}.json`
        ).then(resp => resp.json());

        setRates(response[countryCurrency.toLowerCase()]);
    } catch(e) {
      console.log("Loading");
    }
  };

  const products = [
    { id: 1, name: 'Hoodie', price: 10, imageUrl: 'hoodie.png' },
    { id: 2, name: 'T-Shirt', price: 15, imageUrl: 'tee.png' },
  ];

  const checkItems = (product, event) => {
    if (profile === null || profile === undefined) {
      alert("You must login first!");
    } else {
      addToCart(product, event, arrayPrice);
      setOpen(true);
    }
  };

  const newPrice = () => {
    try {
      if (rates !== undefined) {
        return rates;
      } else {
        let basicRates = 1;
        
        return basicRates;
      }
    } catch (e) {
      let basicRates = 1;
      
      console.log('loading');
      return basicRates;
    }
  };

  const noDiscountedPrice = (price) => {
    let currentPrice = (Math.round(price * newPrice()));

    arrayPrice.push(currentPrice);
    return currentPrice;
  };

  const updatedPrice = (price) => {
    let currentPrice = (Math.round(price * newPrice()));

    arrayPrice.push(currentPrice);
    return currentPrice;
  };

  const handleClose = () => {
    setOpen(false);
  };

  const goToCart = () => {
    handleClose();
    Router.push("/Cart");
  };

  useEffect(() => {
    getRates();
  }, [countryCurrency]);

  return (
    <div className="ProductDisplay">
      {products.map((product) => (
        <div key={product.id} className="ProductItem grid grid-cols-2 rounded-xl backdrop-blur-sm bg-white/40 p-2 hover:drop-shadow-xl hover:bg-slate-100">
          <img src={product.imageUrl} alt={product.name} />
          <div>
            <div className="font-bold text-lg pb-3">{product.name}</div>
            {countryCode === "ID" || countryCode === "SG" || countryCode === "MY" ? (
              <div className="grid grid-rows-2">
                <div className="text-center self-center text-green-500">Congratulations you&apos;ve got 15% discount</div>
                <div className="flex auto-rows-auto gap-x-4 justify-center">
                  <div className="py-5 line-through text-red-600 decoration-2">{currencySymbol} {Intl.NumberFormat().format(updatedPrice(product.price))}</div>
                  <div className="flex items-center justify-center">
                    <FontAwesomeIcon icon={faArrowRight} className="self-center basis-1/4" />
                  </div>
                  <div className="py-5">{currencySymbol} {Intl.NumberFormat().format(Math.round((updatedPrice(product.price) * 0.85)))}</div>
                </div>
              </div>
              
            ) : (
              <div className="py-5">{currencySymbol} {Intl.NumberFormat().format(Math.round(noDiscountedPrice(product.price)))}</div>
            )}
            <form className="pt-5" onSubmit={(event) => checkItems(product, event)}>
              <input className="max-w-20 mx-2" type="number" min="1" placeholder="Quantity" required />
              <button className="mx-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">Add to Cart</button>
            </form>
          </div>
        </div>
      ))}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        >
          <Box sx={style} className="rounded-md bg-slate-200 shadow-md">
            <div className="flex flex-col justify-items-center justify-center">
              <div className="text-lg font-medium text-center mb-3">Item successfully added to cart!</div>
              <div className="flex auto-rows-auto gap-x-3 justify-center">
                <button onClick={goToCart} className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">Go to Cart</button>
                <button onClick={handleClose}className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">Continue Shopping</button>
              </div>
            </div>
          </Box>
        </Modal>
    </div>
  );
};

export default ProductDisplay;