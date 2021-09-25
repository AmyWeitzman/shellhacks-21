import React from 'react';
import { auth } from '../firebaseApp';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div>
            <h1 id="homepage-title">Welcome to Real Life!</h1>
            <button onClick={() => auth.signOut()}>Signout</button>
        </div>
    );
};
      
export default Dashboard;