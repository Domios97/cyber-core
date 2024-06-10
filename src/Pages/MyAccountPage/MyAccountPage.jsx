import React, { useState } from 'react';
import './MyAccountPage.css';
import AccountOrder from '../../Components/AccountOrder/AccountOrder';
import { FaRegBell } from 'react-icons/fa';
import { RiShoppingBasketLine } from "react-icons/ri";
import { MdLockReset } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import { avatar } from '../../images';
import AccountOrdersDisplay from '../../Components/AccountOrdersDisplay/AccountOrdersDisplay';
import AccountNotificationDisplay from '../../Components/AccountNotificationDisplay/AccountNotificationDisplay';

function MyAccountPage() {
  const [activeSection, setActiveSection] = useState('orders');

  return (
    <div>
      <div className="account-container">
        <div className="left-account-section">
          <div className="fonctionnalities" onClick={() => setActiveSection('orders')}>
            <RiShoppingBasketLine id='account-left-icons'/>
            <p>View Orders</p>
          </div>
          <div className="fonctionnalities" onClick={() => setActiveSection('notifications')}>
            <FaRegBell id='account-left-icons'/>
            <p>Notifications</p>
            <span>1</span>
          </div>
          <div className="fonctionnalities">
            <MdLockReset id='account-left-icons'/>
            <a href="/reset-password">
              <p>Reset Password</p>
            </a>
          </div>
          <div className="fonctionnalities">
            <TbLogout2 id='account-left-icons'/>
            <p>Log Out</p>
          </div>
        </div>
        <div className="right-account-container">
          <div className="personal-info">
            <div className="photo">
              <img src={avatar} alt="" />
            </div>
            <div className="hello-email">
              <h4>username@gmail.com</h4>
              <p>ID: 08754346</p>
            </div>
          </div>
          <hr />
          <div className="content-section">
            {activeSection === 'orders' && <AccountOrdersDisplay />}
            {activeSection === 'notifications' && <AccountNotificationDisplay />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyAccountPage;
