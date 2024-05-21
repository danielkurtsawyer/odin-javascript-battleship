const Player = require('../scripts/player');
const Gameboard = require('../scripts/gameboard');
const Ship = require('../scripts/battleship');

describe('Player class instance creation', () => {
    const player = new Player();
    test('Player creation instantiated with a blank game board', () => {
        expect(player.gameboard).toEqual(new Gameboard());
    });
});
