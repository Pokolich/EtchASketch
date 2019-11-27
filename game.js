// mouse button state, needed for painting with dragging functionality
var leftMouseButtonOnlyDown = false;
function setLeftButtonState(e) {
  leftMouseButtonOnlyDown = e.buttons === undefined 
    ? e.which === 1 
    : e.buttons === 1;
}
document.body.onmousedown = setLeftButtonState;
document.body.onmousemove = setLeftButtonState;
document.body.onmouseup = setLeftButtonState;

// create grid
let numOfRows = prompt("Enter num of cells please: ");
let numOfCells = numOfRows* numOfRows;
const grid = document.querySelector('.gameGrid');
grid.style.gridTemplateColumns = `repeat(${numOfRows}, 1fr)`;


for (i = 0; i < numOfCells; i++) {
    let ele = document.createElement("div");
    ele.classList.add("cell");
    ele.draggable = "false";
    ele.addEventListener('mousemove', paintBlack);
    grid.appendChild(ele);
}

function paintBlack(ev) {
    if (leftMouseButtonOnlyDown) {
        let cell = ev.target;
        cell.classList.add("blackBrush");
    }
}

function resetGrid() {
    while (grid.firstChild) {
        grid.firstChild.remove();
    }
}
