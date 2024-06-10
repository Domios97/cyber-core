import React, { useState } from 'react';
import './AccountNotificationDisplay.css';
import Notification from '../../Components/Notification/Notification';

function AccountNotificationDisplay() {
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Notification Title 1', message: 'Your order has been confirmed', time: '10mn' },
    { id: 2, title: 'Notification Title 2', message: 'Your package has been shipped', time: '20mn' },
  ]);

  const removeNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  return (
    <div className="account-notification-display-container">
      {notifications.map(notification => (
        <Notification
          key={notification.id}
          id={notification.id}
          title={notification.title}
          message={notification.message}
          time={notification.time}
          removeNotification={removeNotification}
        />
      ))}
    </div>
  );
}

export default AccountNotificationDisplay;
