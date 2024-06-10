// src/Pages/CheckoutPage.jsx
import React, { useState } from 'react';
import '../CheckoutPage/CheckoutPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHome, faPhone, faMobilePhone } from '@fortawesome/free-solid-svg-icons';
import OrderSummary from '../../Components/OrderSummary/OrderSummary';


const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    number:'',
  });
  const totalPrice = 100.00;  // Example total price
  const discountPercentage = 10;  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="checkout-page">
      <div className="checkout-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <h3>Shipping Information</h3>
        <div className="form-row">
          <div className="input-icon">
            <FontAwesomeIcon icon={faUser} />
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="input-icon">
            <FontAwesomeIcon icon={faUser} />
            <input type="text" name="surname" placeholder="Surname" value={formData.surname} onChange={handleChange} required />
          </div>
        </div>
        <div className="input-icon">
          <FontAwesomeIcon icon={faHome} />
          <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="input-icon">
          <FontAwesomeIcon icon={faPhone} />
          <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
        </div>
        <OrderSummary totalPrice={totalPrice} discountPercentage={discountPercentage} />

        <button type="submit">Place Order</button>
      </form>
    </div>
    </div>
  );
};

export default CheckoutPage;
