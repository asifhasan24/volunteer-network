import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Privateroute from './Components/Privateroute/Privateroute';
import Nomatch from './Components/Nomatch/Nomatch';
import Login from './Components/Login/Login';
import Activities from './Components/Activities/Activities';



export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState([])
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>


      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/info">
            <Activities />
          </Route>
          <Privateroute path="/register/:id">
            <Register />
          </Privateroute>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Nomatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;





