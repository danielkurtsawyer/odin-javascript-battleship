class Gameboard {
    // create a board
    constructor() {
        // the board is represented by a 10x10 2-dimensional array
        // 0s are empty spaces, 1 are ship spaces
        this.clear();
    }

    // get the array representation of the board
    // @return the 2d array representation of the board
    get board() {
        return this._board;
    }

    // sets the board to all 0s
    clear() {
        this._board = [];
        for (let i = 0; i < 10; i++) {
            this._board[i] = [];
            for (let j = 0; j < 10; j++) {
                this._board[i][j] = 0;
            }
        }
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
            // place the ship, fill the coordinates with
            // the ship length to distinguish different types of ships
            if (startCoordinate[0] === endCoordinate[0]) {
                // horizontal placement
                const i = startCoordinate[0];
                const jStart = Math.min(startCoordinate[1], endCoordinate[1]);
                const jEnd = Math.max(startCoordinate[1], endCoordinate[1]);
                // console.log('horizontal placement', jStart, jEnd);
                for (let j = jStart; j <= jEnd; j++) {
                    this._board[i][j] = length;
                }
            } else if (startCoordinate[1] === endCoordinate[1]) {
                // vertical placement
                const j = startCoordinate[1];
                const iStart = Math.min(startCoordinate[0], endCoordinate[0]);
                const iEnd = Math.max(startCoordinate[0], endCoordinate[0]);
                // console.log('vertical placement', iStart, iEnd);
                for (let i = iStart; i <= iEnd; i++) {
                    this._board[i][j] = length;
                }
            }
            // placement successful
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
}

module.exports = Gameboard;
