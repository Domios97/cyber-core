import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaEnvelope, FaLock, FaFacebookSquare, FaGooglePlusSquare, FaGithubSquare, FaRegWindowClose } from 'react-icons/fa';
import './ResetPasswordForm.css';
import AuthController from '../../controllers/AuthController';
import ResetPasswordController from '../../controllers/ResetPasswordController';

const ResetPasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState(null);
  const [confPassword, setConfPassword] = useState(null); 
  const [oldPassword, setOldPassword] = useState(null);
  const [confirmClicked, setConfirmClicked]= useState(false);
  const haveEmptyInput = (object)=>{
    return Object.values(object).some(value => {
      if (typeof value === 'string' && value.trim() === '') {
        return true; 
      }
      if (Array.isArray(value) && value.length === 0) {
        return true; 
      }
      if (value === null || value === undefined) {
        return true; 
      }
      if (typeof value === 'object' && Object.keys(value).length === 0) {
        return true; 
      }
      return false;
    });
  }
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
          <input type={showPassword ? 'text' : 'password'} placeholder="Old Password" required onChange={(e)=>{
             e.preventDefault(); 
             setOldPassword(e.target.value);
          }}
          style={{border: confirmClicked && oldPassword === null && "1px red solid"}}
          />
          <FaLock className="icon" />
          <button type="button" onClick={togglePasswordVisibility} className="visibility_toggle">
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
         
        </div>
        <div className="input_box">
          <input type={showPassword ? 'text' : 'password'} placeholder="New Password" required  onChange={(e)=>{
             e.preventDefault(); 
             setNewPassword(e.target.value);
          }}
          style={{border: confirmClicked && newPassword === null && "1px red solid"}}
          />
          <FaLock className="icon" />
          <button type="button" onClick={togglePasswordVisibility} className="visibility_toggle">
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <div className="input_box">
          <input type={showConfirmPassword ? 'text' : 'password'} placeholder="Confirm New Password" required  onChange={(e)=>{
             e.preventDefault(); 
             setConfPassword(e.target.value);
          }}
          style={{border: confirmClicked && confPassword === null && confPassword !== newPassword && "1px red solid"}}
          />
          <FaLock className="icon" />
          <button type="button" onClick={toggleConfirmPasswordVisibility} className="visibility_toggle">
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <p>Your Password Must Contain At least 6 Characters</p>
        <button className="button"  onClick={async (e)=>{
            e.preventDefault(); 
            setConfirmClicked(true);
            const userInfo = {
              oldPassword : oldPassword, 
              newPassword: newPassword, 
              confPassword: confPassword,
            }
            if(!haveEmptyInput(userInfo) && confPassword === newPassword){
                const response = await  ResetPasswordController.changePassword(oldPassword, newPassword);
                response.status_code === 202 && navigate("/MyAccount");
                response.status_code === 403 && alert("check your password and try again !!");
                console.log(response);
            }
        }}>Confirm</button>
       
      </form>
    </div>
  );
};

export default ResetPasswordForm;
