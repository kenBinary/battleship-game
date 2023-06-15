import battleship from "../src/assets/battleship.png";
import carrier from "../src/assets/carrier.png";
import cruiser from "../src/assets/cruiser.png";
import destroyer from "../src/assets/destroyer.png";
import submarine from "../src/assets/submarine.png";

function updateGameBoard(pGameBoard, pGameBoardType) {
    const gameBoardElement = document.querySelector(`#${pGameBoardType}`);
    pGameBoard.getGameBoard().forEach((row, index, array) => {
        let x = index;
        let m = 0;
        row.forEach((cell, index, array) => {
            // console.log(pGameBoard.getShipsPlaced()[index]);
            let y = index;
            const newCell = document.createElement("div");
            newCell.classList.add("placement-cell");
            // if (cell !== "" && m <1) {
            //     const newElement = shipTypeImage(cell);
            //     newCell.appendChild(newElement);
            //     m++;
            // }
            if (shipTypeImage(cell) && m < 1) {
                const newElement = shipTypeImage(cell);
                newCell.appendChild(newElement);
                m++;
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
            return false;
    }
}
function updateTurnDisplay(playerName) {
    const indicator = document.querySelector("#turn-indicator");
    indicator.textContent = playerName;
}
function updatePlayerNames(firstPlayer, secondPlayer) {
    const firstPlayerName = document.querySelector("#player-name");
    const secondPlayerName = document.querySelector("#computer-name");
    firstPlayerName.textContent = firstPlayer;
    secondPlayerName.textContent = secondPlayer;
}
function showWinner(winnerName) {
    alert(`${winnerName} has won the game`)
}
export { updateGameBoard, updateTurnDisplay, updatePlayerNames, showWinner }