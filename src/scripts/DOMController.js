import '../styles/style.css';

const loadPage = () => {
    // create main sections
    const header = document.createElement('header');
    const main = document.createElement('div');
    main.classList.add('main-wrapper');
    const footer = document.createElement('footer');

    // add a div to display text to the user
    const textOutputDiv = document.createElement('div');
    textOutputDiv.classList.add('text-output');
    textOutputDiv.textContent = 'Welcome to Battleship';

    // add to body
    document.body.appendChild(header);
    document.body.appendChild(textOutputDiv);
    document.body.appendChild(main);
    document.body.appendChild(footer);

    // add header text
    header.textContent = 'BATTLESHIP';

    // add hyperlink to GitHub page
    const gitHubLink = document.createElement('a');
    gitHubLink.textContent = 'Github';
    gitHubLink.href =
        'https://github.com/danielkurtsawyer/odin-javascript-battleship';
    gitHubLink.target = '_blank';
    gitHubLink.rel = 'noopener noreferrer';

    // append link to footer
    footer.appendChild(gitHubLink);

    // make left and right divs within the main-wrapper
    const left = document.createElement('div');
    left.classList.add('main-wrapper-left');

    const right = document.createElement('div');
    right.classList.add('main-wrapper-right');

    // append to the main-wrapper
    main.appendChild(left);
    main.appendChild(right);

    // add divs for the labels
    const playerBoardLabel = document.createElement('div');
    playerBoardLabel.textContent = 'Player Board';
    const opponentBoardLabel = document.createElement('div');
    opponentBoardLabel.textContent = 'Opponent Board';

    // append the label divs to left & right divs
    left.appendChild(playerBoardLabel);
    right.appendChild(opponentBoardLabel);

    // add divs for the boards
    const playerBoard = document.createElement('div');
    playerBoard.classList.add('player-board');

    const opponentBoard = document.createElement('div');
    opponentBoard.classList.add('opponent-board');

    // append the playerboard to the left div
    left.appendChild(playerBoard);

    // append the opponentboard to the right div
    right.appendChild(opponentBoard);

    // divide the board into individual squares to form a 10x10 grid

    // remember the numbering convention
    // coordinate - [i, j]
    // store this in a custom css attribute for use
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const playerSquare = document.createElement('div');
            const opponentSquare = document.createElement('div');

            // the i and j values are swapped
            // rows going down will be i, and colums going right will be j
            // since grid fills left to right before moving down, we swap to
            // ensure the i and j values are consistent with the implementation
            playerSquare.setAttribute('i', j);
            playerSquare.setAttribute('j', i);
            opponentSquare.setAttribute('i', j);
            opponentSquare.setAttribute('j', i);

            // append each div to the respective board
            playerBoard.appendChild(playerSquare);
            opponentBoard.appendChild(opponentSquare);
        }
    }
};

const renderPlayerBoardShips = (playerBoardArray) => {
    // render ships
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (playerBoardArray[i][j] !== 0) {
                const shipSquare = document.querySelector(
                    `.player-board div[i="${i}"][j="${j}"]`
                );
                shipSquare.classList.add('ship');
            }
        }
    }
};

const renderPlayerBoardAttacks = (playerBoardArray, attacks) => {
    // render attacks
    attacks.forEach((coordinatePair) => {
        const i = coordinatePair[0];
        const j = coordinatePair[1];
        const attackedSquare = document.querySelector(
            `.player-board div[i="${i}"][j="${j}"]`
        );
        // if the square isn't a 0, it's a ship
        if (playerBoardArray[i][j] !== 0) {
            // fill the space with an X to mark a hit
            attackedSquare.textContent = 'X';
            attackedSquare.classList.add('player-hit');
        } else {
            // if it is, then its an empty space
            // fill the space with an O to mark a miss
            attackedSquare.textContent = 'O';
            attackedSquare.classList.add('player-miss');
        }
    });
};

const renderOpponentBoard = (opponentBoardArray, attacks) => {
    attacks.forEach((coordinatePair) => {
        const i = coordinatePair[0];
        const j = coordinatePair[1];
        const attackedSquare = document.querySelector(
            `.opponent-board div[i="${i}"][j="${j}"]`
        );
        // if the square isn't a 0, it's a ship
        if (opponentBoardArray[i][j] !== 0) {
            // fill the space with an X to mark a hit
            attackedSquare.textContent = 'X';
            attackedSquare.classList.add('opponent-hit');
        } else {
            // if it is, then its an empty space
            // fill the space with an O to mark a miss
            attackedSquare.textContent = 'O';
            attackedSquare.classList.add('opponent-miss');
        }
    });
};

export {
    loadPage,
    renderPlayerBoardShips,
    renderPlayerBoardAttacks,
    renderOpponentBoard,
};
