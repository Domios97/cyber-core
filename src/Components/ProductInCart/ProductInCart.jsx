import React from 'react';
import './ProductInCart.css';
import {router} from '../../images';
import DeleteProdButt from '../../Components/DeleteProductButton/DeleteProdButt';
import ProductQuantity from '../ProductQuantity/ProductQuantity';

function ProductInCart() {
    
  return (
    <div>
         <div className="product-in-cart" id='product-delete'>
                <img src={router} alt="" />
                <div className="product-info">
                    <p>Asus Router</p>
                    <p>53 000 DA</p>
                    <p>Total Price: </p>
                </div>
                <ProductQuantity/>
                <DeleteProdButt />
            </div>
    </div>
  )
}

export default ProductInCart
