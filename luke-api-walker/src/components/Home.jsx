import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Home = props => {
    const [inputResource,setInputResouce] = useState("People");
    const [inputId,setInputId] = useState(1);
    const navigate = useNavigate();
    

    const onSubmitHandler = (e) => {
        e.preventDefault();
        navigate(`/${inputResource}/${inputId}`)
    }
    
    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <h1>This is the Home Page!</h1>
                <label htmlFor="reseourceSelect">Search for:</label>
                <select name="resourceSelect" onChange={e => setInputResouce(e.target.value)}>
                    <option value="People">People</option>
                    <option value="Planets">Planets</option>
                </select>
                <label htmlFor="resourceId">ID:</label>
                <input type="text" name="inputId" onChange={e => setInputId(e.target.value)} />
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}

export default Home;