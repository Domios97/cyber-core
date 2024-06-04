import React from 'react';
import './Cart.css';
import CheckoutButton from '../../Components/CheckoutButton/CheckoutButton';
import ProductInCart from '../../Components/ProductInCart/ProductInCart';


function Cart() {
  
  return (
    <div>
        <div className="sub-cart-wrap" id='subCart'>
            <p>My Cart</p>
            <ProductInCart />
            <CheckoutButton />
        </div>
    </div>
  )
}

export default Cart
