document.body = document.createElement('body');
const body = document.querySelector('body');
const l = w = 4;

const createField = (l, w) => {
    for (let i = 0; i < l * w; ++i) {
        let node = document.createElement('div');
        node.classList.add('square')
        body.appendChild(node); 
    }
}

createField(l, w);
console.log(body);