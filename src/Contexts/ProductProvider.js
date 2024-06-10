import React, { createContext, useEffect, useState } from 'react'
import ProductController from '../controllers/ProductController';


export const ProductContext = createContext();
function ProductProvider({children}) {
  const [allProducts, setAllProducts] = useState(); 

 useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await  ProductController.getAll();
        setAllProducts(products ?  products.data : []);
      } catch (error) {
        console.log("error: ", error);
      }
    };

    fetchData();
  }, []);
  return (
    <ProductContext.Provider value = {{allProducts, setAllProducts}}>
       {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider
