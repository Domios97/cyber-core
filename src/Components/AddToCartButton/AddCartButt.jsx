
import React from 'react';
import './AddCartButt.css';
import { panier } from '../../images';
import { useCart } from '../../Contexts/CartContext';

const AddCartButt = ({ addCartHomePage, addCartStyle, product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div>
      <button
        type="button"
        className={`add-to-cart ${addCartHomePage} ${addCartStyle}`}
        
      >
        Add To Cart <img src={panier} alt="" />
      </button>
    </div>
  );
};

export default AddCartButt;
