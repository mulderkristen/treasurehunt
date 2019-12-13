import React, {Component} from 'react';
import Squares from './squares.js'

class Board extends Component{
    constructor(props){
        super(props)
            this.state={
                squares:[ "💋", "💋", "💋", "💋", "💋", "💋", "💋", "💋", "💋"],
                clicked: false,
                winningSquare : null,
                losingSquare: null,
                counter: 6,
                gameWin: false,
                gameLose: false
        }
    }

    componentDidMount = () => {
        const {squares} = this.state
        let winner = Math.floor(Math.random()*squares.length)
        let loser = Math.floor(Math.random()*squares.length)
        if (winner === loser){
            loser = Math.floor(Math.random()*squares.length)
        }
        this.setState ({winningSquare: winner, losingSquare: loser})
        console.log(winner, loser)
    }

    squareLocation = (index) =>{
        const {winningSquare, losingSquare, squares} = this.state

        if( index === winningSquare){
            squares[index] = "👑"
            this.setState({
                squares: squares,
                gameWin: true
            })
            window.setTimeout(function(){window.location.reload()}, 200);
            window.setTimeout(function(){alert("YOU ARE ROYAL!")}, 200);

        } else if (index === losingSquare){
            squares[index] = "🐸"
            this.setState ({
                squares : squares,
                gameLose: true
            })
            window.setTimeout(function(){window.location.reload()}, 200);
            window.setTimeout(function(){alert("YOU TURNED INTO A FROG!!")}, 200);
        } else {
            squares[index] = "✖️"
            this.setState({
                squares : squares
            })
        }
    }

    clickCounter = () => {
        let newCount = this.state.counter - 1
        if (newCount < 0){
            this.setState ({
                gameOver: true
            })
            alert("No more tries left!")
            window.setTimeout(function(){window.location.reload()}, 200);
        } else {
            this.setState({counter: newCount})
        }
    }


    restartGame = () => {
        window.location.reload();
    }


    render(){
        let {squares, winningSquare} = this.state
        let square = squares.map((value, index)=> {
            return (
                <Squares
                value = {value}
                index = {index}
                key = {index}
                squareLocation = {this.squareLocation}
                clickCounter = {this.clickCounter}
                />
            )
        })

        return(
            <div id= "container">
            <h2>DON'T KISS THE FROG</h2>
            <br />
                {!this.state.gameWin && !this.state.gameLose &&
                    <div id="gameboard">
                    {square}
                </div>}
                {this.state.gameWin &&
                    <div id="gameOn">
                    <img id="frogWin" src="https://storage.needpix.com/rsynced_images/frog-prince-1370022_1280.jpg"  />
                </div>}
                {this.state.gameLose &&
                    <div id="gameOff">
                    <img id="frogLose" src="http://c1.peakpx.com/wallpaper/225/674/559/frog-fig-funny-cheeky-wallpaper-preview.jpg"  />
                </div>}
            <h1>tries left : {this.state.counter}</h1>
            <button onClick = {this.restartGame}> Restart Game </button>
            <br />
            <img id="frog" src="https://cdn.pixabay.com/photo/2015/08/23/18/53/frogs-903170_960_720.jpg"  />

            </div>

        )
    }
}


export default Board;
