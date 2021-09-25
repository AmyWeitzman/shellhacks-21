import React from 'react';
import { useHistory } from 'react-router-dom';
import { fbSignOut } from '../firebaseApp';
import "./NavBar.css";

const NavBar = () => {
  const history = useHistory();

  const signOut = () => {
    fbSignOut();
    history.push('/signin');
  }

  return (
    <ul class="nav flex-column" id="navbar-container">
      <li class="nav-item">
        <a class="nav-link active" href="#">My profile</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Scan website</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Report history</a>
      </li>
      <li class="nav-item">
        <div class="navbar-spacer"></div>
      </li>
      <li class="nav-item align-iterm-end">
        <button onClick={signOut} class="btn btn-primary btn-block" id="sign-out-btn">Sign out</button>
      </li>
    </ul>
  );
};
      
export default NavBar;