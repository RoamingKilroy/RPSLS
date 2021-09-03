"use strict";
const prompt = require("prompt-sync")();
const Human = require('./human');
const AI = require('./ai');
const Player = require('./player');

class Game{
    constructor(){
        this.playerOne = new Human;
        this.playerTwo = new Player;
    }
    game(){
        this.rules();
        this.playerSelector();
        this.choiceSelector();
        this.winner();
        this.score();
    }
    rules(){
        console.log("rules go here");// right rules
    }
    playerSelector(){
        let selection = prompt("Would you like to play against a human or computer?")
        switch(selection){
            case "human":
                this.playerTwo = new Human();
                break;
            case "computer":
                this.playerTwo = new AI();
                break;
            default:
                return (playerSelector());
        }
    }
    choiceSelector(){
        console.log("It's " + this.playerOne.name +"'s turn.");
        this.playerOne.choiceSelect();
        console.log("It's " + this.playerTwo.name +"'s turn.");
        this.playerTwo.choiceSelect();
    }
    winner(){
        //code goes here
    }
    score(){
        //code goes here
    }
    //validation ?
}

module.exports = Game;