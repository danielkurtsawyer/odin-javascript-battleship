import '../styles/style.css';

const loadPage = () => {
    // create main sections
    const header = document.createElement('header');
    const main = document.createElement('div');
    main.classList.add('main-wrapper');
    const footer = document.createElement('footer');

    // add to body
    document.body.appendChild(header);
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

    // add divs for the boards
    const playerBoard = document.createElement('div');
    playerBoard.classList.add('player-board');

    const opponentBoard = document.createElement('div');
    opponentBoard.classList.add('opponent-board');

    // append the playerboard to the left div
    left.appendChild(playerBoard);

    // append the opponentboard to the right div
    right.appendChild(opponentBoard);
};

export { loadPage };
