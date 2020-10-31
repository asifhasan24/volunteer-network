import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logos/Group 1329.png'
import './Header.css'
import VolinteerWorks from './VolunteerWorks.css/VolinteerWorks';
const Header = () => {
    return (
        <div className='bg'>
        <div className='ml-5 d-flex justify-content-between'>
            <img className='mt-4' width='250px' src={logo} alt=""/>
            <nav className='mt-4 navLink'>
                <Link   className='ml-5 link' to='/'>Home</Link>
                <Link   className='ml-5 link'>Donation</Link>
                <Link   className='ml-5 link' to='/events'>Events</Link>
                <Link   className='ml-5 link'>Blogs</Link>
                <Link   className='ml-5' to='/register/5f78d786e12c252df468f9a4'><button className="btn btn-primary">Register</button></Link>
                <Link   className='ml-5 mr-5' to='/admin'><button className="btn btn-dark">Admin</button></Link>
            </nav>
            </div>
            <div className="text-center mt-4">
                <h2>I GROW BY HELPING PEOPLE IN NEED</h2><br/>
                <input className='searchBox' type="text" placeholder='Search...' name="" id=""/>
                <button className="btn-primary searchBtn">Search</button>
            </div>
            <VolinteerWorks/>
        </div>
        
    );
};

export default Header;