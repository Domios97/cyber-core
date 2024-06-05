import React from 'react';
import './MyAccountPage.css';
import Order from '../../Components/Order/Order';
import { avatar, myorders, opentoside,exit, changepass } from '../../images';

function MyAccountPage() {
  return (
    <div>
        <div className="account-container">
            <div className="left-account-section">
                <div className="fonctionnalities">
                    <img src={changepass} alt="" />
                    <a href="/reset-password">
                        <p>Reset Password</p>
                    </a>
                </div>
                <div className="fonctionnalities">
                    <img src={exit} alt="" />
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
                <div className="my-orders">
                    <img src={myorders} alt="" />
                    <p>Your Orders</p>
                </div>
                <div className="orders-section">
                    <Order />
                    <Order />
                    <Order />
                </div>
            </div>

        </div>
    </div>
  )
}

export default MyAccountPage
