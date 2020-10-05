import React , { useContext, useEffect, useState }from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import FakeData from '../FakeData/Work'
const Register = (props) => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {id,title,pic} = useParams()

   

    const handleform =()=>{
        const newInfo = {...loggedInUser}
        fetch('http://localhost:7000/addInfo',{
            method : 'POST',
            headers :{'Content-Type':'application/json'},
            body : JSON.stringify(newInfo)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
        })
    }
    return (
        <div>
     
      <form>
      <input type="text" name="" id=""  placeholder={loggedInUser.name}/>
      <br/>
      <input type="email" name="" id="" placeholder={loggedInUser.email}/>
      <br/>
      <input type="date" name="" id=""/>
      <br/>
      <input type="text" name="" id=""  placeholder=''/>
      <br/>
      <input type="text" name="" id=""  placeholder={title}/>
      <br/>

      <Link to={`/info?email=${loggedInUser.email}`}><button onClick={handleform} type="button" class="btn btn-warning btn-lg">Registration</button></Link>
      </form>
    
        </div>
    );
};

export default Register;