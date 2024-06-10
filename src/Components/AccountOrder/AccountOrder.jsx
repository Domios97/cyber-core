import React from 'react';
import './AccountOrder.css';
import ProductInOrder from '../../Components/ProductInOrder/ProductInOrder';

function AccountOrder({ order, removeOrder }) {
  return (
    <div>
      <div className="order-container">
        <div className="top-part">
          <div className="order-id-date">
            <h4>Order ID: {order.id}</h4>
            <p>Date: {order.date}</p>
          </div>
          <div className="cancel-done">
            <button id='done-order' onClick={() => removeOrder(order.id)}>Done</button>
          </div>
        </div>
        <hr />
        <div className="order-info">
          <div className="one-order-info">
            <h4>Contact</h4>
            <p>{order.contactName}</p>
            <p>Phone Number: {order.phoneNumber}</p>
            <p>Email: {order.email}</p>
          </div>
          <hr id='vertical-separator'/>
          <div className="one-order-info">
            <h4>Address</h4>
            <p>{order.address}</p>
          </div>
          <hr id='vertical-separator'/>
          <div className="one-order-info">
            <h4>Payment</h4>
            <p>{order.paymentMethod}</p>
            <p>Shipping Fees: {order.shippingFees}</p>
            <p>Total Paid: {order.totalPaid}</p>
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
  );
}

export default AccountOrder;
