import React from 'react';
import SignInForm from './SignIn';
import * as routes from '../constants/routes';
import { Link } from 'react-router-dom';
import AuthUserContext from './AuthUserContext';
import '../res/css/index.css';
import '../res/css/index.css';

const HomePage = () =>
<AuthUserContext.Consumer>
  {authUser => authUser
    ? <NavigationAuth />
    : <NavigationNonAuth />
  }
</AuthUserContext.Consumer>



  const NavigationAuth = () =>
    <div className="home">
      <img className="homeLogo" src={require('../res/images/logo2.png')} alt='Home'/>
      <div className="menu">
        <Link to={routes.SELL}><button className='homeButton'>CHECK MESSAGES</button></Link>
        <Link to={routes.SCAN}><button className='homeButton'>SCAN BOOK</button></Link>
      </div>
      </div>

  const NavigationNonAuth = () =>
    <div>
      <img src={require('../res/images/logo2.png')} style={{height:500, float: 'left',marginRight:0, marginLeft:50}} alt='Home'/>
      <div style={{float: 'right', marginRight:300}}><SignInForm/><Link to={routes.SEARCH} style={{marginLeft:130}}>Learn More</Link></div>
    </div>


export default HomePage;
