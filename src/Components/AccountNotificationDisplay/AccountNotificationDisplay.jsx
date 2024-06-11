import React, { useContext, useState } from 'react';
import './AccountNotificationDisplay.css';
import { FaRegBell } from "react-icons/fa";
import Notification from '../../Components/Notification/Notification';
import { NotificationsContext } from '../../Contexts/NotificationsProvider';
import NotificationController from '../../controllers/NotificationController';

function AccountNotificationDisplay() {
   
  const {notifications, setNotifications} = useContext(NotificationsContext);

  const removeNotification = async (id, index) => {

    const newNotifications = [...notifications.slice(0, index), ...notifications.slice(index + 1)];
    setNotifications(newNotifications);
    const deleteResponse = await NotificationController.deleteNotification(id);
    console.log(deleteResponse);
  };

  return (
    <div className="account-notification-display-container">
      <div className="my-notifications">
          <FaRegBell id='notif-icon'/>
          <p>Your Notifications</p>
      </div>
      { notifications.length === 0 ? (
        <p className='no-notif-message'>You have no notifications yet.</p>
      ) : (
        notifications.map((notification, index) => (
          <Notification
            key={notification.id}
            notification = {notification}
            removeNotification={removeNotification}
            index = {index}
          />
        ))
      )}
    </div>
  );
}

export default AccountNotificationDisplay;




