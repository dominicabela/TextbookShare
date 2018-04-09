import React from 'react';

import { auth } from '../firebase';

const SignOutButton = () =>
  <button
    className='signOutButton'
    type="button"
    onClick={auth.doSignOut}
  >
    SIGN OUT
  </button>

export default SignOutButton;
