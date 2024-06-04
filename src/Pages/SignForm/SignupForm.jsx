import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaEnvelope, FaLock, FaFacebookSquare, FaGooglePlusSquare, FaGithubSquare, FaRegWindowClose } from 'react-icons/fa';
import './SignupForm.css';

const SignupForm = ({ onClose }) => {
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
    if (onClose) {
      onClose();
    } else {
      navigate('/');
    }
  };

  return (
    <div className="form_container signup_form">
      <FaRegWindowClose id='form-close' onClick={handleClose} />
      <form action="#">
        <h2>Signup</h2>
        <div className="input_box">
          <input type="email" placeholder="Enter your email" required />
          <FaEnvelope className="icon" />
        </div>
        <div className="input_box">
          <input type={showPassword ? 'text' : 'password'} placeholder="Create password" required />
          <FaLock className="icon" />
          <button type="button" onClick={togglePasswordVisibility} className="visibility_toggle">
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className="input_box">
          <input type={showConfirmPassword ? 'text' : 'password'} placeholder="Confirm password" required />
          <FaLock className="icon" />
          <button type="button" onClick={toggleConfirmPasswordVisibility} className="visibility_toggle">
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <button className="button">Signup Now</button>
        <div className="login_signup">Already have an account? <Link to="/login">Login</Link></div>
        <div className="divider"><span>Or Sign Up With</span></div>
        <div className="signup-google-fb-gitub">
          <button> <FaGooglePlusSquare className='icon' id='google' /> </button>
          <button> <FaFacebookSquare className='icon' id='facebook' /> </button>
          <button> <FaGithubSquare className='icon' id='github' /> </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
