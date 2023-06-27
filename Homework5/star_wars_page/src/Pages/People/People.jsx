import { useState, useEffect } from "react"
import { FetchFunction } from '../../Utils/FetchFunction';
import PeopleCards from '../../Components/PeopleCards/PeopleCards';

export const People = () => {

    const [people, setPeople] = useState([])
    const URL = 'https://swapi.dev/api/people'

    useEffect(() => {
        FetchFunction(URL, setPeople)
    },[])

    return (
        <div> 
            <PeopleCards people={people}/>
        </div>
    )
}