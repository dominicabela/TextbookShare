import React from 'react';
import { Link } from 'react-router-dom';

import AuthUserContext from './AuthUserContext';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';

import ResponsiveMenu from 'react-responsive-navbar';

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
    <div className='logo'><Link to={routes.HOME}><img src={require('../res/images/logo2.png')} style={{height:60}} alt='Home'/></Link></div>
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
              <li className='nav-tab'><Link to={routes.ACCOUNT}>ACCOUNT</Link></li>
              <li className='nav-tab'><Link to={routes.SEARCH}>SEARCH</Link></li>
              <li className='nav-tab'><Link to={routes.SELL}>SELL</Link></li>
              <li className='nav-tab'><Link to={routes.SCAN}>SCAN BARCODE</Link></li>
              <li className='signOutButton'><SignOutButton /></li>
            </ul>
          }
        />
  </div>

const NavigationNonAuth = () =>
  <ul className='nav'>
    <li className='logo'><Link to={routes.HOME}><img src={require('../res/images/logo3.png')} style={{height:40}} alt='Home'/></Link></li>
    <li className='siteLogo'><Link to={routes.HOME}><img src={require('../res/images/logo4.png')} style={{height:50}} alt='Home'/></Link></li>
    <li className='navButton'><Link to={routes.SIGN_IN}>SIGN IN</Link></li>
  </ul>


export default Navigation;
