import React from 'react';
import './DashboardOrdersDisplay.css';
import Order from '../../Components/Order/Order';

function DashboardOrdersDisplay() {
  return (
    <div>
        <div className="orders-display-container">
            <p>Orders Section</p>
            <Order />
            <Order />
            <Order />
            <Order />
        </div>
    </div>
  )
}

export default DashboardOrdersDisplay
