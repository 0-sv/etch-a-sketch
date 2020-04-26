const button = document.querySelector('button');
button.addEventListener('click', (event) => {
    const l = prompt("Please enter the size (e.g. 64 for 64x64).");

    let newContainer = document.createElement('div');
    newContainer.setAttribute('id', 'square-container');

    const body = document.querySelector('body');
    const oldContainer = document.getElementById('square-container');
    body.replaceChild(newContainer, oldContainer);

    createField(l, l, newContainer);
    newContainer.style.gridTemplateColumns = "repeat(" + l + ", 50px)";

    createDynamicSquares();
});