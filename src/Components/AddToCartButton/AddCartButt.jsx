import React from 'react';
import './AddCartButt.css';
import { panier } from '../../images';

const AddCartButt = ({addCartHomePage, addCartStyle}) => {
  return (
    <div>
      <button type='submit' className={`add-to-cart ${addCartHomePage} ${addCartStyle}`}>Add To Cart <img src={panier} alt="" /></button>
     
    </div>
  )
}

export default AddCartButt
