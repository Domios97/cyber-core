import React from 'react';
import './ProductInOrder.css';
import {router} from '../../images';


function ProductInOrder(props) {
  return (
    <div>
        <div className="product-in-order-container">
            <img src={router} alt="" />
            <div className="product-ino-order-info">
                <p>Product Name</p>
                <p>240 568</p>
            </div>
        </div>
    </div>
  )
}

export default ProductInOrder
