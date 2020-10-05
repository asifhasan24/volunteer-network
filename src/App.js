import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import AddesWoks from './components/Admin/AddesWoks';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Events from './components/Events/Events';
import RegisterList from './components/Admin/RegisterList';
export const userContext=createContext()
export const userInfo=createContext()
function App() {
  const [worksTypes,setWorksTypes]=useState([])
  const [loggedInUser,setLoggedInUser]=useState([])
  return (
    <userInfo.Provider value={[loggedInUser,setLoggedInUser]}>
    <userContext.Provider value={[worksTypes,setWorksTypes]}>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Header></Header>
        </Route>
        <PrivateRoute path='/register/:id'>
          <Register></Register>
        </PrivateRoute>
        <PrivateRoute path='/events'>
          <Events/>
        </PrivateRoute>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/admin'>
          <AddesWoks/>
        </Route>
        <Route path='/admin1'>
          <RegisterList/>
        </Route>
      </Switch>
    </Router>
    </userContext.Provider>
    </userInfo.Provider>
  );
}

export default App;
