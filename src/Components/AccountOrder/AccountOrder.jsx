import React, { useEffect, useState } from 'react';
import './AccountOrder.css';
import ProductInOrder from '../../Components/ProductInOrder/ProductInOrder';
import Auth from '../../controllers/Auth';
import { BiSolidCheckCircle } from 'react-icons/bi';

function AccountOrder({ order, removeOrder }) {
 
  const getDateFromTimestemp = (createdAt)=>{
    var year = parseInt(createdAt.substring(0, 4));
    var month = parseInt(createdAt.substring(5, 7)) - 1; 
    var day = parseInt(createdAt.substring(8, 10));
    
    
    return `${year}/${month}/${day}`;
  }
 
  return (
    <div>
      <div className="order-container">
        <div className="top-part">
          <div className="order-id-date">
            <h4>Order ID: {order.id}</h4>
            <p>Date: {getDateFromTimestemp(order.created_at)}</p>
          </div>
          <div className="cancel-done">
            {order.accepted === 1 && <div className='cancel-done'>
              <button id='done-order' onClick={() => removeOrder(order.id)}>Done</button> 
              <BiSolidCheckCircle className= "checked-order-icon"/>
            </div>}
            {order.accepted === 0 && <button id='delete-order' onClick={() => removeOrder(order.id)}>Cancel</button>}
          </div>
        </div>
        <hr />
        <div className="order-info">
          <div className="one-order-info">
            <h4>Contact</h4>
            <p>{order.customer.name}</p>
            <p>Phone Number: {order.customer.phon_number}</p>
          </div>
          <hr id='vertical-separator'/>
          <div className="one-order-info">
            <h4>Address</h4>
            <p>Addeess city: {order.customer.address_city}</p>
          </div>
          <hr id='vertical-separator'/>
          <div className="one-order-info">
            <h4>Payment</h4>
            <p>Methode: On delivery</p>
            <p>Shipping Fees: 0%</p>
            <p>Total Paid: {order.amount} DZ</p>
          </div>
        </div>
        <hr />
        <div className="products-purchased-container">
          {order.products.map((product)=>{
            return <ProductInOrder key = {product.id} product = {product}/>
          })}
        </div>
      </div>
    </div>
  );
}

export default AccountOrder;
