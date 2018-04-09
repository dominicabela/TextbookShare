import React from 'react';
import SignInForm from './SignIn';
import { auth } from '../firebase';
import * as routes from '../constants/routes';
import { Link } from 'react-router-dom';
import AuthUserContext from './AuthUserContext';
import '../res/css/index.css';

const HomePage = () =>
<AuthUserContext.Consumer>
  {authUser => authUser
    ? <NavigationAuth />
    : <NavigationNonAuth />
  }
</AuthUserContext.Consumer>



  const NavigationAuth = () =>
    <div>
      <img src={require('../res/images/logo2.png')} style={{height:500, float: 'left',marginRight:0, marginLeft:50}} alt='Home'/>
      <ul className="menu">
        <li className='homeButton'><Link to={routes.SELL}>CHECK MESSAGES</Link></li>
        <li className='homeButton'><Link to={routes.SEARCH}>FIND BOOKS</Link></li>
      </ul>
      </div>

  const NavigationNonAuth = () =>
    <div>
      <img src={require('../res/images/logo2.png')} style={{height:500, float: 'left',marginRight:0, marginLeft:50}} alt='Home'/>
      <div style={{float: 'right', marginRight:300}}><SignInForm/><Link to={routes.SEARCH} style={{marginLeft:130}}>Learn More</Link></div>
    </div>


export default HomePage;
