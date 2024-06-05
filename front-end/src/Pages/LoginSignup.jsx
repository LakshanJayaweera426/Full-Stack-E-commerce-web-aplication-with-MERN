import React from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
          <h1>SIGN UP</h1>
          <div className="loginsignup-fields">
            <input type="text" placeholder='Your name'/>
            <input type='email' placeholder='Email Address'/>
            <input type='password' placeholder='Password'/>
          </div>
          <button>Continue</button>
          <p className='loginsignup-login'>Already have an Account? <span>Login here</span></p>
          <div className="loginsignup-agree">
            <input type='checkbox' name='' id=''/>
            <p>By continuing, I agree to the terms of use & privacy policy. </p>
          </div>
        </div>
    </div>
  )
}
