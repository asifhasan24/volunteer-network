import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logos/Group 1329.png'
import plusIcon from '../../logos/plus 1.png'
import userIcon from '../../logos/users-alt 1.png'
import './AddWorks.css'
const AddWoks = () => {
    const handleSubmit = (e) => {
        const name = document.getElementById('name').value;
        const description = document.getElementById('description').value
        const date = document.getElementById('date').value
        const event = { name: name, description: description, date: date }
         
            fetch('https://fierce-mesa-96484.herokuapp.com/addWorks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(event)
            })
        
        e.preventDefault();
    }
    return (
        <div>
            <div className="text-center">
                <img width='150px' src={logo} alt="" />

            </div>
            <div className="d-flex justify-content-around">
                <div className='d-flex mt-4 mb-5 mr-5'>
                    <img height='10px' className='img-fluid' src={plusIcon} alt="" />
                    <Link to='/admin'><p className='ml-1 workList'>Add Event</p></Link>
                </div>
                <div className='d-flex  mt-4 mb-5'>
                    <img height='10px' className='img-fluid' src={userIcon} alt="" />
                    <Link to='/admin1'><p className='ml-1 resgisterList'>Volunteer register list</p></Link>
                </div>

            </div>
            <div className="d-flex justify-content-center mt-5">
                <form  onSubmit={handleSubmit} className='shadow '>
                    <div className="d-flex m-3">
                        <div>
                            <h5 className='mt-3'>Event Title</h5>
                            <input type="text" required id='name' name='name' className='eventInputBox' />
                            <h5 className='mt-3'>Description</h5>
                            <input type="text" id='description' name='description' required />
                        </div>
                        <div className='ml-5'>
                            <h5 className='mt-3'>Event Date</h5>
                            <input type="date" name="date" id="date" required className='eventInputBox' />
                            <h5 className='mt-3'>Banner</h5>
                            <p  className='upload'>Upload</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button type='submit' className='addEventBtn bg-success'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddWoks;