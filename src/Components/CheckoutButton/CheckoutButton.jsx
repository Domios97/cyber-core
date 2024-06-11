import React from 'react';
import './CheckoutButton.css';
import { checkout } from '../../images';
import { useNavigate } from 'react-router-dom';

function CheckoutButton({onClick}) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="proceed-checkout">
        <button type='' onClick={()=>{
          navigate("/checkout");
          onClick();
        }}>Proceed To checkout</button>
        <img src={checkout} alt="" />
      </div>
    </div>
  )
}

export default CheckoutButton
