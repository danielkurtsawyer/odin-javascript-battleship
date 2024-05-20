const Gameboard = require('./gameboard');
const Ship = require('./battleship');

class Player {
    constructor() {
        this._gameboard = new Gameboard();
    }
    get gameboard() {
        return this._gameboard;
    }
}

module.exports = Player;
