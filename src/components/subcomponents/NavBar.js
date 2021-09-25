import React from 'react';
import { useHistory } from 'react-router-dom';
import { fbSignOut } from '../../firebaseApp';
import "./NavBar.css";

const NavBar = ({ switchView }) => {
  const history = useHistory();

  const signOut = () => {
    fbSignOut();
    history.push('/signin');
  }

  return (
    <ul class="nav flex-column" id="navbar-container">
      <li class="nav-item">
        <div class="nav-link" onClick={() => switchView("profile")}>My profile</div>
      </li>
      <li class="nav-item">
        <div class="nav-link" onClick={() => switchView("scan")}>Scan website</div>
      </li>
      <li class="nav-item">
        <div class="nav-link" onClick={() => switchView("reports")}>Report history</div>
      </li>
      <li class="nav-item">
        <div class="navbar-spacer"></div>
      </li>
      <li class="nav-item">
        <button onClick={signOut} class="btn btn-primary btn-block" id="sign-out-btn">Sign out</button>
      </li>
    </ul>
  );
};
      
export default NavBar;