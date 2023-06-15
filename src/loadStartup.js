import html from "./startup.html";
import "./startup-style.scss";
import loadPlayGame from "./loadPlayGame";
import newGame from "./gameHandler";
function loadStartup() {
    let currentDraggedItem;
    const container = document.querySelector(".container");
    container.classList.toggle("game-setup");
    container.innerHTML = html;
    const ships = document.querySelectorAll(".ship");
    let isHorizontal = false;
    let shipObjects = {};
    ships.forEach(element => {
        element.addEventListener('dragstart', (e) => {
            currentDraggedItem = e.target.id;
            e.dataTransfer.setData("text/plain", e.target.id);
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
            });
            newCell.addEventListener('dragleave', (e) => {
                e.preventDefault();
                let coordinate = e.target.getAttribute("data-placement-coordinate");
                let shipLength = getShipLength(currentDraggedItem);
                shipPlaceHolder(coordinate, isHorizontal, shipLength);
            });
            newCell.addEventListener('dragover', (e) => {
                e.preventDefault();
                e.dataTransfer.dropEffect = "move";
            });
            newCell.addEventListener("drop", (e) => {
                e.preventDefault();
                e.dataTransfer.dropEffect = "move";
                let coordinate = e.target.getAttribute("data-placement-coordinate");
                let shipLength = getShipLength(currentDraggedItem);
                if (shipPlaceHolder(coordinate, isHorizontal, shipLength)) {
                    const shipType = e.dataTransfer.getData("text/plain");
                    shipObjects[shipType] = { axis: coordinate, length: shipLength, alignment: (isHorizontal) ? "horizontal" : "vertical", shipType: shipType };
                    const shipElement = document.querySelector(`#${shipType}`);
                    const newElement = document.createElement("img");
                    newElement.src = shipElement.src;
                    if (!isHorizontal) {
                        newElement.classList.toggle("vertical");
                    }
                    newElement.classList.add("placed-element");
                    newElement.classList.add(shipType);
                    e.target.appendChild(newElement);
                    e.target.classList.toggle("unclickable");
                    shipElement.remove();
                }
            });
            newCell.setAttribute("data-placement-coordinate", `${i}${x}`);
            placementGrid.appendChild(newCell);
        }
    }
    const rotate = document.querySelector(".rotate-ship");
    rotate.addEventListener('click', () => {
        isHorizontal = rotateShips();
    });
    // start game
    // -get player name
    // get coordinate and alignment of placed ships
    // initialize new game with these data
    const startGame = document.querySelector(".start-game");
    startGame.addEventListener('click', () => {
        const name = document.querySelector("#name-input");
        if (name.value === "") {
            alert("Enter a Name");
        }
        else {
            new Promise(function (resolve) {
                container.innerHTML = "";
                resolve("done");
            }).then(() => {
                container.classList.toggle("game-setup");
                loadPlayGame();
            })
                .then(() => {
                    console.log(shipObjects)
                    newGame(name.value, shipObjects);
                });
        }
    });
}
function shipPlaceHolder(coordinate, isHorizontal, shipLength) {
    if (isHorizontal) {
        let initialY = parseInt(coordinate.charAt(1));
        let x = coordinate.charAt(0);
        let y = parseInt(coordinate.charAt(1));
        let invalidCoordinates = 0;
        for (let i = 0; i < shipLength; i++) {
            if (y <= 9) {
                const cell = document.querySelector(`[data-placement-coordinate="${x}${y}"]`);
                cell.classList.toggle("ship-placeholder");
                y++;
            }
            else {
                invalidCoordinates++;
            }
        }
        if (invalidCoordinates > 0) {
            for (let i = 0; i < (shipLength - invalidCoordinates); i++) {
                const cell = document.querySelector(`[data-placement-coordinate="${x}${initialY}"]`);
                cell.classList.toggle("ship-placeholder");
                cell.classList.toggle("invalid-ship-placeholder");
                initialY++;
            }
            return false;
        }
        else {
            return true
        }
    }
    else {
        let initialX = parseInt(coordinate.charAt(0));
        let x = parseInt(coordinate.charAt(0));
        let y = coordinate.charAt(1);
        let invalidCoordinates = 0;
        for (let i = 0; i < shipLength; i++) {
            if (x <= 9) {
                const cell = document.querySelector(`[data-placement-coordinate="${x}${y}"]`);
                cell.classList.toggle("ship-placeholder");
                x++;
            }
            else {
                invalidCoordinates++;
            }
        }
        if (invalidCoordinates > 0) {
            for (let i = 0; i < (shipLength - invalidCoordinates); i++) {
                const cell = document.querySelector(`[data-placement-coordinate="${initialX}${y}"]`);
                cell.classList.toggle("ship-placeholder");
                cell.classList.toggle("invalid-ship-placeholder");
                initialX++;
            }
            return false;
        }
        else {
            return true
        }
    }
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