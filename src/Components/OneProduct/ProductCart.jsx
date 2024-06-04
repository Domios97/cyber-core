import React from 'react';
import AddCartButt from '../AddToCartButton/AddCartButt';
import './ProductCart.css';
import { router, headset } from '../../images';
import AddWishlistButt from '../AddWishlistButton/AddWishlistButt';

function ProductCart() {
  return (
    <div className="product-cart-container">
      <div className="product-cart">
        <AddWishlistButt customAddWishlist="product-detail" />
        <img src={headset} alt="Headset" />
        <p>Router</p>
        <p id='price'>234 700 DZD</p>
        <AddCartButt addCartHomePage="latest-products" />
      </div>
    </div>
  );
}

export default ProductCart;
