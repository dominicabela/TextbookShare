import React from 'react';
import SignInForm from './SignIn';
import { auth } from '../firebase';
import * as routes from '../constants/routes';
import { Link } from 'react-router-dom';
import AuthUserContext from './AuthUserContext';
import '/Users/BirBird/Documents/Documents - Brittany’s MacBook Pro/TextbookShare/src/res/css/index.css';
import Webcam from 'react-webcam';

const CameraScan = () =>
<div>
  <img src={require('../res/images/logo2.png')} style={{height:500, float: 'left',marginRight:0, marginLeft:50}} alt='Home'/>
  <div style={{float: 'right', marginRight:300}}><SignInForm/><Link to={routes.SEARCH} style={{marginLeft:130}}>Learn More</Link></div>
  <Webcam/>
</div>

  export default CameraScan;
