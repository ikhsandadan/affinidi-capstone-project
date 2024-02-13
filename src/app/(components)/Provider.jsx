"use client";
import React, { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserContext from '../contexts/UserContext';
import CartContext from '../contexts/CartContext';

export function Provider ({ children }) {
    const queryClient = new QueryClient();
    const [userProfile, setUserProfile] = useState(null);
    const [cartItems, setCartItems] = useState();

    const updateCart = () => {
        const savedCart = sessionStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    };

    useEffect(() => {
        setCartItems(updateCart());
    }, [])

    const addToCart = (product, event, price) => {
        event.preventDefault();

        let amount = Number(event?.target?.[0].value);
        let priceFloat = parseFloat(price?.[product.id - 1]);
        console.log(price);

        setCartItems((prevItems) => {
            let updatedItems = [];
            const itemExists = prevItems.find((item) => item.id === product.id);
            if (priceFloat !== null) {
                if (itemExists) {
                    product.price = priceFloat;
                    updatedItems = prevItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + amount } : item
                    );
                } else {
                    product.price = priceFloat;
                    updatedItems = [...prevItems, { ...product, quantity: amount }];
                }
            }

            sessionStorage.setItem('cart', JSON.stringify(updatedItems));
            return updatedItems
        });
    };

    const removeFromCart = (product) => {
        setCartItems((prevItems) => {
            let updatedItems = [];
            if (product.quantity > 1) {
            updatedItems = prevItems.map((item) =>
                item.id === product.id ? {...item, quantity: item.quantity - 1} : item
            );
            } else {
            updatedItems = prevItems.filter((item) => item.id !== product.id);
            }
            
            sessionStorage.setItem('cart', JSON.stringify(updatedItems));
            return updatedItems;
        });
    };

    const clearCart = () => {
        setCartItems([]);
        sessionStorage.clear();
    };

    return (
        <QueryClientProvider client={queryClient}>
        <UserContext.Provider value={{ profile: userProfile, setProfile: setUserProfile }}>
        <CartContext.Provider value={{cartItems, removeFromCart, addToCart, clearCart}}>
            {children}
        </CartContext.Provider>
        </UserContext.Provider>
        </QueryClientProvider>
    )
};