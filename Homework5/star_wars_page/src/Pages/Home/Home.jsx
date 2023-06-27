import { useState, useEffect } from "react"
import { FilmsTable } from "../../Components/FilmsTable/FilmsTable"
import { FetchFunction } from "../../Utils/FetchFunction"

const Home = () => {
    const [starWarsFilms, setStarWarsFilms] = useState([])

    const URL = 'https://swapi.dev/api/films/'

    useEffect(() => {
        FetchFunction(URL, setStarWarsFilms)
    }, [])


    return (
        <div>
            <h1>Home page</h1>
            <FilmsTable starWarsFilms={starWarsFilms}/>

        </div>
    )
}

export default Home