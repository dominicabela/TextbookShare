import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from './Navigation';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home';
import AccountPage from './Account';
import SellPage from './Sell';
import SearchPage from './Search';
import CameraScan from './ScanBarcode';
import About from './About';

import * as routes from '../constants/routes';

import withAuthentication from './withAuthentication';

const App = () =>
  <Router>
    <div>
      <Navigation />

      <hr/>

      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
      <Route exact path={routes.SELL} component={() => <SellPage />} />
      <Route exact path={routes.SEARCH} component={() => <SearchPage />} />
      <Route exact path={routes.SCAN} component={() => <CameraScan />} />
      <Route exact path={routes.ABOUT} component={() => <About />} />


    </div>
  </Router>

export default withAuthentication(App);
