import React from "react";
import '../counter/counter.css'

class Counter extends React.Component {
    
    state = {
        count: 0
    }
    handleIncrement = () => {

        this.setState({
            count: this.state.count + 1
        })

    }
    handleDecrement = () => {

        this.setState({
            count: this.state.count - 1
        })
    }

    handleReset = () => {
        this.setState({
            count: 0
        })

    }

    handleUserInput = (userValue) => {
        this.setState({
            count: userValue
        })
    }

    render() {
        return(
            <div>
                <p>{this.state.count}</p>
                <span>{this.state.count % 2 == 0 ? 'Even' : 'Odd'}</span>
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleDecrement}>Decrement</button>
                <button onClick={this.handleReset}>Reset</button>

                <label htmlFor='inputedNumber'>Insert a number</label>
                <input type="number" id='inputedNumber' onChange={(inputedUserNumber) => {this.handleUserInput(inputedUserNumber.target.value)}}/>
            </div>

        )
    }
}

export default Counter
