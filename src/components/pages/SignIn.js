import React, { useRef }  from 'react';
import { useHistory } from 'react-router-dom';
import { fbSignIn } from '../../firebaseApp';
import './SignIn.css';

import AuthForm from '../forms/AuthForm';

export default function SignIn() {
  const history = useHistory();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signIn = (e) => {
    e.preventDefault();
    fbSignIn(emailRef.current.value, passwordRef.current.value)
    .then(user => {
      history.push('/dashboard');
    }).catch(err => {
      console.log(err);
    })
  }

  return(
    <div className="auth-wrapper">
      <AuthForm 
        authType={"Sign in"} 
        onSubmit={signIn} 
        emailRef={emailRef} 
        passwordRef={passwordRef} 
        urlRef={null}
        otherAuthType={"Sign up"}
        otherAuthPrefixText={"Don't"}
        otherAuthRoute={"signup"} 
      />
    </div>
  )
}