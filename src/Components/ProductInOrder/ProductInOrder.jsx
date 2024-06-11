import React from 'react';
import './ProductInOrder.css';
import {router} from '../../images';


function ProductInOrder({product}) {
  return (
    <div>
        <div className="product-in-order-container">
            <img src={product.images[0]["image_path"]} alt="" />
            <div className="product-ino-order-info">
                <p>{product.name}</p>
                <p>{product.price} DZ</p>
            </div>
        </div>
    </div>
  )
}

export default ProductInOrder
