import React from 'react'
import ProductInOrder from '../ProductInOrder/ProductInOrder';

function OrderInDashboard({order}) {

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
                <button id='delete-order'>Reject</button>
                <button id='recived-order'>Confirm</button>
            </div>
        </div>
        <hr />
        <div className="order-info">
            <div className="one-order-info">
                <h4>Contact</h4>
                <p>Name: {order.customer.name}</p>
                <p>Phone Number: {order.customer.phon_number}</p>
            </div>
            <hr id='vertical-separator'/>
            <div className="one-order-info">
                <h4>Location</h4>
                <p>Adress: '{order.customer.address_city}</p>
            </div>
            <hr id='vertical-separator'/>
            <div className="one-order-info">
                <h4>Payment</h4>
                <p>Cash onDelivery : true</p>
                <p>Shipping Fees: 0</p>
                <p>Total Paid: {order.amount} DZ</p>
            </div>
        </div>
        <hr />
        <div className="products-purchased-container">
            {order && order.products.map((product)=>{
              return <ProductInOrder product = {product}/>
            })}
        </div>
        
    </div>
</div>
  )
}

export default OrderInDashboard
