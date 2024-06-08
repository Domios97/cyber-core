import React, { createContext, useContext, useEffect, useState } from 'react';
import CartController from '../controllers/CartController';
import ProductDetails from '../Pages/ProductDetails/ProductDetail';

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
 
  const [displayCart, setDisplayCart] = useState(false);
  const [cartItems, setCartItems] = useState(null);

  useEffect(()=>{
    const featchCartItems = async()=>{
      try{
        var allCartItems = await  CartController.getAll();
        setCartItems(allCartItems);
      }catch(error){
        console.log("error whene fetching cart items "+ error);
      }
    }; 
    
    // call featch methode 
    featchCartItems();

  },[]);


  return (
    <CartContext.Provider value={{displayCart , setDisplayCart, cartItems , setCartItems}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;