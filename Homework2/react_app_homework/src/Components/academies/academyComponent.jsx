import React from "react"

class Academy extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
            <h3>{this.props.name}</h3>
            <p>{this.props.description}</p>
            </div>
          
        )
    }
}

export default Academy