import React, { useState, useContext } from 'react';
import UserContext from '../../Context.js';
import './Dashboard.css';

import NavBar from '../subcomponents/NavBar';
import Profile from '../subcomponents/views/Profile';
import Scan from '../subcomponents/views/ScanReport.js';

const Dashboard = () => {
  const [curView, setCurView] = useState("profile");
  const user = useContext(UserContext);

  console.log("USERSS0", user);
  return (
    <div id="dashboard-container">
      <div className="row">
        <div className="col-2">
          <NavBar switchView={setCurView} />
        </div>
        <div className="col">
          {user === undefined && curView === "profile" && <Profile email={"bemail"} url="aurl"></Profile>}
          {user === undefined && curView === "scan" && <Scan uid={'1234'} url="https://www.google.com/"></Scan>}
        </div>
      </div>
    </div>
  );
};
      
export default Dashboard;