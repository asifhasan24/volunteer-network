import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './VolunteerWorks.css'
const VolunteerWorks = () => {

    const [worksTypes, setWorksTypes] = useContext(userContext)
    useEffect(() => {
        fetch('https://fierce-mesa-96484.herokuapp.com/works')
            .then(res => res.json())
            .then(data => {
                setWorksTypes(data)
                console.log(data)
            })

    }, [])

    return (
        <div className='row mt-5 ml-5'>

            {
                worksTypes.map(work => {
                    return [
                        <div className="col-12 col-sm-6 col-md-3 divHeight mt-5">
                            <Link to={'/register/' + work._id}>
                            {work.pic ? <img width='250px' height='300px' src={require(`../../images/${work.pic}`)} alt="" /> : <h5 className='mb-5 color'>
                                {work.description}</h5>}
                            <button className="workNameBtn">{work.name}</button>
                            </Link>
                        </div>
                        
                    ]
                })
            }
        </div>
    );
};

export default VolunteerWorks;