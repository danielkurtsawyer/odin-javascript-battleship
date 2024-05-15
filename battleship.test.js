const Ship = require('./battleship');

describe('Ship class', () => {
    let ship1 = null;
    beforeAll(() => {
        ship1 = new Ship(3);
    });
    test('test ship object creation', () => {
        expect(ship1.length).toBe(3);
    });
    test('test ship sinking logic', () => {
        ship1.hit();
        expect(ship1.isSunk()).toBe(false);
        ship1.hit();
        expect(ship1.isSunk()).toBe(false);
        ship1.hit();
        expect(ship1.isSunk()).toBe(true);
    });
});
