import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { auth } from './firebaseApp';
import './App.css';
import { APP_NAME } from './constants';

import Dashboard from './components/pages/Dashboard';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        const userInfo = {
          uid: userAuth.uid,
          email: userAuth.email
        }
        setUser(userInfo);
      } else {
        setUser(null);
      }
    })
  }, []);

  return (
    <div className="wrapper">
      <div id="title-img-container">
        <img src="https://www.akeaweb.com/wp-content/uploads/2018/02/akea-services-web-accessibility-wcag.png" alt="Accessibility icon: person in blue circle" width={60} height={60} />
        <h1 id="app-title">{APP_NAME}</h1>
      </div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path={"/" | "/dashboard"} component={user ? Dashboard : SignIn} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
