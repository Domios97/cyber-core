import React from 'react';
import AddCartButt from '../AddToCartButton/AddCartButt';
import './ProductCart.css';
import { router, headset } from '../../images';

function ProductCart() {
  const divStyle = {
    position: 'relative',
    bottom: '5%',
    left: '0%',
    height: '40px',
    fontsize: '16px',
    fontweight: '700'
  };
  return (
    <div>
      <div className="product-cart" onClick={() => {
        console.log("clicked");
      }}>
        <img src={headset} alt="" />
        <p>Router</p>
        <p id='price'>234 700 DZD</p>
        <AddCartButt style={divStyle} />
      </div>
    </div>
  )
}

export default ProductCart