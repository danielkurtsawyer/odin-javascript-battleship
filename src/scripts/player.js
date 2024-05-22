import Gameboard from './gameboard';
import Ship from './battleship';

export default class Player {
    constructor() {
        this._gameboard = new Gameboard();
    }
    get gameboard() {
        return this._gameboard;
    }
}
