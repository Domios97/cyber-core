import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './../ResetPasswordTwo/ResetPasswordTwo.css'; // Import the CSS file
import {FaRegWindowClose} from 'react-icons/fa'


const ResetPasswordTwo = () => {
  const [code, setCode] = useState(new Array(6).fill(''));
  const navigate = useNavigate();


  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setCode([...code.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  const handleClose = () => {
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Entered Code: ' + code.join(''));
  };

  return (
    <div className="check-email-container">
                      <FaRegWindowClose id="form-close" onClick={handleClose} />

      <h2>Check your Email ?</h2>
      <p>We sent reset code to <strong>Test@gmail.com</strong></p>
      <form onSubmit={handleSubmit}>
        <div className="code-inputs">
          {code.map((data, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={data}
              onChange={e => handleChange(e.target, index)}
              onFocus={e => e.target.select()}
            />
          ))}
        </div>
        <p className="error-code" id="alert">*Enter A valid Code*</p>

        <button type="submit">Open Email App</button>
      </form>
      <p>
        Didn't receive the email? <a href="/resend">click to resend</a>
      </p>
      <a href="/login">back to log in</a>
    </div>
  );
};

export default ResetPasswordTwo;
