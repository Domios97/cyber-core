import React from 'react';
import './AddCartButt.css';

const AddCartButt = ({addCartStyle, relatedProductsButt}) => {
  return (
    <div>
      <button type='submit' className={`add-to-cart ${addCartStyle} ${relatedProductsButt}`}>Add To Cart</button>
    </div>
  )
}

export default AddCartButt
