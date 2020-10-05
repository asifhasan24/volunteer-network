import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';


const Home = () => {
    const [work,setWork] =useState([])

    useEffect(()=>{
        fetch('http://localhost:7000/info')
        .then(res =>res.json())
        .then(data => setWork(data))
    },[])
    return (
        <div>
           <div>

           </div> 
           <div className="row">
               {
                   work.map(work=><Details key={work.title} work={work}></Details>)
               }
           </div>
        </div>
    );
};

export default Home;