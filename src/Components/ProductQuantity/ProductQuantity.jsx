import React, { useState } from 'react';
import './ProductQuantity.css';

function ProductQuantity(){
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = ({style}) => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div className="quantity-container custom">
      <button
        className="quantity-button decrement"
        onClick={handleDecrement}
      >
        -
      </button>
      <span className="quantity-display">{quantity}</span>
      <button
        className="quantity-button increment"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};

export default ProductQuantity;
