"use strict";
const Player = require("./player");


class AI extends Player {
    constructor(){
        super();
        this.name = "AI";
    }
    choiceSelect(){
        let randomNum = Math.floor(Math.random() * 5);
        switch(randomNum){
            case 1:
                this.choiceSelected = "Rock";
                break;
            case 2:
                this.choiceSelected = "Paper";
                break;
            case 3:
                this.choiceSelected = "Scissors";
                break;
            case 4:
                this.choiceSelected = "Lizar";
                break;
            case 5:
                this.choiceSelected = "Spock";
                break;
        }
        return this.choiceSelected;
    }
}



module.exports = AI;