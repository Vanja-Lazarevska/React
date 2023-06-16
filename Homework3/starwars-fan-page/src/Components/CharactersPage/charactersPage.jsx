import React from "react";
import Character from "../Character/character";
import '../CharactersPage/charactersPage.css'

class CharactersPage extends React.Component {
    constructor() {
        super()
        this.state = {
            characters: []
        }
    }

    componentDidMount = () => {
        console.log('Component did mount')
        this.handleFetchCall()

    }

    handleFetchCall = async () => {
        const response = await fetch('https://swapi.dev/api/people')
        const data = await response.json()
        const newCharacters = data.results
        console.log(newCharacters)
        this.setState({
            characters: newCharacters
        })
    }

    render() {
        return (
            <div>
                <h1 className="charactersPageHeader">Star Wars</h1>
                {this.state.characters.map(character => (
                    <div key={character.created}>
                    <Character charactersArray={character}/>
                    </div>
                ))}
            </div>
        )
    }
}

export default CharactersPage