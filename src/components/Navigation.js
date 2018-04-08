import React from 'react';
import { Link } from 'react-router-dom';

import AuthUserContext from './AuthUserContext';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';

import ResponsiveMenu from 'react-responsive-navbar';
import FaAlignJustify from 'react-icons/lib/fa/';

var menuIcon = require('react-icons/lib/fa/bars');
var closeIcon = require('react-icons/lib/fa/close');

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
  <div className='nav'>
    <div className='logo'><Link to={routes.HOME}><img src={require('../res/images/logo.png')} alt='Home'/></Link></div>
    <ResponsiveMenu
          menuOpenButton={
            <div>
              {React.createElement(menuIcon, null)}
            </div>
          }
          menuCloseButton={
            <div>
              {React.createElement(closeIcon, null)}
            </div>
          }
          changeMenuOn="500px"
          largeMenuClassName="nav-tab"
          smallMenuClassName="nav-collapsed"
          menu={
            <ul>
              <li className='nav-tab'><Link to={routes.ACCOUNT}>Account</Link></li>
              <li className='nav-tab'><Link to={routes.SEARCH}>Search</Link></li>
              <li className='nav-tab'><Link to={routes.SELL}>Sell</Link></li>
              <li className='signOutButton'><SignOutButton /></li>
            </ul>
          }
        />
  </div>

const NavigationNonAuth = () =>
  <ul className='nav'>
    <li className='logo'><Link to={routes.HOME}><img src={require('../res/images/logo.png')} alt='Home'/></Link></li>
    <li className='navButton'><Link to={routes.SIGN_IN}>Sign In</Link></li>
  </ul>


export default Navigation;
