import React from 'react';
import AddCartButt from '../AddToCartButton/AddCartButt';
import './ProductCart.css';
import { router, headset } from '../../images';
import AddWishlistButt from '../AddWishlistButton/AddWishlistButt';

function ProductCart() {

  return (
    <div>
      <div className="product-cart" onClick={() => {
        console.log("clicked");
      }}>
        <AddWishlistButt />
        <img src={headset} alt="" />
        <p>Router</p>
        <p id='price'>234 700 DZD</p>
        <AddCartButt addCartHomePage="latest-products"/>
      </div>
    </div>
  )
}

export default ProductCart
