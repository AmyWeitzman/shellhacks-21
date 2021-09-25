import React, { useRef }  from 'react';
import { Link, useHistory } from 'react-router-dom';
import { fbSignIn } from '../firebaseApp';
import './SignIn.css';

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
    <div className="login-wrapper">
      <h1>Sign In</h1>
      <form onSubmit={signIn}>
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
          Don't have an account? <Link to="/signup">Sign up</Link> now.
        </div>
      </form>
    </div>
  )
}