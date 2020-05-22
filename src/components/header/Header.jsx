import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase';

import { ReactComponent as Logo } from './logo.svg';

import './style.scss';

const Header = ({ currentUser }) => {
  return (
    <header className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/auth'>
            SIGN IN
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
