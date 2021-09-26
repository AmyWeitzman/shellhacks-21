import React, { useState, useContext } from 'react';
import UserContext from '../../Context.js';
import './Dashboard.css';

import NavBar from '../subcomponents/NavBar';
import Profile from '../subcomponents/views/Profile';
import Scan from '../subcomponents/views/ScanReport';
import History from '../subcomponents/views/History';
import Resources from '../subcomponents/views/Resources';

const Dashboard = () => {
  const [curView, setCurView] = useState("scan");
  const user = useContext(UserContext);

  console.log("USERSS0", user);
  return (
    <div id="dashboard-container">
      <div className="row">
        <div className="col-2">
          <NavBar curView={curView} switchView={setCurView} />
        </div>
        <div className="col">
          {user === undefined && curView === "profile" && <Profile email={"bemail"} url="aurl"></Profile>}
          {user === undefined && curView === "scan" && <Scan uid={'1234'} url="https://www.google.com/"></Scan>}
          {user === undefined && curView === "reports" && <History uid={'1234'}></History>}
          {user === undefined && curView === "resources" && <Resources></Resources>}
        </div>
      </div>
    </div>
  );
};
      
export default Dashboard;