import React, { createContext, useState } from 'react'
import Auth from '../controllers/Auth';


const AuthContext = createContext(null);

function AuthenticateContext({children}) {
  const [isLogedIn, setIsLogedIn] = useState(Auth.isLogedIn()); 
  
  return (
    <AuthContext.Provider value = {isLogedIn}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthenticateContext;
