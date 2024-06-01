// src/Pages/LoginSignUp/LoginPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaApple, FaEye, FaEyeSlash } from 'react-icons/fa';
import './loginpage.css';
import image from '../../images/Joyboy.png';


const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="login-form-left">
          <div className="login-logo">CyberCore</div>
          <h2>Login to your account</h2>
          <form>
            <label htmlFor="email">Email*</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
            
            <label htmlFor="password">Password*</label>
            <div className="password-input">
              <input type={showPassword ? 'text' : 'password'} id="password" name="password" placeholder="Enter your password" required />
              <button type="button" onClick={togglePasswordVisibility}>
                {showPassword ? '' : ''}
              </button>
              <button type="button" onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            
            <button type="submit" className="login-button">Login</button>
          </form>
          <p>
          <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
          </p>
          <div className="divider"><span>or</span></div>
          <div className="social-buttons">
            <div className="social-button google-button">
              <FaGoogle />
              Sign in with Google
            </div>
            <div className="social-button apple-button">
              <FaApple />
              Sign in with Apple
            </div>
          </div>
        </div>
        <div className="login-form-right">
        <img src={image} alt="Art" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
