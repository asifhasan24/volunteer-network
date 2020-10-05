import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logos/Group 1329.png'
import plusIcon from '../../logos/plus 1.png'
import userIcon from '../../logos/users-alt 1.png'
import fakeData from '../../fakedata'
import './AddesWorks.css'
const AddesWoks = () => {
const handle=()=>{
    
    fetch('http://localhost:7000/addWorks',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(fakeData)
    })
}
    return (
        <div classname="uncommon">
              <div>
           <img width='150px' src={logo} alt=""/>
           
           </div>
           <div className=" justify-content-around">
                <div className='d-flex mt-4 mb-5 mr-5'>
                    <img height='10px'className='img-fluid' src={plusIcon} alt=""/>
                    <Link to='/admin'><p className='ml-1 workList'>Add Event</p></Link>
                </div>
                <div className='d-flex  mt-4 mb-5'>
                    <img height='10px' className='img-fluid' src={userIcon} alt=""/>
                    <Link to='/admin1'><p className='ml-1 resgisterList'>Volunteer register list</p></Link>
                </div>
                
           </div>
            <div className="d-flex justify-content-center mt-5">
                <form className='shadow ' action='http://localhost:5000/addWorks' method='post'>
                    <div className="d-flex m-3">
                        <div>
                            <h5>Event Title</h5>
                            <input type="text" required id='name' name='name' className='eventInputBox'/>
                            <h5>Description</h5>
                            <input type="text" id='description' name='description' required />
                        </div>
                        <div className='ml-5'>
                            <h5>Event Date</h5>
                            <input type="date" name="date" id="date" required className='eventInputBox'/>
                            <h5>Banner</h5>
                            <input type="image" src="" alt="upload"/>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button onClick={handle} type="submit" className='addEventBtn bg-danger'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddesWoks;