import React from 'react';
import './CheckoutButton.css';
import { checkout } from '../../images';

function CheckoutButton() {
  return (
    <div>
      <div className="proceed-checkout">
        <button type='' >Proceed To checkout</button>
        <img src={checkout} alt="" />
      </div>
    </div>
  )
}

export default CheckoutButton
