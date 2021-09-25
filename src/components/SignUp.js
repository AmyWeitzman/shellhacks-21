import React, { useRef }  from 'react';
import { useHistory } from 'react-router-dom';
import { fbSignUp } from '../firebaseApp';
import './SignUp.css';

import AuthForm from './AuthForm';

export default function SignUp() {
  const history = useHistory();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signUp = (e) => {
    e.preventDefault();
    fbSignUp(emailRef.current.value, passwordRef.current.value)
    .then(user => {
      history.push('/dashboard');
    }).catch(err => {
      console.log(err);
    })
  }

  return(
    <div className="auth-wrapper">
      <AuthForm 
        authType={"Sign up"} 
        onSubmit={signUp} 
        emailRef={emailRef} 
        passwordRef={passwordRef} 
        otherAuthType={"Sign in"}
        otherAuthPrefixText={"Already"}
        otherAuthRoute={"signin"} 
      />
    </div>
  )
}