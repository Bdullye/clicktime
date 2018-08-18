import React, { Component } from "react";
import overcard from "../overcard.json";
import Character from "./character.js";

class Game extends Component {
    state = {
        overcard,
        score: 0,
        topScore: 0
    }
handleCorrectGuess(cards){
    //increment our score
    //check if our current score >= topscore => update top score
    let newScore = this.state.score + 1;
    this.setState({
       score: newScore
    })
}
handleIncorrectGuess(cards){
    // reset score to 0    t
    this.setState({
       score: 0
    })
}
handleItemClick = id => {
    let guessedCorrectly = false;    
    const updatedCards = this.state.overcard.map(item => {
        //const newItem = { ...item };
            if (item.id === id) {
                if (!item.clicked) {
                    item.clicked = true;
                        guessedCorrectly = true;
                }
            } else {
                item.clicked = false
            }
        return item;
    });
    if (guessedCorrectly){
        console.log('SO far so good')
        this.handleCorrectGuess(updatedCards)
    }else{
        console.log('So close')
        this.handleIncorrectGuess(updatedCards);
    }
}
    render () {
        return (
            <div>
                <h1>Score: {this.state.score} </h1>
                {this.state.overcard.map(item => (
                    <Character
                    key={item.id}
                    id={item.id}
                    handleClick = {this.handleItemClick}
                    image = {item.image}
                    />
                ))}
            </div>
        )
    }
}
export default Game;