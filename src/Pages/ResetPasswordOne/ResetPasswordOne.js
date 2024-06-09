import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {FaRegWindowClose, FaEnvelope} from 'react-icons/fa'
import './../ResetPasswordOne/ResetPasswordOne.css'; // Import the CSS file

const ResetPasswordOne = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Password reset email sent to:', email);
    navigate('/ResetPasswordTwo');
  };


  const handleClose = () => {
    navigate('/');
  };
  return (
    <div className="forgot-password-container">
              <FaRegWindowClose id="form-close" onClick={handleClose} />

      <h2 >Forgot Password ?</h2>
      <FaEnvelope id="Email"/>
      <p>no worries, we'll send you reset instructions</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          
        />
        
        <p className="error" id="alert">*Enter A valid Email*</p>
        <button  type="submit">Reset password</button>
      </form>
      <a href="/login">back to log in</a>
    </div>
  );
};

export default ResetPasswordOne;
