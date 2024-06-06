import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaEnvelope, FaLock, FaFacebookSquare, FaGooglePlusSquare, FaGithubSquare, FaRegWindowClose } from 'react-icons/fa';
import './SignupForm.css';
import AuthController from '../../controllers/AuthController';
import InputValidator from '../../helperclasses/InputValidator';

const SignupForm = () => {

  const [email , setEmail] = useState(null); 
  const [password, setPassword] = useState(null);
  const [response, setResponse] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [confPassword, setConfPassword] = useState(null);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [resgisterClicked , setRegisterClicked] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const signUp = async  ()=>{
    if(email !== null && password !== null && confPassword !== null && InputValidator.isValidEmail(email) && confPassword === password){
      try {
        const auth = new AuthController();
        const responseBody = await auth.signUp(email, password);
        setResponse(responseBody); // Update the state with the received data
        if(responseBody.status_code === 202){
          navigate("/login");
        }
      } catch (error) {
        console.error('Error during login:', error);
      } 
    }
  }


  return (
    <div className="form_container signup_form">
      <form action="#">
        <h2>Signup</h2>
        <div className="input_box">
          <input type="email" placeholder="Enter your email" required onChange={(e)=>{setEmail(e.target.value)}}/>
          <FaEnvelope className="icon" />
        </div>
        {resgisterClicked && !InputValidator.isValidEmail(email) && email !== null && <p className='input_error_message'>the email field must be an email</p>}
        {email === null &&  resgisterClicked && <p className='input_error_message'>the email field is required</p>}
        <div className="input_box">
          <input type={showPassword ? 'text' : 'password'} placeholder="Create password" required  onChange={(e)=>{setPassword(e.target.value)}}/>
          <FaLock className="icon" />
          <button type="button" onClick={togglePasswordVisibility} className="visibility_toggle">
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        {password === null && resgisterClicked && <p className='input_error_message'>the password field is required</p>}
        <div className="input_box">
          <input type={showConfirmPassword ? 'text' : 'password'} placeholder="Confirm password" required onChange={(e)=>{setConfPassword(e.target.value)}}/>
          <FaLock className="icon" />
          <button type="button" onClick={toggleConfirmPasswordVisibility} className="visibility_toggle">
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        {resgisterClicked && response.status_code === 409 && <p className='input_error_message'>theis email is already exicte </p>}
        {confPassword === null && resgisterClicked && <p className='input_error_message'>the confirme password field is required</p>}
        {confPassword !== password && resgisterClicked && <p className='input_error_message'>check your password</p>}
        <button className="button" onClick={async(e)=>{
          e.preventDefault();
          await signUp();
          setRegisterClicked(true);
        }}>Signup Now</button>
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
