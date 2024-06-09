import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaEnvelope, FaLock, FaGooglePlusSquare, FaFacebookSquare, FaGithubSquare, FaRegWindowClose } from 'react-icons/fa';
import './LoginForm.css';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="form_container login_form">
      <FaRegWindowClose id="form-close" onClick={handleClose} />
      <form action="#">
        <h2>Login</h2>
        <div className="input_box">
          <input type="email" placeholder="Enter your email" required />
          <FaEnvelope className="icon" />
        </div>
        <div className="input_box">
          <input type={showPassword ? 'text' : 'password'} placeholder="Enter password" required />
          <FaLock className="icon" />
          <button type="button" onClick={togglePasswordVisibility} className="visibility_toggle">
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className="option_field">
          <span className="checkbox">
            <input type="checkbox" id="check" />
            <label htmlFor="check">Remember me</label>
          </span>
          <a href="/ResetPassword" className="forgot_pw">Forgot password?</a>
        </div>
        <button className="button">Login Now</button>
        <div className="login_signup">Don't have an account? <Link to="/signup">Signup</Link></div>
        <div className="divider"><span>Or Log in With</span></div>
        <div className="signup-google-fb-gitub">
          <button> <FaGooglePlusSquare className="icon" id="google" /> </button>
          <button> <FaFacebookSquare className="icon" id="facebook" /> </button>
          <button> <FaGithubSquare className="icon" id="github" /> </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
