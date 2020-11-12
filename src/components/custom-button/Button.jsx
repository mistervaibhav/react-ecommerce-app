import React from 'react';

import './style.scss';

const Button = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className={`${inverted ? 'inverted' : ''} ${
        isGoogleSignIn ? 'google-sign-in' : ''
      } custom-button`}
    >
      {children}
    </button>
  );
};

export default Button;
