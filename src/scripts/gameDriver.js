import Player from './player.js';
import Gameboard from './gameboard.js';
import Ship from './battleship.js';
import * as DOMController from './DOMController';

// this value allows us to keep track of the turn
let playerTurn = false;

const placePlayerShips = () => {
    /* const shipLengths = [2, 3, 4, 4, 5];

  const currentLength = shipLengths.shift();

  while (shipLengths.length > 0) {
      DOMController.updateTextOutput(
          `Click the start coordinate for a ship of length ${currentLength}`
      );
  }
  */

    // prompt player to place ships
    // 1 two space, 1 three space, 2 four space, and 1 five space

    // for now this is prepopulated
    player.gameboard.placeShip([3, 1], [4, 1], 2);
    player.gameboard.placeShip([0, 0], [0, 2], 3);
    player.gameboard.placeShip([6, 2], [6, 5], 4);
    player.gameboard.placeShip([6, 8], [9, 8], 4);
    player.gameboard.placeShip([2, 8], [2, 4], 5);

    // once the board is filled up, render the player board by sending the 2d array representation of the board and the attacks array
    DOMController.renderPlayerBoardShips(player.gameboard.board);
};

const placeOpponentShips = () => {
    /* const shipLengths = [2, 3, 3, 4, 5];

  while (shipLengths.length > 0) {
      const currentLength = shipLengths.shift();
      DOMController.updateTextOutput('');
  }
  */

    // place opponent ships randomly
    opponent.gameboard.placeShip([3, 1], [4, 1], 2);
    opponent.gameboard.placeShip([0, 0], [0, 2], 3);
    opponent.gameboard.placeShip([6, 2], [6, 5], 4);
    opponent.gameboard.placeShip([6, 8], [9, 8], 4);
    opponent.gameboard.placeShip([2, 8], [2, 4], 5);
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
                `Player won! Restarting game in ${time--} seconds`
            );
            if (time < 0) {
                clearInterval(interval);
                startGame();
            }
        }, 1000);
    } else {
        const interval = setInterval(() => {
            DOMController.updateTextOutput(
                `Player won! Restarting game in ${time--} seconds`
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

startGame();
