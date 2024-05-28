import React from 'react';
import './AddCartButt.css';

const AddCartButt = ({style}) => {
  return (
    <div>
      <button type='submit' className='add-to-cart' style={style}>Add To Cart</button>
    </div>
  )
}

export default AddCartButt
