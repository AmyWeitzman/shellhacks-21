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
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        const user = {
          uid: userAuth.uid,
          email: userAuth.email
        }
        setUser(user);
      } else {
        setUser(null);
      }
    })
    return unsubscribe;
  }, [])

  return (
    <div className="wrapper">
      <h1 id="app-title">{APP_NAME}</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/" | "/dashboard"} component={user ? Dashboard : SignIn} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
