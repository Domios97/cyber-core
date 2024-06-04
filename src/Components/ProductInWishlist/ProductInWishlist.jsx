import React from 'react';
import './ProductInWishlist.css';
import {router} from '../../images';
import AddCartButt from '../AddToCartButton/AddCartButt';
import DeleteProdButt from '../../Components/DeleteProductButton/DeleteProdButt';


function ProductInWishlist() {
  return (
    <div>
        <div className="product-in-wishlist" id='product-delete'>
                <img src={router} alt="" />
                <div className="product-info-wishlist">
                    <p>Asus Router</p>
                    <p>53 000 DA</p>
                </div>
                <AddCartButt addCartStyle="product-wishlist"/>
                <DeleteProdButt />
            </div>
    </div>
  )
};


export default ProductInWishlist
