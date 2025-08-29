import React, { useState } from 'react';
import validator from 'validator';
import './App.css'

function App() {
  const [validationMessage, setValidationMessage] = useState('');
  const [className, setClassName] = useState('');

  const validate = (value) => {
    if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1,
    })) {
        setValidationMessage('Strong Password!');
        setClassName('strong')
    } else {
      setValidationMessage('Weak password!');
      setClassName('weak');
    }
  }

  return (
    <>
    <h1>Welcome</h1>
      <div className='sign-in-box'>
      <pre>
        <h2>Sign In</h2>
        <label>Username</label>
        <input type='text'/><br/>
        <label>Password</label>
        <input type='password' onChange={(e) => validate(e.target.value)}/><br/>
        {
          validationMessage === "" ? <span></span> :
          <span className={className}>{validationMessage}</span>
        }
      </pre>
    </div>
    </>
  )
}

export default App
