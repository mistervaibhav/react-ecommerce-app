import React from 'react';

import './style.scss';

import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';

const Auth = () => {
  return (
    <div id='auth'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Auth;
