import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './style.scss';

// PAGES
import HomePage from '../pages/homepage/HomePage';
import ShopPage from '../pages/shop/ShopPage';
import Auth from '../pages/auth/Auth';
// COMPONENTS
import Header from '../components/header/Header';
// FIREBASE UTILS
import { auth } from '../firebase/config';
import { createUserProfileDocument } from '../firebase/auth';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      // console.log(user.displayName);

      if (user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot((snapShot) => {
          // console.log(snapShot.data());
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });

          // console.log(this.state);
        });
      }
      this.setState({
        currentUser: user,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <BrowserRouter>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/auth' component={Auth} />
          {/* <Route exact path component /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
