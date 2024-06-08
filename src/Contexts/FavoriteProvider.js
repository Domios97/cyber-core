
import React, { createContext, useEffect, useState } from 'react'
import FavoriteController from '../controllers/FavoriteController';


export const FavoriteContext = createContext(); 

function FavoriteProvider({children}) {
  const [displayFavorite , setDisplayFavorite] =  useState(false);
 const  [favoriteItems, setFavoriteItems] = useState(null);

 useEffect(()=>{
    const fetchFavoriteItems = async ()=>{
      try{
        var allFavoriteItems = await FavoriteController.getFavoriteProducts();
        setFavoriteItems(allFavoriteItems);
      }catch(error){
        console.log("error while fetching favorite items" + error); 
      }
    }
    // call fetch methode
    fetchFavoriteItems();
 },[]);
  return (
    <FavoriteContext.Provider value ={{displayFavorite , setDisplayFavorite , favoriteItems , setFavoriteItems}}>
        {children}
    </FavoriteContext.Provider>
  )
}

export default FavoriteProvider
