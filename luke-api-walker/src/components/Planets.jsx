import { Link , useParams} from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from 'react';

const Planets = props => {
    const [searchPlanets,setSearchPlanets] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get("https://swapi.dev/api/planets/" + id)
            .then(res=>setSearchPlanets(res.data))
            .catch(err => console.log(err))
    }, [id])
    
    return(
        <div>
            <button type="button"><a href="/">Home</a></button>
            {
                searchPlanets ? <div>
                <h1>{searchPlanets.name}</h1>
                <h2>Climate:{searchPlanets.climate}</h2> 
                <h2>Terrain:{searchPlanets.terrain}</h2> 
                <h2>Surface Water:{searchPlanets.surface_water}</h2> 
                <h2>Population:{searchPlanets.population}</h2> 
                </div> : ""
                
            }
        </div>
    )
}

export default Planets;