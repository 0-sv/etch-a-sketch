const l = w = 4;

document.body = document.createElement('body');
const body = document.querySelector('body');

const container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);

const createField = (l, w, container) => {
    for (let i = 0; i < l * w; ++i) {
        let node = document.createElement('div');
        node.classList.add('square');
        container.appendChild(node); 
    }
}

createField(l, w, container);

const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('mouseover', (event) => {
        event.target.style.background = '#000';
        setTimeout(function() {
            event.target.style.background = '#fff';
          }, 500);
    });
});