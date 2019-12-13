import React, {Component} from 'react';

class Squares extends Component{
    constructor(props){
        super(props)
    }

    handleClick = (index) => {
        this.props.squareLocation(this.props.index)
        this.props.clickCounter(this.props.counter)
    }

    render(){
        return(
            <div>
            <button class = "Squares" onClick = {this.handleClick}> {this.props.value} </button>
            </div>
        )
    }
}

export default Squares;
