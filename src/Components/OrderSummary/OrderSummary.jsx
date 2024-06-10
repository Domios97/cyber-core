// src/Components/OrderSummary.jsx
import React from 'react';
import '../OrderSummary/OrderSummary.css';

const OrderSummary = ({ totalPrice, discountPercentage }) => {
  const discountAmount = (totalPrice * discountPercentage) / 100;
  const finalPrice = totalPrice - discountAmount;

  return (
    <div className="order-summary">
      <h3>Order Summary</h3>
      <div className="order-details">
        <div className="detail-item">
          <span>Total Price:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="detail-item">
          <span>Discount ({discountPercentage}%):</span>
          <span>-${discountAmount.toFixed(2)}</span>
        </div>
        <div className="detail-item total">
          <span>Final Price:</span>
          <span>${finalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
