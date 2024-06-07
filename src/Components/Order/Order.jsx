import React from 'react';
import './Order.css';
import { desktop } from '../../images';
import ProductInOrder from '../ProductInOrder/ProductInOrder';

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
                    <button id='delete-order'>Cancel</button>
                    <button id='recived-order'>Confirm</button>
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
                <hr id='vertical-separator'/>
                <div className="one-order-info">
                    <h4>Contact</h4>
                    <p>Adress: </p>
                </div>
                <hr id='vertical-separator'/>
                <div className="one-order-info">
                    <h4>Payment</h4>
                    <p>Cash onDelivery</p>
                    <p>Shipping Fees: 0</p>
                    <p>Total Paid: </p>
                </div>
            </div>
            <hr />
            <div className="products-purchased-container">
                <ProductInOrder />
                <ProductInOrder />
                <ProductInOrder />
            </div>
            
        </div>
    </div>
  )
}

export default Order
