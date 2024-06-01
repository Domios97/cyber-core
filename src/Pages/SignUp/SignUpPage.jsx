// src/SignUpPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaGoogle, FaApple, FaEye, FaEyeSlash } from 'react-icons/fa';
import '../SignUp/SignUpPage.css';
import image from '../../images/Joyboy.png';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    password: '',
    confirmPassword: '',
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <div className="signup-form-left">
          <div className="signup-logo">
            <h1>CyberCore</h1>
          </div>
          <h2>Create your account</h2>
          <form onSubmit={handleSubmit}>
            <label>Email*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Password*</label>
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button type="button" onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <label>Confirm password*</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            <button type="submit" className="signup-button">Create account</button>
          </form>
          <p>Already have an account? <Link to="/login">Sign in</Link></p>

          <div className="divider">
            <span>or</span>
          </div>
          <div className='button-container'>
          <button className="social-button google-button">
            <FaGoogle /> Sign up with Google
          </button>
          <button className="social-button apple-button">
            <FaApple /> Sign up with Apple
          </button>
          </div>
        </div>
        <div className="signup-form-right">
        <img src={image} alt="Art" />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
