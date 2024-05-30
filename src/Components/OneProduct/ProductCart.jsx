import React from 'react';
import AddCartButt from '../AddToCartButton/AddCartButt';
import './ProductCart.css';
import { router, headset } from '../../images';

function ProductCart() {
  return (
    <div>
      <div className="product-cart">
        <img src={headset} alt="" />
        <p>Router</p>
        <p id='price'>234 700 DZD</p>
        <AddCartButt relatedProductsButt="latest-products "/>
      </div>
    </div>
  )
}

export default ProductCart
