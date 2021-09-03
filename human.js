"use strict";
const prompt = require("prompt-sync")();
const Player = require("./player");

class Human extends Player {
    constructor(){
        super();
        let userName = prompt("What is your name?");
        this.name = userName;
    }
    choiceSelect(){
        console.log("Which would you like to select? " + this.choiceArr);
        let keyEnter = prompt("").toLowerCase;
        switch(keyEnter){
            case "rock":
                this.choiceSelected = "Rock";
                break;
            case "paper":
                this.choiceSelected = "Paper";
                break;
            case "scissors":
                this.choiceSelected = "Scissors";
                break;
            case "lizard":
                this.choiceSelected = "Lizard";
                break;
            case "spock":
                this.choiceSelected = "Spock";
                break;
        }
        return this.choiceSelected;
    }
}


module.exports = Human;