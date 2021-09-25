import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { auth } from './firebaseApp';
import './App.css';

import Dashboard from '../src/components/Dashboard';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

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
      <h1>Application</h1>
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
