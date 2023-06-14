function updateGameBoard(pGameBoard, pGameBoardType) {
    const gameBoardElement = document.querySelector(`#${pGameBoardType}`);
    pGameBoard.getGameBoard().forEach((row, index, array) => {
        let x = index;
        row.forEach((cell, index, array) => {
            let y = index;
            const newCell = document.createElement("div");
            newCell.setAttribute("data-coordinate", `${x}${y}`);
            newCell.textContent = cell;
            newCell.classList.add("coordinate-cell");
            gameBoardElement.appendChild(newCell);
        });
    });
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