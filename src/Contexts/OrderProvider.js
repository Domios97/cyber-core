
import React, { createContext, useEffect, useState } from 'react'
import OrderController from '../controllers/OrderController';

export const OrderContext = createContext();
function OrderProvider({children}) {
  const [allOrders, setAllOrders] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const orders = await OrderController.getAll();
        setAllOrders(orders.data);
        
      } catch (error) {
        console.log("error: ", error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <OrderContext.Provider value = {{allOrders, setAllOrders}}>
      {children}
    </OrderContext.Provider>
  )
}

export default OrderProvider
