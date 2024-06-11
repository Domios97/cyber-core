import React, { useContext, useState } from 'react';
import './Cart.css';
import CheckoutButton from '../../Components/CheckoutButton/CheckoutButton';
import ProductInCart from '../../Components/ProductInCart/ProductInCart';
import {CartContext } from '../../Contexts/CartProvider';

function Cart() {
  const [displayToggle , setDisplayToggle] = useState(true);
  const {displayCart, setDisplayCart, cartItems, setCartItems} = useContext(CartContext); // Access the context value
  return (
    <div>
      <div className="sub-cart-wrap" id='subCart' style = {{display : displayCart  === false ? "none" : "block"}}>
        <p>My Cart</p>
        {cartItems && cartItems.data.map((item, index)=>{
          return <ProductInCart key={item.product.id} index ={index} itemInfo = {item} />
        })}
        <CheckoutButton onClick = {()=>{setDisplayCart(false)}}/>
      </div>
    </div>
  );
}

export default Cart;