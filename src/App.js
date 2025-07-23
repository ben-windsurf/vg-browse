import React, { useState } from 'react';
import logo from './assets/logo.png';
import facebookLogo from './assets/facebook.png';
import appleLogo from './assets/apple.png';
import googleLogo from './assets/google.png';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [stayLoggedIn, setStayLoggedIn] = useState(false);

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.log('Sign in attempted with:', { email, password, stayLoggedIn });
    }
  };

  return (
    <div className="App">
      <div className="login-container">
        <div className="logo-container">
          <img src={logo} alt="StubHub" className="logo" />
        </div>
        
        <h1 className="login-title">Sign in to StubHub</h1>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
            />
          </div>
          
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
          </div>
          
          <div className="checkbox-row">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={stayLoggedIn}
                onChange={(e) => setStayLoggedIn(e.target.checked)}
                className="checkbox"
              />
              Stay logged in
            </label>
            <button type="button" className="forgot-password" onClick={() => console.log('Forgot password clicked')}>Forgot Password</button>
          </div>
          
          <button
            type="submit"
            className={`sign-in-btn ${!isFormValid ? 'disabled' : ''}`}
            disabled={!isFormValid}
          >
            Sign in
          </button>
        </form>
        
        <button className="email-code-btn">
          Sign in with Email Code
        </button>
        
        <div className="social-login">
          <button className="facebook-btn">
            <img src={facebookLogo} alt="Facebook" className="social-icon" />
            Log in with Facebook
          </button>
          
          <button className="apple-btn">
            <img src={appleLogo} alt="Apple" className="social-icon" />
            Sign in with Apple
          </button>
          
          <button className="google-btn">
            <img src={googleLogo} alt="Google" className="social-icon" />
            Sign in with Google
          </button>
        </div>
        
        <div className="create-account">
          <span>New to StubHub? </span>
          <button type="button" className="create-account-link" onClick={() => console.log('Create account clicked')}>Create account</button>
        </div>
      </div>
    </div>
  );
}

export default App;
