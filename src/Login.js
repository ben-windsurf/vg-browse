import React from 'react';
import { Login } from 'component-library';
import logo from './assets/logos/logo.png';
import facebookLogo from './assets/logos/facebook.png';

function LoginPage() {
  const handleSubmit = ({ email, password, stayLoggedIn }) => {
    console.log('Sign in attempted with:', { email, password, stayLoggedIn });
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
  };

  const handleCreateAccount = () => {
    console.log('Create account clicked');
  };

  const socialLogins = [
    {
      type: 'facebook',
      icon: facebookLogo,
      onLogin: () => console.log('Facebook login clicked')
    }
  ];

  return (
    <Login
      logo={logo}
      brandName="viagogo"
      themeColor="#70b42c"
      onSubmit={handleSubmit}
      onForgotPassword={handleForgotPassword}
      socialLogins={socialLogins}
      showEmailCode={true}
      showCreateAccount={true}
      onCreateAccount={handleCreateAccount}
    />
  );
}

export default LoginPage;
