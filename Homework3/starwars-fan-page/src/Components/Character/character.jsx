import { Component } from "react";
import '../Character/character.css'


class Character extends Component {

    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Height</th>
                        <th>Gender</th>
                        <th>Birth Year</th>
                    </tr>
                        <tr>
                            <td>{this.props.charactersArray.name}</td>
                            <td>{this.props.charactersArray.height}</td>
                            <td>{this.props.charactersArray.gender}</td>
                            <td>{this.props.charactersArray.birth_year}</td>
                        </tr>
                        </tbody>



                </table>

            </div>
        )
    }
}

export default Character