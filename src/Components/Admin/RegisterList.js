import React, { useEffect, useState } from 'react';
import logo from '../../logos/Group 1329.png'
import userIcon from '../../logos/users-alt 1.png'
import plusIcon from '../../logos/plus 1.png'
import trashIcon from '../../logos/trash-2 9.png'
import './RegisterList.css'
import { Link } from 'react-router-dom';
const RegisterList = () => {
    const [registers,setRegisters]=useState([])
    useEffect(()=>{
        fetch('https://fierce-mesa-96484.herokuapp.com/registersList')
        .then(res=>res.json())
        .then(data=>{
           setRegisters(data);
        })
    },[])
    const handleTrash=(id)=>{
        const div=document.getElementById(id)
        console.log(document.getElementById(id))
        div.style.display='none';
        fetch(`https://fierce-mesa-96484.herokuapp.com/deleteEvent/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
        })
    }
    return (
        <div className='ml-3 mt-5'>
           <div className="text-center">
           <img width='150px' src={logo} alt=""/>
           
           </div>
           <div className="d-flex justify-content-around">
                <div className='d-flex  mt-4 mb-5'>
                    <img height='10px' className='img-fluid' src={userIcon} alt=""/>
                    <Link to='/admin1'><p className='ml-1 volunteerList'>Volunteer register list</p></Link>
                </div>
                <div className='d-flex mt-4 mb-5 mr-5'>
                    <img height='10px'className='img-fluid' src={plusIcon} alt=""/>
                    <Link to='/admin'><p className='ml-1 addEvent'>Add Event</p></Link>
                </div>
           </div>
           <h3 className='ml-5 mb-4'>Volunteer register list :</h3>
                
                 <div className='row '>
                     <div className="d-flex justify-content-center mb-2 col-md-12 ">
                         <h5 className="ml-5" style={{width:'190px'}}>Name</h5>
                         <h5 className="ml-5"style={{width:'210px'}}>Email Id</h5>
                         <h5 className="ml-5"style={{width:'230px'}}>Registrating Date</h5>
                         <h5 className="ml-5"style={{width:'200px'}}>Volunteer List</h5>
                         <h5 className="ml-5">Action</h5>
                     </div>
                        {
                            registers.map(register=>{
                                return[
                                    
                                        <div className='col-md-12' id={register._id}>
                                            <div className=" d-flex justify-content-center  " >
                                                <p className='mb-5 ml-5'style={{width:'150px'}}>{register.displayName}</p>
                                                <p className='mb-5 ml-5' style={{width:'250px'}}>{register.email}</p>
                                                <p className='mb-5 ml-5'style={{width:'250px'}}>{register.date}</p>
                                                <p className='mb-5 ml-5'style={{width:'200px'}}>{register.name}</p>
                                            <button onClick={()=>handleTrash(register._id)} className='trashBtn ml-5'>
                                                <img width='30px' src={trashIcon} alt=""/>
                                            </button>
                                        </div>
                                        </div>
                                    
                                ]
                            })
                        }
                        
                        </div>
                        
                      
            
        </div>
    );
};

export default RegisterList;