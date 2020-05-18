import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import Home from './Home'
import Course from './Course'
import Account from './Account'
import Student from './Student'
import Class from './Class'
import Login from './pages/Login'
import Attendance from './Attendance'
import Teacher from './Teacher'

import PrivateRoute from './utils/PrivateRoute'
import PublicRoute from './utils/PublicRoute'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="content">
            <Switch>
              <PublicRoute exact path="/" component={Login} />
              <PrivateRoute path="/home" component={Home} />
              <PrivateRoute path="/course" component={Course} />
              <PrivateRoute path="/class" component={Class} />
              <PrivateRoute path="/account" component={Account} />
              <PrivateRoute path="/student" component={Student} />
              <PrivateRoute path="/attendance" component={Attendance} />
              <PrivateRoute path="/teacher" component={Teacher} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
 
export default App;
