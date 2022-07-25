import { Link, useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from 'react';


const People = props => {
    const [searchPeople,setSearchPeople] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get("https://swapi.dev/api/people/" + id)
            .then(res=>setSearchPeople(res.data))
            .catch(err => console.log(err))
    }, [id])
    
    
    return(
        <div>
            <button type="button"><a href="/">Home</a></button>
            {
                searchPeople ? <div>
                <h1>{searchPeople.name}</h1>
                <h2>Height:{searchPeople.height}</h2> 
                <h2>Mass:{searchPeople.mass}</h2> 
                <h2>Hair Color:{searchPeople.hair_color}</h2> 
                <h2>Skin Color:{searchPeople.skin_color}</h2> 
                </div> : ""
                
            }
        </div>
    )
}

export default People;