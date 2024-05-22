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
};

export { loadPage };
