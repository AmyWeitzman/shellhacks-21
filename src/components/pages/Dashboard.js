import React, { useState } from 'react';
import './Dashboard.css';

import NavBar from '../subcomponents/NavBar';
import Profile from '../subcomponents/views/Profile';

const Dashboard = () => {
  const [curView, setCurView] = useState("profile");

  return (
    <div id="dashboard-container">
      <div className="row">
        <div className="col-2">
          <NavBar switchView={setCurView} />
        </div>
        <div className="col">
          {curView === "profile" && <Profile email="bemail" url="aurl"></Profile>}
        </div>
      </div>
    </div>
  );
};
      
export default Dashboard;