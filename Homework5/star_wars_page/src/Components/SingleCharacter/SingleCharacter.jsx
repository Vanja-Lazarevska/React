import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import { SiStarship } from "react-icons/si";
import { HomeworldInformation } from '../HomeworldInformation/HomeworldInformaton';


const SingleCharacter = () => {

  const [character, setCharacter] = useState('')
  const [homewodl, setHomeworld] = useState('')
  const id = useParams().id
  const navigate = useNavigate()
  const fetchSingleCharacter = async () => {
    const URL = 'https://swapi.dev/api/people/'
    const response = await fetch(URL + id)
    const result = await response.json()
    setCharacter(result)
  }

  const fetchHomeworldInfomation = async () => {
    const response = await fetch(character.homeworld)
    const result = await response.json()
    setHomeworld(result)
    console.log(result)
  }

  useEffect(() => {
    fetchSingleCharacter()
  }, [])



  return (
    <div>
      {character ? 

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="/src/images/starwars.png" />
        <Card.Body>
          <Card.Title>{character.name}</Card.Title>
          <Card.Text>{character.haight}</Card.Text>
          <Card.Text>{character.gender}</Card.Text>
          <Card.Text>{character.birth_year}</Card.Text>
          <Button variant="dark" onClick={() => fetchHomeworldInfomation()}>Homeworld information</Button>
          <div style={{ display: homewodl ? "block" : "none" }}>
            <HomeworldInformation homewodl={homewodl}/>
          </div>
        </Card.Body>
        <Button variant="dark" onClick={() => navigate('/')}>Back</Button>
      </Card> 

        : <> <h1>Just a minute, the Star wars character is coming to you</h1> <SiStarship/> </> }

    </div> 

  )
}

export default SingleCharacter