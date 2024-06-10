import React, { useContext } from 'react';
import './DashboardOrdersDisplay.css';
import Order from '../../Components/Order/Order';
import { OrderContext } from '../../Contexts/OrderProvider';

function DashboardOrdersDisplay() {
  const {allOrders, setAllOrders} = useContext(OrderContext);

  console.log(allOrders);
  return (
    <div>
        <div className="orders-display-container">
          <p>Orders Section</p>
          {allOrders && allOrders.map((order)=>{
            return <Order order ={order}/>
          })} 
        </div>
    </div>
  )
}

export default DashboardOrdersDisplay
