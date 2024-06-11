import React from 'react';
import './Notification.css';
import { sitelogo } from '../../images';
import { IoMdCloseCircle } from "react-icons/io";

function Notification({ notification,removeNotification, index}) {
  return (
    <div>
      <div className="notification-container">
        <img src={sitelogo} alt="" />
        <div className="notification-content">
          <p id='notif-title'>{notification.title}  .<span>{"11m"}</span></p>
          <p>{notification.content}</p>
        </div>
        <IoMdCloseCircle id='remove-notif' onClick={() => removeNotification(notification.id, index)}/>
      </div>
    </div>
  );
}

export default Notification;


