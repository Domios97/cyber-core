import React from 'react';
import './Notification.css';
import { sitelogo } from '../../images';
import { IoMdCloseCircle } from "react-icons/io";

function Notification({ id, title, message, time, removeNotification }) {
  return (
    <div>
      <div className="notification-container">
        <img src={sitelogo} alt="" />
        <div className="notification-content">
          <p id='notif-title'>{title} -<span>{time}</span></p>
          <p>{message}</p>
        </div>
        <IoMdCloseCircle id='remove-notif' onClick={() => removeNotification(id)}/>
      </div>
    </div>
  );
}

export default Notification;


