import Player from '../scripts/player';
import Gameboard from '../scripts/gameboard';
import Ship from '../scripts/battleship';

describe('Player class instance creation', () => {
    const player = new Player();
    test('Player creation instantiated with a blank game board', () => {
        expect(player.gameboard).toEqual(new Gameboard());
    });
});
