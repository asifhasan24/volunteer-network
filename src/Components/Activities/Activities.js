import React,{useEffect,useState, useContext} from 'react';
import { UserContext  } from '../../App';

const Activities = () => {
    const [info,setInfo] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(()=>{
        fetch('http://localhost:7000/info?email='+loggedInUser.email)
        .then(res =>res.json())
        .then(data=>setInfo(data))

    })
    return (
        <div>
            <h3>{info.length}</h3>{
                info.map(info =><li>{info.name}</li>)
            }
        </div>
    );
};

export default Activities;