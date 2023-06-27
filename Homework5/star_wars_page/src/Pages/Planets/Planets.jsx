import { useState, useEffect } from "react"
import { PlanetsCard } from "../../Components/PlanetsCard/PlanetsCard"
import { FetchFunction } from "../../Utils/FetchFunction"

const Planets = () => {

        const [planets, setPlanets] = useState([])
        const URL = 'https://swapi.dev/api/planets'

    
    useEffect(()=> {
        FetchFunction(URL, setPlanets)
    }, [])


    return (
        <div>
            <h1>Planets</h1>
            {planets.map((planet)=> (
            <div key={planet.name}>
             <PlanetsCard homewodl={planet}/>
             </div>
            ))}
        </div>
    )
}

export default Planets