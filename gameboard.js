const Ship = require('./battleship');

class Gameboard {
    // create a board
    constructor() {
        // the board is represented by a 10x10 2-dimensional array
        // 0s are empty spaces, ship spaces contain a reference to the ship occupying that space
        this.clear();
    }

    // sets the board to all 0s and sets variables to starting values
    clear() {
        this._board = [];
        for (let i = 0; i < 10; i++) {
            this._board[i] = [];
            for (let j = 0; j < 10; j++) {
                this._board[i][j] = 0;
            }
        }
        this._attacks = [];
        this._ships = 0;
        this._sunkenShips = 0;
    }

    // get the array representation of the board
    // @return the 2d array representation of the board
    get board() {
        return this._board;
    }

    // get a list of coordinates that have been attacked
    // @return an array of coordinates previously attacked
    get attacks() {
        return this._attacks;
    }

    // places a ship on the board, filling the coordinates with a number representing the length of the ship
    // @param startCoordinate the starting coordinate of the first point of the ship being placed
    // @param endCoordinate the ending coordinate of the last point of the ship being placed
    // @param length the length of the ship being placed
    // @return true if placeement is successful
    // @return false if placement is unsuccessful
    placeShip(startCoordinate, endCoordinate, length) {
        if (
            this.checkShipCoordinateValidity(
                startCoordinate,
                endCoordinate,
                length
            )
        ) {
            // create the new ship object to be placed
            const ship = new Ship(length);

            // place the ship, fill the coordinates with
            // the reference to the ship object
            if (startCoordinate[0] === endCoordinate[0]) {
                // horizontal placement
                const i = startCoordinate[0];
                const jStart = Math.min(startCoordinate[1], endCoordinate[1]);
                const jEnd = Math.max(startCoordinate[1], endCoordinate[1]);
                // console.log('horizontal placement', jStart, jEnd);
                for (let j = jStart; j <= jEnd; j++) {
                    this._board[i][j] = ship;
                }
            } else if (startCoordinate[1] === endCoordinate[1]) {
                // vertical placement
                const j = startCoordinate[1];
                const iStart = Math.min(startCoordinate[0], endCoordinate[0]);
                const iEnd = Math.max(startCoordinate[0], endCoordinate[0]);
                // console.log('vertical placement', iStart, iEnd);
                for (let i = iStart; i <= iEnd; i++) {
                    this._board[i][j] = ship;
                }
            }
            // placement successful
            this._ships++;
            return true;
        } else {
            // this isn't a valid path for a ship,
            return false;
        }
    }

    // check if the coordinates are on the board, and match the length of the ship
    // @param startCoordinate the starting coordinate of the first point of the ship being placed
    // @param endCoordinate the ending coordinate of the last point of the ship being placed
    // @param length the length of the ship being placed
    // @return true if the ship can be placed on those coordinates
    // @return false if the ship cannot be placed on those coordinates
    checkShipCoordinateValidity(startCoordinate, endCoordinate, length) {
        // check to ensure coordinates are within board bounds
        if (
            startCoordinate[0] < 0 ||
            startCoordinate[0] >= 10 ||
            startCoordinate[1] < 0 ||
            startCoordinate[1] >= 10 ||
            endCoordinate[0] < 0 ||
            endCoordinate[0] >= 10 ||
            endCoordinate[1] < 0 ||
            endCoordinate[1] >= 10
        ) {
            return false;
        }

        // check to ensure that the ship is only placed horizontally or vertically
        // we can tell this by checking if either the x or y coordinates of the start or end both don't match
        // since if one matches, then we must either be in the same row, or column
        if (
            startCoordinate[0] !== endCoordinate[0] &&
            startCoordinate[1] !== endCoordinate[1]
        ) {
            return false;
        }

        // now just test if the length matches the distance between the coordinates
        if (startCoordinate[0] === endCoordinate[0]) {
            if (
                Math.max(startCoordinate[1], endCoordinate[1]) -
                    Math.min(startCoordinate[1], endCoordinate[1]) +
                    1 !==
                length
            ) {
                return false;
            }
        } else if (startCoordinate[1] === endCoordinate[1]) {
            if (
                Math.max(startCoordinate[0], endCoordinate[0]) -
                    Math.min(startCoordinate[0], endCoordinate[0]) +
                    1 !==
                length
            ) {
                return false;
            }
        }

        // if the coordinates are valid, we next have to check to make sure the ship
        // doesn't overlap with pre-existing ships
        if (startCoordinate[0] === endCoordinate[0]) {
            // horizontal placement
            const i = startCoordinate[0];
            const jStart = Math.min(startCoordinate[1], endCoordinate[1]);
            const jEnd = Math.max(startCoordinate[1], endCoordinate[1]);
            // console.log('horizontal placement', jStart, jEnd);
            for (let j = jStart; j <= jEnd; j++) {
                if (this._board[i][j] !== 0) {
                    return false;
                }
            }
        } else if (startCoordinate[1] === endCoordinate[1]) {
            // vertical placement
            const j = startCoordinate[1];
            const iStart = Math.min(startCoordinate[0], endCoordinate[0]);
            const iEnd = Math.max(startCoordinate[0], endCoordinate[0]);
            // console.log('vertical placement', iStart, iEnd);
            for (let i = iStart; i <= iEnd; i++) {
                if (this._board[i][j] !== 0) {
                    return false;
                }
            }
        }

        // at this point, the move has been proven valid
        return true;
    }

    // receives and processes an attack
    // @param coordinate
    // @return true if attack hits an unattacked ship square
    // @return false if attack misses or hits an already attacked ship square
    receiveAttack(coordinate) {
        const i = coordinate[0];
        const j = coordinate[1];

        // return false for moves off the game board
        if (i < 0 || i >= 10 || j < 0 || j >= 10) {
            return false;
            // don't worry about storing them since they won't be displayed
        }

        // if it is a valid move, then we can check if it was a previously attacked square
        if (
            JSON.stringify(this._attacks).includes(JSON.stringify(coordinate))
        ) {
            // if so, return false
            return false;
        }

        // if it is a valid move to an untouched square, check to see if it hit a ship
        if (this._board[i][j] !== 0) {
            // if it's not 0, then we hit a ship
            // send the hit message to the Ship
            this._board[i][j].hit();
            // record the attack
            this._attacks.push(coordinate);

            // check to see if the ship is sunk
            if (this._board[i][j].isSunk()) {
                // if so, increment the sunkenShips variable
                this._sunkenShips++;
            }

            // and return true
            return true;
        } else {
            // if it is 0, then no ships were harmed
            // record the coordinate in the attacks array
            this._attacks.push(coordinate);
            // and return false
            return false;
        }
    }

    // find if all ships on the gameboard are sunk
    // @returns true if all ships in play have been sunk
    // @returns false if not all ships in play have been sunk
    allShipsSunk() {
        if (this._sunkenShips >= this._ships) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Gameboard;
