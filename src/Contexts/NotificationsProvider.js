import React, { createContext, useEffect, useState } from 'react'
import NotificationController from '../controllers/NotificationController';

export const NotificationsContext = createContext();
function NotificationsProvider({children}) {
  const [notifications, setNotifications] = useState([]);

  useEffect(()=>{
    const fetchData = async ()=>{
      const allNotifications = await NotificationController.getAll();
      setNotifications(allNotifications.data);     
    } 
    fetchData();
  },[]);
  return (
    <NotificationsContext.Provider value = {{notifications,setNotifications}}>
      {children}
    </NotificationsContext.Provider>
  )
}

export default NotificationsProvider
