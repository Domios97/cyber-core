import React, { useEffect, useState } from 'react';
import './AccountOrder.css';
import ProductInOrder from '../../Components/ProductInOrder/ProductInOrder';
import Auth from '../../controllers/Auth';
import { BiSolidCheckCircle } from 'react-icons/bi';

function AccountOrder({ order, removeOrder, index }) {
 
  const getDateFromTimestemp = (createdAt)=>{
    const date = new Date(createdAt);
    const fullTime = date.getHours()+":"+date.getMinutes()+":"+date.getDate();
    const fullYer= date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
    return fullYer+"  , "+fullTime;
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
              <button id='done-order' onClick={() => removeOrder(order.id, index)}>Done</button> 
              <BiSolidCheckCircle className= "checked-order-icon"/>
            </div>}
            {order.accepted === 0 && <button id='delete-order' onClick={() => removeOrder(order.id,index)}>Cancel</button>}
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
