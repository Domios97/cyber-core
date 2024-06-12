import React, { useContext, useState } from 'react'
import ProductInOrder from '../ProductInOrder/ProductInOrder';
import { BiSolidCheckCircle } from 'react-icons/bi';
import OrderController from '../../controllers/OrderController';
import { OrderContext } from '../../Contexts/OrderProvider';

function OrderInDashboard({order, index}) {
    const {allOrders, setAllOrders} = useContext(OrderContext);
    const [orderAccepted, setOrderAccepted] = useState(order.accepted);
    const [orderDisplay, setOrderDisplay] = useState(true);

    const getDateFromTimestemp = (createdAt)=>{
      const date = new Date(createdAt);
      const fullTime = date.getHours()+":"+date.getMinutes()+":"+date.getDate();
      const fullYer= date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
      return fullYer+"  , "+fullTime;
    }
  return (
    <div>
    <div className="order-container" style = {{display : !orderDisplay && "none" }}>
        <div className="top-part">
            <div className="order-id-date">
                <h4>Order ID: {order.id}</h4>
                <p>Date: {getDateFromTimestemp(order.created_at)}</p>
            </div>
            <div className="cancel-done">
                <button id='delete-order' onClick={async(e)=>{
                  e.preventDefault(); 
                  var response = await OrderController.reject(order.user_id, order.id);
                  if( response.status_code === 202 ){
                    setOrderDisplay(false)
                    const newOrders = [...allOrders.slice(0, index), ...allOrders.slice(index + 1)];
                    setAllOrders(newOrders);
                  }
                }}>Reject</button>
                {orderAccepted === 0 ? 
                <button id='recived-order' onClick={async(e)=>{
                    e.preventDefault(); 
                    var response = await OrderController.accept(order.user_id, order.id);
                    if( response.status_code === 202 ){
                      setOrderAccepted(true);
                      console.log(response);
                    }
                  }}>Confirm</button>: 
                <BiSolidCheckCircle className= "checked-order-icon"/> }
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
