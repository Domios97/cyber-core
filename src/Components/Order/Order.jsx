import React from 'react';
import './Order.css';
import { desktop } from '../../images';

function Order() {
  return (
    <div>
        <div className="order-container">
            <div className="top-part">
                <div className="order-id-date">
                    <h4>Order ID: 6524301</h4>
                    <p>Date: 15/02/2022</p>
                </div>
                <div className="cancel-done">
                    <button id='delete-order'>Delete</button>
                    <button id='recived-order'>Recived</button>
                </div>
            </div>
            <hr />
            <div className="order-info">
                <div className="one-order-info">
                    <h4>Contact</h4>
                    <p>Name</p>
                    <p>Phone Number: </p>
                    <p>Email: </p>
                </div>
                <hr />
                <div className="one-order-info">
                    <h4>Contact</h4>
                    <p>Adress: </p>
                </div>
                <hr />
                <div className="one-order-info">
                    <h4>Payment</h4>
                    <p>Cash onDelivery</p>
                    <p>Shipping Fees: 0</p>
                    <p>Total Paid: </p>
                </div>
            </div>
            <hr />
            <div className="product-purchased">
                <div className="one-purchased-product">
                    <img src={desktop} alt="" />
                    <div className="purchased-product-info">
                        <p>Product Name</p>
                        <p>Price: 24 078</p>
                    </div>
                </div>
                <div className="one-purchased-product">
                    <img src={desktop} alt="" />
                    <div className="purchased-product-info">
                        <p>Product Name</p>
                        <p>Price: 24 078</p>
                    </div>
                </div>
                <div className="one-purchased-product">
                    <img src={desktop} alt="" />
                    <div className="purchased-product-info">
                        <p>Product Name</p>
                        <p>Price: 24 078</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Order
