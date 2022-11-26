let length = 16; // How many cells should be on one side of the square grid.
let container = document.getElementById("grid"); // Make grid container variable
let totalCells = 0;

function generateGrid (length) {
    presentColumn = 1;
    presentRow = 1;
    targetColumns = length;
    targetRows = length;
    totalCells = targetColumns * targetRows;
    for (i = 1; i <= totalCells; i++) {
        let cell = document.createElement("div");   // Make a cell div
        cell.style.gridRow = presentRow;            // Assign that cell's place in the grid
        cell.style.gridColumn = presentColumn;
        cell.id = "cell #" + i;
        cell.classList.add('cell');                 // Assign the cell it's baseline class
        presentColumn += 1;
        if (presentColumn == (targetColumns + 1)) {
           presentRow += 1;
           presentColumn = 1;
        }
        container.appendChild(cell.cloneNode());
    }
    let cells = document.getElementsByClassName('cell'); // Add traced class when hovered over
    for (const cell of cells) {
        cell.addEventListener('mouseover', function trace() {
        cell.classList.add("traced");
        });
    };
    return totalCells;
}

function deleteGrid(totalCells) {
    let container = document.getElementById("grid");
    for (i = 1; i <= totalCells; i++) {
    let cell = document.getElementById("cell #" + i);
    container.removeChild(cell);
    }
}

function resetGrid(length, totalCells) {
    deleteGrid(totalCells);                 // Remove previous cells
    generateGrid(length);                   // Generate new grid
}

generateGrid(length); // Make first grid

let cells = document.getElementsByClassName('cell');
for (const cell of cells) {
    cell.addEventListener('pointerenter', function trace() {
        cell.classList.add("traced");
    });
};

/* Changing grid size */

changeButton = document.getElementById("change-button");
changeButton.addEventListener('click', function changeSize() {
    length = Number(prompt("Enter new square grid side length (1 to 100 accepted).", ));
    if (length < 1 || length > 100) {
        length = prompt("Please enter a valid size (1 to 100).", "16");
        if (length < 1 || length > 100) {
            changeSize();
        } else {
            resetGrid(length);
        }
    } else {    
        resetGrid(length, totalCells);                  
    }
});

    // https://code-boxx.com/create-grid-javascript/
    // https://stackoverflow.com/questions/71607162/using-javascript-with-css-grid
    // https://stackoverflow.com/questions/51433918/filling-css-grid-with-javascript
    // https://www.bitdegree.org/learn/javascript-prompt
    // https://stackoverflow.com/questions/27914671/assign-ids-to-elements-using-javascript