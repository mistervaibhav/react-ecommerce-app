import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import FormInput from '../form-input/FormInput';
import Button from '../custom-button/Button';

import { auth } from '../../firebase/config';
import { createUserProfileDocument } from '../../firebase/auth';

import './style.scss';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      toast.warn('Passwords dont match !!');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      toast.error(error.message);
      // console.error(error);
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div id='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign Up with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            handleChange={this.handleChange}
            value={displayName}
            label='Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            handleChange={this.handleChange}
            value={email}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            handleChange={this.handleChange}
            value={password}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            handleChange={this.handleChange}
            value={confirmPassword}
            label='Confirm Password'
            required
          />
          <div className='button-group'>
            <Button type='submit'>Sign Up</Button>
          </div>
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default SignUp;
