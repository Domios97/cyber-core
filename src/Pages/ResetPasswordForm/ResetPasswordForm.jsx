import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaEnvelope, FaLock, FaFacebookSquare, FaGooglePlusSquare, FaGithubSquare, FaRegWindowClose } from 'react-icons/fa';
import './ResetPasswordForm.css';

const ResetPasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleClose = () => {
    navigate('/');
  };


  return (
    <div className="form_container resetpassword_form">
      <FaRegWindowClose id='form-close' onClick={handleClose} />
      <form action="#">
        <h2>Reset Password</h2>
        <div className="input_box">
          <input type={showPassword ? 'text' : 'password'} placeholder="Old Password" required />
          <FaLock className="icon" />
          <button type="button" onClick={togglePasswordVisibility} className="visibility_toggle">
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className="input_box">
          <input type={showPassword ? 'text' : 'password'} placeholder="New Password" required />
          <FaLock className="icon" />
          <button type="button" onClick={togglePasswordVisibility} className="visibility_toggle">
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className="input_box">
          <input type={showConfirmPassword ? 'text' : 'password'} placeholder="Confirm New Password" required />
          <FaLock className="icon" />
          <button type="button" onClick={toggleConfirmPasswordVisibility} className="visibility_toggle">
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <p>Your Password Must Contain At least 6 Characters</p>
        <button className="button">Confirm</button>
       
      </form>
    </div>
  );
};

export default ResetPasswordForm;
