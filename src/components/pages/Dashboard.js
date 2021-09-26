import React, { useState } from 'react';
import './Dashboard.css';

import NavBar from '../subcomponents/NavBar';
import Profile from '../subcomponents/views/Profile';
import Scan from '../subcomponents/views/ScanReport';
import History from '../subcomponents/views/History';
import Resources from '../subcomponents/views/Resources';

const Dashboard = () => {
  const [curView, setCurView] = useState("scan");

  // FOR TESTING  //
  const testEmail = "test@email.com";
  const testUrl = "https://www.google.com/";
  const testUid = "1234";
  // FOR TESTING //

  return (
    <div id="dashboard-container">
      <div className="row">
        <div className="col-2">
          <NavBar curView={curView} switchView={setCurView} />
        </div>
        <div className="col">
          {curView === "profile" && <Profile email={testEmail} url={testUrl}></Profile>}
          {curView === "scan" && <Scan uid={testUid} email={testEmail} url={testUrl}></Scan>}
          {curView === "reports" && <History uid={testUid}></History>}
          {curView === "resources" && <Resources></Resources>}
        </div>
      </div>
    </div>
  );
};
      
export default Dashboard;