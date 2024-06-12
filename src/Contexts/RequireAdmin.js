import React, { useEffect, useState } from 'react'
import Auth from '../controllers/Auth';
import { Navigate } from 'react-router-dom';

function RequireAdmin({children}) {
    const [isAdmin, setIsAdmin] = useState(null);
    useEffect(()=>{
      const fetch = async ()=>{
        const response = await Auth.me();
        setIsAdmin(response && response.data.role);
      }
      fetch();
    },[]);
    if(isAdmin === null){
      return null;
    }
    if(isAdmin !== "admin"){
        return <Navigate to ="/login" />
      }
    return children;
}

export default RequireAdmin
