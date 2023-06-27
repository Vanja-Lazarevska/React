import { useNavigate } from 'react-router-dom';
import './PeopleCards.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const PeopleCards = ({ people }) => {
    const navigate = useNavigate()

    return (
        <>
            {people.map((person) => (
                <div key={person.name} className="listOfPerson">
                    <Card className="text-center" bg='light' border='warning' style={{ width: '18rem' }}>
                        <Card.Body>
                        <Card.Title>{person.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{person.gender}</Card.Subtitle>
                        <Card.Text>{person.height}</Card.Text>
                        <Card.Text>{person.birth_year}</Card.Text>

                        <Button variant='outline-warning' onClick={() => navigate('/character/' + person.url.slice(29, 30))}>More</Button>
                        </Card.Body>
                    </Card>

                </div>
            ))}
        </>

    )
}


export default PeopleCards