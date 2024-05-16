const Gameboard = require('./gameboard');
const Ship = require('./battleship');

let gameboard = new Gameboard();

describe('Gameboard creation', () => {
    test('Gameboard creation', () => {
        expect(gameboard.board).toEqual([
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ]);
    });
});

describe('Gameboard ship placement', () => {
    beforeEach(() => {
        gameboard.clear();
    });
    test('Ship placement with coordinates out of bounds', () => {
        expect(gameboard.placeShip([-1, 12], [11, -3], 5)).toBe(false);
        expect(gameboard.placeShip([0, -5], [-6, 12], 3)).toBe(false);
    });
    test('Ship placement on horizontal coordinate path', () => {
        expect(gameboard.placeShip([0, 0], [1, 2], 3)).toBe(false);
    });
    test('Ship placement with a mismatched length', () => {
        expect(gameboard.placeShip([0, 0], [0, 3], 3)).toBe(false);
        expect(gameboard.placeShip([5, 5], [9, 5], 4)).toBe(false);
    });
    test('Horizontal ship placement with correct params', () => {
        expect(gameboard.placeShip([0, 0], [0, 2], 3)).toBe(true);
        const ship = new Ship(3);
        expect(gameboard.board[0]).toEqual([
            ship,
            ship,
            ship,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
        ]);
    });
    test('Vertical ship placement with correct params', () => {
        expect(gameboard.placeShip([1, 2], [5, 2], 5)).toBe(true);
        const ship = new Ship(5);
        expect(gameboard.board.map((column) => column[2])).toEqual([
            0,
            ship,
            ship,
            ship,
            ship,
            ship,
            0,
            0,
            0,
            0,
        ]);
    });
    test('Ship placement overlap', () => {
        gameboard.placeShip([0, 0], [0, 3], 4);
        const ship = new Ship(4);
        expect(gameboard.placeShip([0, 2], [3, 2], 4)).toBe(false);
        expect(gameboard.board.map((column) => column[2])).toEqual([
            ship,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
        ]);
    });
});
