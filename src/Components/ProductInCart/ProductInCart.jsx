import React from 'react';
import './ProductInCart.css';
import {router} from '../../images';
import DeleteProdButt from '../../Components/DeleteProductButton/DeleteProdButt';

function ProductInCart() {
    
  return (
    <div>
         <div className="product-in-cart" id='product-delete'>
                <img src={router} alt="" />
                <div className="product-info">
                    <p>Asus Router</p>
                    <p>53 000 DA</p>
                </div>
                <DeleteProdButt />
            </div>
    </div>
  )
}

export default ProductInCart
