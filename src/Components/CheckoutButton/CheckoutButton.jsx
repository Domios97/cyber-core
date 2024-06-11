import React from 'react';
import './CheckoutButton.css';
import { checkout } from '../../images';

function CheckoutButton() {
  return (
    <div>
      <div className="proceed-checkout">
        <a href="/checkout"><button type=''>Proceed To checkout</button></a>
        <img src={checkout} alt="" />
      </div>
    </div>
  )
}

export default CheckoutButton
