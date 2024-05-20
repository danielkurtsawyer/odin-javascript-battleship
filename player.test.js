const Player = require('./player');
const Gameboard = require('./gameboard');
const Ship = require('./battleship');

describe('Player class instance creation', () => {
    const player = new Player();
    test('Player creation instantiated with a blank game board', () => {
        expect(player.gameboard).toEqual(new Gameboard());
    });
});
