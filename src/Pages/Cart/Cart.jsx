import React from 'react';
import './Cart.css';
import { Trash, router, desktop} from '../../images';
import DeleteProdButt from '../../Components/DeleteProductButton/DeleteProdButt';
import CheckoutButton from '../../Components/CheckoutButton/CheckoutButton';


function Cart() {
  
  return (
    <div>
        <div className="sub-cart-wrap" id='subCart'>
            <p>My Cart</p>
            <div className="product-in-cart" id='product-delete'>
                <img src={router} alt="" />
                <div className="product-info">
                    <p>Asus Router</p>
                    <p>53 000 DA</p>
                </div>
                <DeleteProdButt />
            </div>
            <div className="product-in-cart" id='product-delete'>
                <img src={desktop} alt="" />
                <div className="product-info">
                    <p>Central unit</p>
                    <p>53 000 DA</p>
                </div>
                <DeleteProdButt />
            </div>
            <div className="product-in-cart" id='product-delete'>
                <img src={desktop} alt="" />
                <div className="product-info">
                    <p>Central unit</p>
                    <p>53 000 DA</p>
                </div>
                <DeleteProdButt />
            </div>
            <div className="product-in-cart" id='product-delete'>
                <img src={desktop} alt="" />
                <div className="product-info">
                    <p>Central unit</p>
                    <p>53 000 DA</p>
                </div>
                <DeleteProdButt />
            </div>
            <div className="product-in-cart" id='product-delete'>
                <img src={desktop} alt="" />
                <div className="product-info">
                    <p>Central unit</p>
                    <p>53 000 DA</p>
                </div>
                <DeleteProdButt />
            </div>
            <CheckoutButton />
        </div>
    </div>
  )
}

export default Cart
