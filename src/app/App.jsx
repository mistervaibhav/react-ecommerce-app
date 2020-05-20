import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './style.scss';

import HomePage from '../pages/homepage/HomePage';
import ShopPage from '../pages/shop/ShopPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path component />
        <Route exact path component />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
