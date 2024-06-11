import React, { useContext } from 'react';
import './DashboardOrdersDisplay.css';
import Order from '../../Components/Order/Order';
import { OrderContext } from '../../Contexts/OrderProvider';
import OrderInDashboard from '../OrderInDashboard/OrderInDashboard';

function DashboardOrdersDisplay() {
  const {allOrders, setAllOrders} = useContext(OrderContext);

  console.log(allOrders);
  return (
    <div>
        <div className="orders-display-container">
          <p>Orders Section</p>
          {allOrders && allOrders.map((order)=>{
            return <OrderInDashboard order ={order}/>
          })} 
        </div>
    </div>
  )
}

export default DashboardOrdersDisplay
