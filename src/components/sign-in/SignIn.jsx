import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import FormInput from '../form-input/FormInput';
import Button from '../custom-button/Button';

import { auth } from '../../firebase/config';
import { signInWithGoogle } from '../../firebase/auth';

import './style.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(this.state);
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      toast.error(error.message);
      // console.log(error);
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div id='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email & password</span>

        <form onSubmit={this.handleSubmit}>
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
          <div className='button-group'>
            <Button type='submit'>Sign In</Button>
            <Button isGoogleSignIn onClick={signInWithGoogle}>
              Sign In with Google
            </Button>
          </div>
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default SignIn;
