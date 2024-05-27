import React from 'react';
import AddCartButt from './AddCartButt';
import '../CSS/ProductCart.css';
import {router, headset} from '../images';

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
      <div className="product-cart">
        <img src={headset} alt="" />
        <p>Router</p>
        <p id='price'>234 700 DZD</p>
        <AddCartButt style={divStyle}/>
      </div>
    </div>
  )
}

export default ProductCart
