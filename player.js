"use strict";

class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
        this.choiceSelected = ""
        this.choiceArr = ["rock", "paper", "scissors", "lizard", "spock"];
    }
}

module.exports = Player;