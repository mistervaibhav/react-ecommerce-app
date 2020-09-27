import React from 'react';

import './style.scss';

const Button = ({ children, ...otherProps }) => {
  return (
    <button {...otherProps} className='custom-button'>
      {children}
    </button>
  );
};

export default Button;
