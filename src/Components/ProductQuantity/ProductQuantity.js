import React, { useState } from 'react';
import './ProductQuantity.css';

const ProductQuantity = () => {
  var  [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity ++);
  };

  const handleDecrement = () => {
     quantity > 1 ? setQuantity(quantity--) : setQuantity(1);
  };

  return (
    <div className="quantity-container">
      <button
        className="quantity-button decrement"
        onClick={(e)=>{
          e.preventDefault(); 
          handleDecrement(); 
        }}
      >
        -
      </button>
      <span className="quantity-display">{quantity}</span>
      <button
        className="quantity-button increment"
        onClick={(e)=>{
          e.preventDefault();
          handleIncrement();
        }}
      >
        +
      </button>
    </div>
  );
};

export default ProductQuantity;
