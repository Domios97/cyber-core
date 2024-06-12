import React from 'react';
import './Notification.css';
import { sitelogo } from '../../images';
import { IoMdCloseCircle } from "react-icons/io";

function Notification({ notification,removeNotification, index}) {
  const getFullTime = (createdAT)=>{
    const date = new Date(createdAT);
    const fullTime = date.getHours()+":"+date.getMinutes()+":"+date.getDate();
    const fullYer= date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
    return fullYer+"  , "+fullTime;
  }
  return (
    <div>
      <div className="notification-container">
        <img src={sitelogo} alt="" />
        <div className="notification-content">
          <p id='notif-title'>{notification.title}  .<span>{getFullTime(notification.created_at)}</span></p>
          <p>{notification.content}</p>
        </div>
        <IoMdCloseCircle id='remove-notif' onClick={() => removeNotification(notification.id, index)}/>
      </div>
    </div>
  );
}

export default Notification;


