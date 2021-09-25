import React from 'react';
import './Dashboard.css';

import NavBar from './NavBar';

const Dashboard = () => {
    return (
      <div id="dashboard-container">
        <div className="row">
          <div className="col-2">
            <NavBar />
          </div>
          <div className="col">
            <p>test</p>
          </div>
        </div>
      </div>
    );
};
      
export default Dashboard;