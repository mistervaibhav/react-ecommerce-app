import React from 'react';

import Button from '../custom-button/Button';

import './style.scss';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'></div>
      <Button inverted>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
