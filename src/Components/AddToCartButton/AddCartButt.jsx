import React from 'react';
import './AddCartButt.css';
import { panier } from '../../images';

const AddCartButt = ({addCartHomePage, addCartStyle}) => {
  return (
    <div>
      <div className="add-to-cart-button">
      <button type='submit' className={`add-to-cart ${addCartHomePage} ${addCartStyle}`}>Add To Cart <img src={panier} alt="" /></button>
      </div>
    </div>
  )
}

export default AddCartButt
