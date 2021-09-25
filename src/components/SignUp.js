import React, { useRef }  from 'react';
import { Link, useHistory } from 'react-router-dom';
import { fbSignUp } from '../firebaseApp';
import './SignUp.css';

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
    <div className="login-wrapper">
      <h1>Sign Up</h1>
      <form onSubmit={signUp}>
        <label>
          <p>Email</p>
          <input type="text" ref={emailRef}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" ref={passwordRef}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
        <div>
          Already have an account? <Link to="/signin">Sign in</Link> now.
        </div>
      </form>
    </div>
  )
}