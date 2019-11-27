let numOfRows = prompt("Enter num of cells please: ");
let numOfCells = numOfRows* numOfRows;
const grid = document.querySelector('.gameGrid');
grid.style.gridTemplateColumns = `repeat(${numOfRows}, 1fr)`;

for (i = 0; i < numOfCells; i++) {
    let ele = document.createElement("div");
    ele.classList.add("cell");
    grid.appendChild(ele);
}   
