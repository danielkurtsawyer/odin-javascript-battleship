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

// once the board is filled up, render the player board
DOMController.renderPlayerBoard(player.gameboard.board);
