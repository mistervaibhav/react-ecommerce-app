import React, { Component } from 'react';

import FormInput from '../form-input/FormInput';
import Button from '../custom-botton/Button';

import { signInWithGoogle } from '../../firebase/firebase';

import './style.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      email: '',
      password: '',
    });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email & password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput handleChange={this.handleChange} value={this.state.email} label='email' />
          <FormInput
            handleChange={this.handleChange}
            value={this.state.password}
            label='password'
          />
          <div className='button-group'>
            <Button type='submit'>Sign In</Button>
            <Button onClick={signInWithGoogle}>Sign In with Google</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
