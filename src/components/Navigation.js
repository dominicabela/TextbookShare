import React from 'react';
import { Link } from 'react-router-dom';

import AuthUserContext from './AuthUserContext';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
  <ul className='nav'>
    <li className='logo'><Link to={routes.HOME}><img src={require('../res/images/logo.png')} alt='Home'/></Link></li>
    <li className='nav-tab'><Link to={routes.ACCOUNT}>Account</Link></li>
    <li className='nav-tab'><Link to={routes.SEARCH}>Search</Link></li>
    <li className='nav-tab'><Link to={routes.SELL}>Sell</Link></li>
    <li className='signOutButton'><SignOutButton /></li>
  </ul>

const NavigationNonAuth = () =>
  <ul className='nav'>
    <li className='logo'><Link to={routes.HOME}><img src={require('../res/images/logo.png')} alt='Home'/></Link></li>
    <li className='navButton'><Link to={routes.SIGN_IN}>Sign In</Link></li>
  </ul>

export default Navigation;
