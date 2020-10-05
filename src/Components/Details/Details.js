import React from 'react';
import { Link } from 'react-router-dom';


const Details = (props) => {
   
    const { id, title, pic } = props.work;
    return (
        <div>
            <div className="col-md-4">
                <div class="card ">
                    <img style={{ height: '200px' }} src={pic} class="card-img-top" alt="..." />
                    <div class="card-body">
                    <Link to={"/register/"+id}><button type="button" class="btn btn-warning btn-lg">{title}</button> </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Details;