import html from "./startup.html";
import "./startup-style.scss";
function loadStartup() {
    let currentDraggedItem;
    const container = document.querySelector(".container");
    container.innerHTML = html;
    const ships = document.querySelectorAll(".ship");
    let isHorizontal = false;
    // const x = document.querySelector("data-placement-coordinate=\"55\"");

    ships.forEach(element => {
        element.addEventListener('dragstart', (e) => {
            currentDraggedItem = e.target.id;
            e.dataTransfer.setData("text/plain", e.target.id);
            const image = document.querySelector(`#${e.target.id}`);
            e.dataTransfer.setDragImage(image, 0, 0);
        });
    });
    const placementGrid = document.querySelector(".placement-grid");
    for (let i = 0; i < 10; i++) {
        for (let x = 0; x < 10; x++) {
            const newCell = document.createElement("div");
            newCell.classList.add("placement-cell");
            newCell.addEventListener('dragenter', (e) => {
                e.preventDefault();
                let coordinate = e.target.getAttribute("data-placement-coordinate");
                let shipLength = getShipLength(currentDraggedItem);
                shipPlaceHolder(coordinate, isHorizontal, shipLength);
                // console.log("enter")
            });
            newCell.addEventListener('dragleave', (e) => {
                e.preventDefault();
                let coordinate = e.target.getAttribute("data-placement-coordinate");
                let shipLength = getShipLength(currentDraggedItem);
                shipPlaceHolder(coordinate, isHorizontal, shipLength);
                // console.log("leave")
            });
            newCell.addEventListener('dragover', (e) => {
                e.preventDefault();
                e.dataTransfer.dropEffect = "copy";
            });
            newCell.addEventListener("drop", (e) => {
                e.preventDefault();
                e.dataTransfer.dropEffect = "move";
                const shipType = e.dataTransfer.getData("text/plain");
                console.log(shipType)
            });
            newCell.setAttribute("data-placement-coordinate", `${i}${x}`);
            placementGrid.appendChild(newCell);
        }
    }
    // const x = document.querySelector("[data-placement-coordinate=\"55\"]");
    // console.log(x.getAttribute("data-placement-coordinate"))
    const rotate = document.querySelector(".rotate-ship");
    rotate.addEventListener('click', () => {
        isHorizontal = rotateShips();
    });

    // start game
    // -get player name
    // get coordinate and alignment of placed ships
    // initialize new game with these data

}
function shipPlaceHolder(coordinate, isHorizontal, shipLength) {
    if (isHorizontal) {
        let x = coordinate.charAt(0);
        let y = parseInt(coordinate.charAt(1));
        for (let i = 0; i < shipLength; i++) {
            const cell = document.querySelector(`[data-placement-coordinate="${x}${y}"]`);
            // cell.classList.add("ship-placeholder");
            cell.classList.toggle("ship-placeholder");
            y++;
        }
    }
    else {
        let x = parseInt(coordinate.charAt(0));
        let y = coordinate.charAt(1);
        for (let i = 0; i < shipLength; i++) {
            const cell = document.querySelector(`[data-placement-coordinate="${x}${y}"]`);
            cell.classList.toggle("ship-placeholder");
            // cell.classList.add("ship-placeholder");
            x++;
        }
    }
}
function removeShipPlaceholder() {
    const placementCells = document.querySelectorAll(".placement-cell");
    placementCells.forEach(cell => {
        if (cell.classList.contains("ship-placeholder")) {
            cell.classList.toggle("ship-placeholder");
        }
    });
}
function getShipLength(shipType) {
    switch (shipType) {
        case "battleship":
            return 4;
        case "cruiser":
        case "submarine":
            return 3;
        case "carrier":
            return 5
        case "destroyer":
            return 2;
    }
}
function rotateShips() {
    const ships = document.querySelectorAll(".ship");
    let isHorizontal = false;
    ships.forEach(element => {
        isHorizontal = element.classList.toggle("horizontal");
    });
    return isHorizontal;
}
export default loadStartup;