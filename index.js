const body = document.querySelector("body");

// Create redraw button
const redrawDiv = document.createElement("div");
const redrawBtn = document.createElement("button");

redrawDiv.className = "redraw-btn";
redrawBtn.id = "redraw";
redrawBtn.innerText = "Redraw";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// Get user input
const getUserInput = function() {
    let numRows = 0;
    do {
        numRows = parseInt(prompt("Enter the number of rows to display for the grid. (Note: Number of rows cannot exceed 100!)"));
    } while (numRows > 100);

    let numColumns = 0;
    do {
        numColumns = parseInt(prompt("Enter the number of columns to display for the grid. (Note: Number of columns cannot exceed 100!)"));
    } while (numColumns > 100);
    
    return [numRows, numColumns];
}

// Create grid from user input with flex: start with 4x4 grid
const createGrid = function(numRows, numColumns) {
    const doc = new DocumentFragment();
    doc.appendChild(redrawDiv); // add redraw button to document fragment

    for (let colIndex = 0; colIndex < numRows; colIndex++) {
        const columnDiv = document.createElement("div");
        columnDiv.classList.add("grid-col");
        for (let rowIndex = 0; rowIndex < numColumns; rowIndex++) {
            const rowDiv = document.createElement("div");
            rowDiv.classList.add("grid-row");
            rowDiv.addEventListener("mouseenter", () => {
                rowDiv.style["background-color"] = colors[Math.floor(Math.random() * colors.length)];
            })
            rowDiv.addEventListener("mouseleave", () => {
                rowDiv.style["background-color"] = "transparent";
            })
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