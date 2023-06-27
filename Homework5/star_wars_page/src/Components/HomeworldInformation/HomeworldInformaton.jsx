import Card from 'react-bootstrap/Card';


export const HomeworldInformation = ({homewodl}) => {

    return (
    <div>
    <Card style={{ width: '16rem' }}>
    <Card.Body >
    <Card.Text>Name: {homewodl.name}</Card.Text>
    <Card.Text>Diameter: {homewodl.diameter}</Card.Text>
    <Card.Text>Climate: {homewodl.climate}</Card.Text>
    <Card.Text>Gravity: {homewodl.gravity}</Card.Text>
    <Card.Text>Terrain: {homewodl.terrain}</Card.Text>
    <Card.Text>Population: {homewodl.population}</Card.Text>
    </Card.Body>
    </Card>
    </div>
    )
}