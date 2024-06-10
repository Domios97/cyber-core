import React from 'react';
import './Notification.css';
import { sitelogo } from '../../images';

function Notification({ id, title, message, time, removeNotification }) {
  return (
    <div>
      <div className="notification-container">
        <img src={sitelogo} alt="" />
        <div className="notification-content">
          <p id='notif-title'>{title} -<span>{time}</span></p>
          <p>{message}</p>
        </div>
        <button type='button' id='remove-notif' onClick={() => removeNotification(id)}>Remove</button>
      </div>
    </div>
  );
}

export default Notification;
