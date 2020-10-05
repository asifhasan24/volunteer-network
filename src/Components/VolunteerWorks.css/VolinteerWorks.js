import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './VolinteerWorks.css'
const VolinteerWorks = () => {

    const [worksTypes,setWorksTypes]=useContext(userContext)
    useEffect(()=>{
        fetch('http://localhost:5000/works')
        .then(res=>res.json())
        .then(data=>{
            setWorksTypes(data)
            console.log(data)
        })
        
    },[])
    
    return (
        <div className='row mt-5 ml-5'>
            
            {
                worksTypes.map(work=>{
                    return[
                        <div className="col-md-3 divHeight mt-5">
                            {work.pic?<img width='250px' height='300px' src={require(`../../images/${work.pic}`)} alt=""/>:<h5 className='mb-5'>
                            {work.description}</h5>}
                            <Link to={'/register/'+work._id}><button className="workNameBtn">{work.name}</button></Link>
                        </div>
                    ]
                })
            }
        </div>
    );
};

export default VolinteerWorks;