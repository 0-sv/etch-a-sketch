const l = w = 4;

const createField = (l, w, container) => {
    for (let i = 0; i < l * w; ++i) {
        let node = document.createElement('div');
        node.classList.add('square');
        container.appendChild(node); 
    }
}

createField(l, w, document.getElementById('square-container'));

const squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('mouseover', (event) => {
        event.target.style.background = '#000';
        setTimeout(function() {
            event.target.style.background = '#fff';
          }, 500);
    });
});