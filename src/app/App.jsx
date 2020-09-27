import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

// * PAGES
import HomePage from '../pages/homepage/HomePage';
import ShopPage from '../pages/shop/ShopPage';
import Auth from '../pages/auth/Auth';

// * COMPONENTS
import Header from '../components/header/Header';

// * STYLESHEETS
import './style.scss';

// * FIREBASE UTILS
import { auth } from '../firebase/config';
import { createUserProfileDocument } from '../firebase/auth';

// * REDUX
import { setCurrentUser } from '../redux/user/user.action';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      // console.log(user.displayName);

      if (user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot((snapShot) => {
          // console.log(snapShot.data());
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });

          // console.log(this.state);
        });
      }
      setCurrentUser({
        currentUser: user,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/auth' component={Auth} />
          {/* <Route exact path component /> */}
        </Switch>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
