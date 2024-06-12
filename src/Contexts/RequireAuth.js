

import React, { useEffect, useState } from 'react'
import Auth from '../controllers/Auth'
import { Navigate } from 'react-router-dom';

function RequireAuth({children}) {
  const isLogedIn = Auth.isLogedIn();
 
  if(isLogedIn === null){
    return <Navigate to ="/login" />
  }
  return children;
}

export default RequireAuth
