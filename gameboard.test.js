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

describe('Gameboard attack logic', () => {
    beforeEach(() => {
        gameboard.clear();
    });
    test('receive attack miss', () => {
        // assert result
        expect(gameboard.receiveAttack([0, 0])).toBe(false);
        // assert side effect - attacks array contains the coordinate
        expect(gameboard.attacks).toEqual([[0, 0]]);
    });
    test('receive redundant attack', () => {
        gameboard.receiveAttack([1, 1]);
        expect(gameboard.receiveAttack([1, 1])).toBe(false);
    });
    test('receive attack out of bounds', () => {
        expect(gameboard.receiveAttack([-1, 11])).toBe(false);
        expect(gameboard.attacks).toEqual([]);
    });
    test('receive attack hit', () => {
        gameboard.placeShip([0, 0], [0, 3], 4);
        expect(gameboard.receiveAttack([0, 2])).toBe(true);
        expect(gameboard.board[0][0]._hits).toBe(1);
        expect(gameboard.board[0][1]._hits).toBe(1);
        expect(gameboard.board[0][2]._hits).toBe(1);
        expect(gameboard.board[0][3]._hits).toBe(1);

        expect(gameboard.attacks).toEqual([[0, 2]]);
    });
    test('receive redundant attack on ship square', () => {
        gameboard.placeShip([0, 0], [0, 3], 4);
        expect(gameboard.receiveAttack([0, 2])).toBe(true);
        // redundant attack
        expect(gameboard.receiveAttack([0, 2])).toBe(false);
        expect(gameboard.attacks).toEqual([[0, 2]]);
    });
});

describe('Gameboard all ships have sunk', () => {
    beforeEach(() => {
        gameboard.clear();
    });
    test('ship counting logic', () => {
        expect(gameboard._ships).toBe(0);
        gameboard.placeShip([0, 0], [0, 3], 4);
        expect(gameboard._ships).toBe(1);
        gameboard.placeShip([1, 0], [3, 0], 3);
        expect(gameboard._ships).toBe(2);
    });
    test('tracking ship sinking logic', () => {
        gameboard.placeShip([0, 0], [0, 3], 4);
        gameboard.placeShip([1, 0], [3, 0], 3);
        expect(gameboard.allShipsSunk()).toBe(false);
        gameboard.receiveAttack([0, 0]);
        gameboard.receiveAttack([0, 1]);
        gameboard.receiveAttack([0, 2]);
        gameboard.receiveAttack([0, 3]);
        expect(gameboard.board[0][0].isSunk()).toBe(true);
        expect(gameboard.allShipsSunk()).toBe(false);
        gameboard.receiveAttack([1, 0]);
        gameboard.receiveAttack([2, 0]);
        gameboard.receiveAttack([3, 0]);
        expect(gameboard.board[1][0].isSunk()).toBe(true);
        expect(gameboard.allShipsSunk()).toBe(true);
    });
});
