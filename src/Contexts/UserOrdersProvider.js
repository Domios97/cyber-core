
import React, { createContext, useContext, useEffect, useState } from 'react'
import OrderController from '../controllers/OrderController';

export const UserOrdersContext = createContext();

function UserOrdersProvider({children}) {
  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const orders = await OrderController.getOrdersByUserId();
        setUserOrders(orders.data);
        
      } catch (error) {
        console.log("error: ", error);
      }
    };

    fetchData();
  }, []);
  return (
    <UserOrdersContext.Provider value = {{userOrders, setUserOrders}}>
       {children}
    </UserOrdersContext.Provider>
  )
}

export default UserOrdersProvider
