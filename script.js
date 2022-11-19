/* Generate the grid */

let container = document.getElementById("grid"); // Make grid container variable
let presentColumn = 1;
let presentRow = 1;
let targetColumn = 16;
let targetRow = targetColumn;
let totalCells = targetColumn * targetRow;
// let gridColumns = "repeat(" + targetColumn + ", auto)"; // Not necessary?
// let gridRows = "repeat(" + targetRow + ", auto)";

// container.setAttribute("grid-template-columns", gridColumns);
// container.setAttribute("grid-template-rows", gridRows);

for (i = 1; i <= totalCells; i++) {
    let cell = document.createElement("div"); // Make a cell div
    cell.style.gridRow = presentRow; // Assign that cell's place in the grid
    cell.style.gridColumn = presentColumn;
    cell.classList.add('cell'); // Assign the cell it's baseline class
    presentColumn += 1;
    if (presentColumn == (targetColumn + 1)) {
        presentRow += 1;
        presentColumn = 1;
    }
    container.appendChild(cell.cloneNode());
}

/* Event Listener */

const cells = document.getElementsByClassName('cell');
for (const cell of cells) {
    cell.addEventListener('pointerenter', function trace(event) {
        cell.classList.add("traced");
    });
};







    // https://code-boxx.com/create-grid-javascript/
    // https://stackoverflow.com/questions/71607162/using-javascript-with-css-grid


//    cell.dataset.someDataStuffs = '0';
//    cell.classList.add('default-cell','someOtherClassName');

    
    