import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userInfo } from '../../App';
import logo from '../../logos/Group 1329.png'
import './Events.css'

const Events = () => {
    const [loggedInUser,setLoggedInUser]=useContext(userInfo);
    const [events,setEvents]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/registers?email='+loggedInUser.email)
        .then(res=>res.json())
        .then(data=>setEvents(data))
    },[])
 
    const handleCancel=(id)=>{
        const div=document.getElementById(id)
        div.style.display='none';
        fetch(`http://localhost:5000/delete/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
        })
        
    }
    return (
        <div>
            <div className='ml-5 d-flex justify-content-between'>
            <img className='mt-4' width='250px' src={logo} alt=""/>
            <nav className='mt-4'>
                <Link   className='ml-5 eventLink' to='/'>Home</Link>
                <Link   className='ml-5 eventLink'>Donation</Link>
                <Link   className='ml-5 eventLink' to='/events'>Events</Link>
                <Link   className='ml-5 eventLink'>Blogs</Link>
                <Link   className='ml-5'to='/register/5f78d786e12c252df468f9a4' ><button className="btn btn-primary">Register</button></Link>
                <Link   className='ml-5 mr-5' to='/admin1'><button className="btn btn-dark">Admin</button></Link>
            </nav>
            </div>
            <div className="row mt-5 ">
        
            {
            events.map(event=>{
                    
                    return[
                     <div className="ml-5">
                            <div className="card mb-3 ml-5" id={event._id} style={{maxWidth:'500px',height:'280px'}}>
                            <div className="row">
                                <div className=" col-md-6">
                                    {event.pic?<img src={require(`../../images/${event.pic}`)} className="card-img" alt="..."/>
                                    : <h5>{event.description}</h5>
                                    }
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h5 className="card-title">{event.name}</h5>
                                        <p>2018/5/22</p>
                                        <br/>
                                        <br/>
                                        <button onClick={()=>handleCancel(event._id)}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>

                    ]
                    
                })
            }
             </div>
        </div>
    );
};

export default Events;