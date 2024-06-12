import React, { useContext, useEffect, useState } from 'react';
import './MyAccountPage.css';
import AccountOrder from '../../Components/AccountOrder/AccountOrder';
import { FaRegBell } from 'react-icons/fa';
import { RiShoppingBasketLine } from "react-icons/ri";
import { MdLockReset } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import { avatar } from '../../images';
import AccountOrdersDisplay from '../../Components/AccountOrdersDisplay/AccountOrdersDisplay';
import AccountNotificationDisplay from '../../Components/AccountNotificationDisplay/AccountNotificationDisplay';
import { UserOrdersContext } from '../../Contexts/UserOrdersProvider';
import Auth from '../../controllers/Auth';
import { NotificationsContext } from '../../Contexts/NotificationsProvider';
import AuthController from '../../controllers/AuthController';
import { useNavigate } from 'react-router-dom';

function MyAccountPage() {
  const [user, setUser]= useState(null);
  const [activeSection, setActiveSection] = useState('orders');
  const {notifications, setNotifications} = useContext(NotificationsContext);
  const {userOrders, setUserOrders} = useContext(UserOrdersContext);
  const navigate = useNavigate();
  useEffect(()=>{
    const fetchData = async ()=>{
     const userInfo = await Auth.me();
     setUser(userInfo.data);   
    }
    fetchData();
  }, []);
  return (
    <div>
      <div className="account-container">
        <div className="left-account-section">
          <div className="fonctionnalities" onClick={() => setActiveSection('orders')}>
            <RiShoppingBasketLine id='account-left-icons'/>
            <p>View Orders</p>
            <span>{userOrders.length < 10 ? userOrders.length : "+9"}</span>
          </div>
          <div className="fonctionnalities" onClick={() => setActiveSection('notifications')}>
            <FaRegBell id='account-left-icons'/>
            <p>Notifications</p>
            <span>{notifications.length < 10 ? notifications.length : "+9"}</span>
          </div>
          <div className="fonctionnalities">
            <MdLockReset id='account-left-icons'/>
            <a href="/reset-password">
              <p>Reset Password</p>
            </a>
          </div>
          <div className="fonctionnalities" onClick={async (e)=>{
            e.preventDefault(); 
            navigate("/login");
            const response= await AuthController.logOut();
            
          }}>
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
              <h4>Email : {user && user.email}</h4>
              <p>ID: {user && user.id}</p>
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
