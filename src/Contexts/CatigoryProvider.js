import React, { createContext, useEffect, useState } from 'react'
import CatigoryController from '../controllers/CatigoryController';

export const CatigoryContext  = createContext();

function CatigoryProvider({children}) {
    const [catigorys, setCatigorys] = useState(null); 

    useEffect(() => {
        const fetchData = async () => {
          try {
            var allCatigorys = await CatigoryController.getAll();
            setCatigorys(allCatigorys ? allCatigorys.data : []);

          } catch (error) {
            console.log("error: ", error);
          }
        };
        fetchData();
      }, []);

  return (
    <CatigoryContext.Provider value = {{catigorys,setCatigorys}}>
       {children}
    </CatigoryContext.Provider>
  )
}

export default CatigoryProvider
