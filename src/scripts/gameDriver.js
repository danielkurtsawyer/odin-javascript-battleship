import Player from './player.js';
import Gameboard from './gameboard.js';
import Ship from './battleship.js';
import * as DOMController from './DOMController';

// this value allows us to keep track of the turn
let playerTurn = false;

const placePlayerShips = () => {
    DOMController.updateTextOutput(`Planning Phase`);

    // prompt player to place ships
    // 1 two space, 1 three space, 2 four space, and 1 five space

    const shipLengths = [2, 3, 4, 4, 5];

    let currentLength = shipLengths.shift();

    // variable to determine whether all required ships have been placed
    let allShipsPlaced = false;

    while (!allShipsPlaced) {
        const startCoordinateString = prompt(
            'Enter the start coordinate for a ship of length ' +
                currentLength +
                ' in the following format: (column, row): \n Columns are numbered 0-9 from left to right, and rows are numbered 0-9 from top to bottom'
        );

        if (!/\([0-9], *[0-9]\)/.test(startCoordinateString)) {
            alert(
                'Invalid input. Coordinate must be in the form (column, row). Please try again.'
            );
            // for invalid inputs return to the beginning
            continue;
        }

        // input is valid
        // let's extract the i and j values
        let match = startCoordinateString.match(/\(([0-9], *[0-9])\)/);
        const iStart = +match[1][0];
        const jStart = +match[1][2];
        const startCoordinate = [iStart, jStart];

        console.log('Start coordinate: ' + startCoordinate);

        // now let's prompt for an end coordinate
        let validEndCoordinate = false;

        let endCoordinateString = null;

        while (!validEndCoordinate) {
            endCoordinateString = prompt(
                'Enter the end coordinate for a ship of length ' +
                    currentLength +
                    ' in the following format: (column, row): \n Columns are numbered 0-9 from left to right, and rows are numbered 0-9 from top to bottom'
            );
            if (!/\([0-9], *[0-9]\)/.test(endCoordinateString)) {
                alert(
                    'Invalid input. Coordinate must be in the form (column, row). Please try again.'
                );
                // this will return to the start of the nested while loop
                // since we don't want to have to return all the way to the top of the while loop
            } else {
                // valid input, update validEndCoordinate value
                validEndCoordinate = true;
            }
        }
        // input is valid
        // let's extract the i and j values
        match = endCoordinateString.match(/\(([0-9], *[0-9])\)/);
        const iEnd = +match[1][0];
        const jEnd = +match[1][2];
        const endCoordinate = [iEnd, jEnd];

        console.log('End coordinate: ' + endCoordinate);

        if (
            player.gameboard.placeShip(
                startCoordinate,
                endCoordinate,
                currentLength
            )
        ) {
            // render the player board by sending the 2d array representation of the board and the attacks array
            DOMController.renderPlayerBoardShips(player.gameboard.board);

            // if successful, move to the next ship length
            currentLength = shipLengths.shift();
            // if the current length is now undefined, there is nothing in the shipLengths array
            // so we have placed all of the required ships
            if (currentLength === undefined) {
                // set allShipsPlaced to true so we can break out of the loop
                allShipsPlaced = true;
            }
        } else {
            // if the placement was unsuccessful, alert the user that it was an invalid placement
            alert(
                "Invalid ship placement. Check the coordinates are on the same x or y plane and don't overlap, and that each ship has a one square buffer all the way around. Also ensure that the coordinates span the correct length of the ship you are placing."
            );
            // and allow the flow to return to the beginning of the loop to try the ship placement again
        }
    }

    // once the board is filled up, render the player board by sending the 2d array representation of the board and the attacks array
    DOMController.renderPlayerBoardShips(player.gameboard.board);
};

