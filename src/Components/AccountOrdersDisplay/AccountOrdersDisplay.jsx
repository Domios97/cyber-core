import React, { useContext, useState } from 'react';
import './AccountOrdersDisplay.css';
import { FaBasketShopping } from "react-icons/fa6";
import AccountOrder from '../../Components/AccountOrder/AccountOrder';
import { UserOrdersContext } from '../../Contexts/UserOrdersProvider';
import OrderController from '../../controllers/OrderController';

function AccountOrdersDisplay() {
  const {userOrders, setUserOrders} = useContext(UserOrdersContext);
  const removeOrder = async (id, index) => {
    const cancelResponse = await OrderController.cancelOrder(id);
    const newUserOrders = [...userOrders.slice(0, index), ...userOrders.slice(index + 1)];
    setUserOrders(newUserOrders);
  };

  return (
    <div className="account-orders-display-container">
       <div className="my-orders">
          <FaBasketShopping id='my-orders-icon'/>
          <p>Your Orders</p>
      </div>
      {userOrders.length === 0 ? (
        <p id='you-haveno-orders'>You have no orders yet.</p>
      ) : (
        userOrders && userOrders.map((order, index) => (
          <AccountOrder
            key={order.id}
            order={order}
            removeOrder={removeOrder}
            index = {index}
          />
        ))
      )}
    </div>
  );
}

export default AccountOrdersDisplay;
