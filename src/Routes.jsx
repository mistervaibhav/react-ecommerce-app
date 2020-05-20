import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/HomePage';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path component />
        <Route exact path component />
        <Route exact path component />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