const placeOpponentShips = () => {
    const shipLengths = [2, 3, 3, 4, 5];

    let currentLength = shipLengths.shift();

    // variable to determine whether all required ships have been placed
    let allShipsPlaced = false;

    // run while all ships haven't been placed
    while (!allShipsPlaced) {
        // place a ship of length currentLength
        // generate random start coordinate:
        let startCoordinate = [
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10),
        ];
        // generate list of possible moves using length of ship
        let endCoordinates = [];
        // left
        endCoordinates.push([
            startCoordinate[0] - (currentLength - 1),
            startCoordinate[1],
        ]);
        // right
        endCoordinates.push([
            startCoordinate[0] + (currentLength - 1),
            startCoordinate[1],
        ]);
        // up
        endCoordinates.push([
            startCoordinate[0],
            startCoordinate[1] - (currentLength - 1),
        ]);
        // down
        endCoordinates.push([
            startCoordinate[0],
            startCoordinate[1] + (currentLength - 1),
        ]);

        // filter out moves off the board
        endCoordinates = endCoordinates.filter(
            (coordinate) =>
                coordinate[0] >= 0 &&
                coordinate[0] < 10 &&
                coordinate[1] >= 0 &&
                coordinate[1] < 10
        );

        // variable to determine whether a ship has been placed
        let validMoveFound = false;
        // run while a valid placement hasn't been found and there are still move options available
        while (endCoordinates.length > 0 && validMoveFound === false) {
            let randIndex = Math.floor(Math.random() * endCoordinates.length);
            let endCoordinate = endCoordinates.splice(randIndex, 1)[0];
            if (
                opponent.gameboard.placeShip(
                    startCoordinate,
                    endCoordinate,
                    currentLength
                )
            ) {
                // if placeShip returns true, ship was placed successfully
                validMoveFound = true;
            }
        }

        if (validMoveFound) {
            // if a valid move is found, then we move on to the next length ship
            currentLength = shipLengths.shift();
            if (currentLength === undefined) {
                // if the currentLength variable is now undefined, we have placed all the ships
                // update the while loop condition to stop running the placement loop
                allShipsPlaced = true;
            }
        }
        // if a valid move wasn't found, then we go return to the top of the loop and
        // regenerate a new start coordinate to try
    }
};

const startGame = () => {
    player.gameboard.clear();
    opponent.gameboard.clear();
    DOMController.clearBoards();
    placeOpponentShips();
    placePlayerShips();
    DOMController.updateTextOutput('Player turn');
    playerTurn = true;

    // add event listeners to the opponent board squares
    const opponentSquares = document.querySelectorAll('.opponent-board div');
    opponentSquares.forEach((square) =>
        square.addEventListener('click', () =>
            triggerPlayerAttack(
                +square.getAttribute('i'),
                +square.getAttribute('j')
            )
        )
    );
};

const triggerPlayerAttack = (i, j) => {
    // only run when it is the player turn using the playerTurn variable
    // we don't want the user to just be able to click a ton of times in a row before the computer can finish its move
    if (playerTurn) {
        // send the attack to the opponent game board
        opponent.gameboard.receiveAttack([i, j]);
        // render the opponent's board to show the result of the newest attack
        DOMController.renderOpponentBoard(
            opponent.gameboard.board,
            opponent.gameboard.attacks
        );
        // change the turn tracker variable
        playerTurn = false;

        // check to see if the game is over
        if (isGameOver()) {
            // game is over
            endGame();
        } else {
            // game is not over

            // update the display text
            DOMController.updateTextOutput('Opponent turn');
            // wait 1 second before triggering the opponent attack
            setTimeout(triggerOpponentAttack, 1000);
        }
    }
};

const triggerOpponentAttack = () => {
    // create random coordinate
    let i = Math.floor(Math.random() * 10);
    let j = Math.floor(Math.random() * 10);
    // check to make sure it's valid (not in the array of previous attacks)
    while (
        JSON.stringify(opponent.gameboard.attacks).includes(
            JSON.stringify([i, j])
        )
    ) {
        // while invalid, keep creating new random coordinates
        i = Math.floor(Math.random() * 10);
        j = Math.floor(Math.random() * 10);
    }

    // once the attacks array doesn't include the coordinate, we can attack
    player.gameboard.receiveAttack([i, j]);
    // render the player board to show the result of the newest attack
    DOMController.renderPlayerBoardAttacks(
        player.gameboard.board,
        player.gameboard.attacks
    );

    // check if the game is Over
    if (isGameOver()) {
        endGame();
    } else {
        // Change display text
        DOMController.updateTextOutput('Player turn');
        // change the turn tracker variable
        playerTurn = true;
    }
};

const isGameOver = () => {
    if (player.gameboard.allShipsSunk() || opponent.gameboard.allShipsSunk()) {
        return true;
    } else {
        return false;
    }
};

const endGame = () => {
    playerTurn = false;
    if (player.gameboard.allShipsSunk()) {
        restartGame(10, false);
    } else if (opponent.gameboard.allShipsSunk()) {
        restartGame(10, true);
    }
};

const restartGame = (time, playerWon) => {
    if (playerWon) {
        const interval = setInterval(() => {
            DOMController.updateTextOutput(
                `Player won! Restarting game in ${time--} seconds...`
            );
            if (time < 0) {
                clearInterval(interval);
                startGame();
            }
        }, 1000);
    } else {
        const interval = setInterval(() => {
            DOMController.updateTextOutput(
                `Player won! Restarting game in ${time--} seconds...`
            );
            if (time < 0) {
                clearInterval(interval);
                startGame();
            }
        }, 1000);
    }
};

DOMController.loadPage();

const player = new Player();
const opponent = new Player();

DOMController.updateTextOutput('Game starting momentarily');

setTimeout(startGame, 500);
