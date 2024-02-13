"use client"; // This is a client componentimport React, {useState} from 'react';
import React, { useState, useContext } from 'react';
import UserContext from '../contexts/UserContext';
import CartContext from '../contexts/CartContext';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './Checkout.css';

const Checkout = () => {
  const { profile } = useContext(UserContext);
  const { clearCart } = useContext(CartContext);
  const [open, setOpen] = useState(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    p: 4,
  };

  const [userData, setUserData] = useState({
    firstName: profile?.givenName || '',
    lastName: profile?.familyName || '', 
    email: profile?.email || '',
    phone: profile?.phoneNumber || '', 
    address: profile?.streetAddress || '', 
    postalCode: profile?.postalCode || '',
    city: profile?.locality || '', 
    country: profile?.country || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    setOpen(true);
  };


  const closeModal = () => {
    setOpen(false);
    window.location.href = '/';
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="CheckoutContainer flex justify-center">
      <div className="Checkout">
        <div className="text-lg font-medium">Checkout</div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input 
            type="text" 
            name="firstName" 
            id="firstName"
            value={userData.firstName} 
            onChange={handleChange}
          />

          <label htmlFor="lastName">Last Name</label>
          <input 
            type="text" 
            name="lastName" 
            id="lastName"
            value={userData.lastName} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email"
            value={userData.email} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="phone">Phone Number</label>
          <input 
            type="text" 
            name="phone" 
            id="phone"
            value={userData.phone} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="address">Address</label>
          <input 
            type="text" 
            name="address" 
            id="address"
            value={userData.address} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="postalCode">Postal Code</label>
          <input 
            type="text" 
            name="postalCode" 
            id="postalCode"
            value={userData.postalCode} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="city">City</label>
          <input 
            type="text" 
            name="city" 
            id="city"
            value={userData.city} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="country">Country</label>
          <input 
            type="text" 
            name="country" 
            id="country"
            value={userData.country} 
            onChange={handleChange} 
            required 
          />

          <button type="submit" className="ContinueButton bg-blue-500 text-white rounded-md hover:bg-blue-700">Submit Order</button>
        </form>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        >
          <Box sx={style} className="rounded-md bg-slate-200 shadow-md">
            <div className="flex flex-col justify-items-center justify-center">
              <div className="text-lg font-medium text-center mb-3">Order submitted. Thank you for shopping with us!</div>
              <button onClick={closeModal} className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">OK</button>
            </div>
          </Box>
        </Modal>
    </div>
  );
};

export default Checkout;