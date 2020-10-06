import React, { useContext, useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import logo from '../../logos/Group 1329.png'
import './Register.css'
import { Link, Redirect, useParams } from 'react-router-dom';
import { userInfo } from '../../App';
const Register = () => {
    const [loggedInUser,setLoggedInUser]=useContext(userInfo);
    const {id}=useParams();
    const [work,setWork]=useState({})
    const [state,setState]=useState(false)
    useEffect(()=>{
        fetch(`https://hidden-castle-11326.herokuapp.com/works/${id}`)
        .then(res=>res.json())
        .then(data=>setWork(data))
    },[])
    const handleRegisterBtn=(e)=>{
        const newRegisterEvent={...loggedInUser,name:work.name,_id:loggedInUser.email+String(work.key),description:work.description,pic:work.pic,date:new Date(),}
        fetch('https://hidden-castle-11326.herokuapp.com/registration',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(newRegisterEvent)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
        setState(true);
        e.preventDefault();
    }
    if(state) {
          return <Redirect push to="/events" />;
        }
    return (
        <div className='text-center mt-4'>
            <img width='150px' src={logo} alt=""/>
            <div className="d-flex justify-content-center p-5 ">
            <form className='registration p-3'>
                    <h4>Register as a Volunteer</h4>
                    <input type="text" value={loggedInUser.displayName} name="" id=""/><br/> <br/>
                    <input type="text" value={loggedInUser.email} name="" id=""/><br/> <br/>
                                    
                    <TextField
                            id="date"
                            type="date"
                            InputLabelProps={{
                            shrink: true,
                            }}
                        /><br/><br/>

                    <input type="text" placeholder='Description' name="" id=""/><br/> <br/>
                    <input type="text" value={work.name} name="" id=""/><br/> <br/>
                    <button onClick={handleRegisterBtn}  className="registerBtn">Registration</button>
            </form>
            </div>
        </div>
    );
};

export default Register;