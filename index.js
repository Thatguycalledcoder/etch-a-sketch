const body = document.querySelector("body");

// Create redraw button
const redrawDiv = document.createElement("div");
const redrawBtn = document.createElement("button");

redrawDiv.className = "redraw-btn";
redrawBtn.id = "redraw";
redrawBtn.innerText = "Redraw";

// Get user input
const getUserInput = function() {
    const numRows = parseInt(prompt("Enter the number of rows to display for the grid"));
    const numColumns = parseInt(prompt("Enter the number of columns to display for the grid"));
    return [numRows, numColumns];
}

// Create grid from user input with flex: start with 4x4 grid
const createGrid = function(numRows = 16, numColumns = 16) {
    const doc = new DocumentFragment();
    doc.appendChild(redrawDiv); // add redraw button to document fragment

    for (let colIndex = 0; colIndex < numRows; colIndex++) {
        const columnDiv = document.createElement("div");
        columnDiv.classList.add("grid-col");
        for (let rowIndex = 0; rowIndex < numColumns; rowIndex++) {
            const rowDiv = document.createElement("div");
            rowDiv.classList.add("grid-row");
            columnDiv.appendChild(rowDiv);
        }
        doc.appendChild(columnDiv);
    }

    body.appendChild(doc); // add document fragment to DOM
}

const drawGrid = function() {
    body.innerText = "";
    let userInput = getUserInput();
    let rows = userInput[0];
    let columns = userInput[1];
    createGrid(rows, columns);
}

redrawBtn.addEventListener("click", drawGrid);
redrawDiv.appendChild(redrawBtn);

drawGrid();