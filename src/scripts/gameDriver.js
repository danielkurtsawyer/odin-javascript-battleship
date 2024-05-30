import Player from './player.js';
import Gameboard from './gameboard.js';
import Ship from './battleship.js';
import * as DOMController from './DOMController';

DOMController.loadPage();

const player = new Player();
const opponent = new Player();

// prompt player to place ships
// 1 two space, 1 three space, 2 four space, and 1 five space

// for now this is prepopulated
player.gameboard.placeShip([3, 1], [4, 1], 2);
player.gameboard.placeShip([0, 0], [0, 2], 3);
player.gameboard.placeShip([6, 2], [6, 5], 4);
player.gameboard.placeShip([6, 8], [9, 8], 4);
player.gameboard.placeShip([2, 8], [2, 4], 5);

// once the board is filled up, render the player board by sending the 2d array representation of the board and the attacks array
DOMController.renderPlayerBoard(
    player.gameboard.board,
    player.gameboard.attacks
);

// rendering the opponent board will use the opponent board and attacks array

// lets try adding a few attacks to see if this works
opponent.gameboard.receiveAttack([0, 0]);
opponent.gameboard.receiveAttack([5, 5]);
opponent.gameboard.receiveAttack([9, 9]);

DOMController.renderOpponentBoard(
    opponent.gameboard.board,
    opponent.gameboard.attacks
);
