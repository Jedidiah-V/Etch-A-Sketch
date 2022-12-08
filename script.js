/* Changing grid size */

let slider = document.getElementById("changeSize");
let output = document.getElementById("sizeDisplay");
output.innerHTML = slider.value + " x " + slider.value;

slider.addEventListener('mouseup', function changeSize() {
    output.innerText = slider.value + " x " + slider.value;
    length = Number(slider.value);
    resetGrid(length, totalCells);
});

/* First grid */

let length = Number(slider.value); // How many cells should be on one side of the square grid.
let container = document.getElementById('grid'); // Make grid container variable
let totalCells = 0;

function generateGrid (length) {
    presentColumn = 1;
    presentRow = 1;
    totalCells = length * length;
    for (i = 1; i <= totalCells; i++) {
        let cell = document.createElement("div");   // Make a cell div
        cell.style.gridRow = presentRow;            // Assign that cell's place in the grid
        cell.style.gridColumn = presentColumn;
        cell.id = "cell #" + i;
        cell.classList.add('cell');                 // Assign the cell it's baseline class
        // Rounding square grid corners 
        // Inspired by Silinde87's Top Etch-A-Sketch
        // Within his "buildGrid" function
        // https://github.com/Silinde87/top-etch-a-sketch/blob/main/script.js
        if (i==1) {
            // If the grid has only one cell
            if (length == 1) {
                cell.style.borderRadius = "30px"
            }
            cell.style.borderTopLeftRadius = "30px";
        }else if(i==length){
            cell.style.borderTopRightRadius = "30px";
        }else if(i==length*length-length+1){
            cell.style.borderBottomLeftRadius = "30px";
        }else if(i==length*length){
            cell.style.borderBottomRightRadius = "30px";
        }
        
        presentColumn += 1;
        if (presentColumn == (length + 1)) {
           presentRow += 1;
           presentColumn = 1;
        }
        container.appendChild(cell.cloneNode());

    }
    return totalCells;
}

generateGrid(length); // Make first grid

/* Tracing behavior */

// Inspired by Scotty's Retro-Sketch
// His "listen" function
// https://github.com/bscottnz/esketch

function addListeners() {  
    cells = document.querySelectorAll('.cell')
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('mousedown', trace);  
        // Trace if both the mouse has entered and it is depressed.
        cells[i].addEventListener('mouseenter', traceHover);
    }
}
function trace(e) { 
    e.target.style.backgroundColor = 'black';
}

function traceHover(e) {
    if (e.buttons > 0) { // If any mouse button is pressed.
        e.target.style.backgroundColor = 'black';
    }
}

addListeners();

/* Resetting the grid */

function deleteGrid(totalCells) {
    let container = document.getElementById("grid");
    for (i = 1; i <= totalCells; i++) {
    let cell = document.getElementById("cell #" + i);
    container.removeChild(cell);
    }
}

function resetGrid(length, totalCells) {
    deleteGrid(totalCells);  
    generateGrid(length);                   
    addListeners();
}

// References
    // https://code-boxx.com/create-grid-javascript/
    // https://stackoverflow.com/questions/71607162/using-javascript-with-css-grid
    // https://stackoverflow.com/questions/51433918/filling-css-grid-with-javascript
    // https://www.bitdegree.org/learn/javascript-prompt
    // https://stackoverflow.com/questions/27914671/assign-ids-to-elements-using-javascript