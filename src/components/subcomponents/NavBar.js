import React from 'react';
import { useHistory } from 'react-router-dom';
import { fbSignOut } from '../../firebaseApp';
import "./NavBar.css";

const NavBar = ({ curView, switchView }) => {
  const history = useHistory();

  const signOut = () => {
    fbSignOut();
    history.push('/signin');
  }

  return (
    <ul class="nav flex-column" id="navbar-container">
      <li class="nav-item">
        <div class={`nav-link ${(curView === "profile") ? 'active' : ''}`} onClick={() => switchView("profile")}>My profile</div>
      </li>
      <li class="nav-item">
        <div class={`nav-link ${(curView === "scan") ? 'active' : ''}`} onClick={() => switchView("scan")}>Scan website</div>
      </li>
      <li class="nav-item">
        <div class={`nav-link ${(curView === "reports") ? 'active' : ''}`} onClick={() => switchView("reports")}>Report history</div>
      </li>
      <li class="nav-item">
        <div class={`nav-link ${(curView === "resources") ? 'active' : ''}`} onClick={() => switchView("resources")}>Resources</div>
      </li>
      <li class="nav-item">
        <div class="navbar-spacer"></div>
      </li>
      <li class="nav-item" id="sign-out-btn-container">
        <button onClick={signOut} class="btn btn-primary btn-block" id="sign-out-btn">Sign out</button>
      </li>
    </ul>
  );
};
      
export default NavBar;