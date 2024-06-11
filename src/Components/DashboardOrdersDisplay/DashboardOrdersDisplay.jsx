import React, { useContext } from 'react';
import './DashboardOrdersDisplay.css';
import Order from '../../Components/Order/Order';
import { OrderContext } from '../../Contexts/OrderProvider';
import OrderInDashboard from '../OrderInDashboard/OrderInDashboard';

function DashboardOrdersDisplay() {
  const {allOrders, setAllOrders} = useContext(OrderContext);
  return (
    <div>
        <div className="orders-display-container">
          <p>Orders Section</p>
          {allOrders && allOrders.map((order, index)=>{
            return <OrderInDashboard  order ={order} index= {index}/>
          })} 
        </div>
    </div>
  )
}

export default DashboardOrdersDisplay
