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
const grid = document.querySelector('.gameGrid');
const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', resetGrid);
populateGrid(20);

function populateGrid(rows) {    
    let numOfCells = rows*rows;    
    grid.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;    
    
    for (i = 0; i < numOfCells; i++) {
        let ele = document.createElement("div");
        ele.classList.add("cell");
        ele.draggable = "false";
        ele.addEventListener('mousemove', paintBlack);
        grid.appendChild(ele);
    }
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
    let numOfRows = prompt("Please enter number of rows: ");
    populateGrid(numOfRows);
}
