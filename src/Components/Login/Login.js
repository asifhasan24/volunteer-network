import React, { useContext, useState, } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App'
import { Link, useHistory, useLocation } from 'react-router-dom';


const Login = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email } = result.user
      const signedInUser = { name: displayName, email }
      setLoggedInUser(signedInUser)
      history.replace(from)

    }).catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage)
    });


  }
 
     
 



  return (
    <div className="bg-img" style={{ paddingTop: '100px', paddingLeft: '500px' }}>
   

     
    
      <button onClick={handleGoogleSignIn} type="button" class="btn btn-lg btn-dark mb-2">Contine with Google</button>
      <br />
      

     
    </div>
  );
};

export default Login;