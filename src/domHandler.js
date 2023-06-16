import battleship from "../src/assets/battleship.png";
import carrier from "../src/assets/carrier.png";
import cruiser from "../src/assets/cruiser.png";
import destroyer from "../src/assets/destroyer.png";
import submarine from "../src/assets/submarine.png";
import loadPlayGame from "./loadPlayGame";
let shipsPlaced = [];
let shipsPlaceable = ["battleship", "carrier", "cruiser", "destroyer", "submarine"];
function updateGameBoard(pGameBoard, pGameBoardType) {
    const gameBoardElement = document.querySelector(`#${pGameBoardType}`);
    pGameBoard.getGameBoard().forEach((row, index, array) => {
        let x = index;
        let m = 0;
        row.forEach((cell, index, array) => {
            let y = index;
            const newCell = document.createElement("div");
            newCell.classList.add("placement-cell");
            if (!shipsPlaced.includes(cell) && cell != "") {
                if (shipsPlaceable.includes(cell)) {
                    let orientation;
                    pGameBoard.getShipsPlaced().forEach(ship => {
                        if (ship.shipType === cell) {
                            console.log()
                            orientation = ship.getOrientation();
                        }
                    });
                    const newElement = shipTypeImage(cell);
                    newElement.classList.add(`${orientation}-ship`);
                    newCell.appendChild(newElement);
                    shipsPlaced.push(cell);
                }
                else{
                    newCell.textContent = cell;
                }
            }
            newCell.setAttribute("data-coordinate", `${x}${y}`);
            newCell.classList.add("coordinate-cell");
            gameBoardElement.appendChild(newCell);

        });
    });
}
function shipTypeImage(shipType) {
    const shipImage = new Image();
    shipImage.classList.add("placed-ship");
    switch (shipType) {
        case "battleship":
            shipImage.classList.add(shipType);
            shipImage.src = battleship;
            return shipImage;
        case "cruiser":
            shipImage.classList.add(shipType);
            shipImage.src = cruiser;
            return shipImage;
        case "submarine":
            shipImage.classList.add(shipType);
            shipImage.src = submarine;
            return shipImage;
        case "carrier":
            shipImage.classList.add(shipType);
            shipImage.src = carrier;
            return shipImage;
        case "destroyer":
            shipImage.classList.add(shipType);
            shipImage.src = destroyer;
            return shipImage;
        default:
            console.log("default")
            return false;
    }
}

function updatePlayerNames(firstPlayer, secondPlayer) {
    const firstPlayerName = document.querySelector("#player-name");
    const secondPlayerName = document.querySelector("#computer-name");
    firstPlayerName.textContent = firstPlayer;
    secondPlayerName.textContent = secondPlayer;
}
function updateTurnDisplay(playerName) {
    const indicator = document.querySelector("#turn-indicator");
    indicator.textContent = playerName;
}
function toggleGameBoard() {
    const pGameBoard = document.querySelector("#player-gameboard");
    const cGameBoard = document.querySelector("#computer-gameboard");
    pGameBoard.firstElementChild.classList.toggle("hidden");
    cGameBoard.firstElementChild.classList.toggle("hidden");
}
function showWinner(winnerName) {
    alert(`${winnerName} has won the game`)
}
export { updateGameBoard, updateTurnDisplay, updatePlayerNames, showWinner, toggleGameBoard }