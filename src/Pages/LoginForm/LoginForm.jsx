import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaEnvelope, FaLock, FaGooglePlusSquare, FaFacebookSquare, FaGithubSquare, FaRegWindowClose } from 'react-icons/fa';
import AuthController from '../../controllers/AuthController';
import './LoginForm.css';
import StorageManager from '../../helperclasses/StorageManager';
import InputValidator from '../../helperclasses/InputValidator';


const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [email , setEmail] = useState(null); 
  const [password, setPassword] = useState(null);
  const [response, setResponse] = useState(0);
  const [logedInClicked , setLogedInClicked] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  
 

  const login = async () => {
    if(email !== null && password !== null && InputValidator.isValidEmail(email)){
      try {
        const auth = new AuthController();
        const responseBody = await auth.login(email, password);
        setResponse(responseBody); // Update the state with the received data
        if(response.status_code === 202){
         
          StorageManager.storeToken(response.access_token);
          navigate("/");
        }
      } catch (error) {
        console.error('Error during login:', error);
      } 
    }
  };


  
  return (
    <div className="form_container login_form">
      <form action="#">
        <h2>Login</h2>
        <div className="input_box">
          <input type="email" placeholder="Enter your email" required onChange={(e)=>{setEmail(e.target.value)}}/>
          <FaEnvelope className="icon" />
        </div>
        {!InputValidator.isValidEmail(email) && logedInClicked && email !== null && <p className='input_error_message'>the email field must be an email</p> }
        {email === null && logedInClicked && <p className='input_error_message'>the email field is required</p>}
        <div className="input_box">
          <input type={showPassword ? 'text' : 'password'} placeholder="Enter password" required onChange = {(e)=>{setPassword(e.target.value)}}/>
          <FaLock className="icon" />
          <button type="button" onClick={togglePasswordVisibility} className="visibility_toggle">
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        {password === null && logedInClicked && <p className='input_error_message'>the password field is reqired</p>}
        {logedInClicked === true && InputValidator.isValidEmail(email) && response.status_code === 401 && <p className='input_error_message'>user name or password is encorrect</p>}
        <div className="option_field">
          <span className="checkbox">
            <input type="checkbox" id="check" />
            <label htmlFor="check">Remember me</label>
          </span>
          <a href="/reset-password" className="forgot_pw">Forgot password?</a>
        </div>
        <button className="button" onClick={async (e)=>{
          e.preventDefault();
          await login();
          setLogedInClicked(true);
        }}>Login Now</button>
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
