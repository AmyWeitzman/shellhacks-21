import React from 'react';
import { useHistory } from 'react-router-dom';
import { fbSignOut } from '../firebaseApp';
import './Dashboard.css';

const Dashboard = () => {
    const history = useHistory();

    const signOut = () => {
        fbSignOut();
        history.push('/signin');
    }

    return (
        <div>
            <h1 id="homepage-title">Welcome to Real Life!</h1>
            <button onClick={signOut}>Signout</button>
        </div>
    );
};
      
export default Dashboard;