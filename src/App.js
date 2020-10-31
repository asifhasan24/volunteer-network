import React, { createContext, useState } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import AddWoks from './components/Admin/AddWoks';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Events from './components/Events/Events';
import RegisterList from './components/Admin/RegisterList';
import Header from './components/Header/Header';
import NoMatch from './components/NoMatch/NoMatch';
export const userContext = createContext()
export const userInfo = createContext()
function App() {
  const [worksTypes, setWorksTypes] = useState([])
  const [loggedInUser, setLoggedInUser] = useState([])
  return (
    <userInfo.Provider value={[loggedInUser, setLoggedInUser]}>
      <userContext.Provider value={[worksTypes, setWorksTypes]}>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Header></Header>
            </Route>
            <Route  path='/home'>
              <Header></Header>
            </Route>
            <PrivateRoute path='/register/:id'>
              <Register></Register>
            </PrivateRoute>
            <PrivateRoute path='/events'>
              <Events />
            </PrivateRoute>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/admin'>
              <AddWoks />
            </Route>
            <Route path='/admin1'>
              <RegisterList />
            </Route>
            <Route path='*'>
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </userContext.Provider>
    </userInfo.Provider>
  );
}

export default App;
