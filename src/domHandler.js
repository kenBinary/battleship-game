function updateGameBoard(pGameBoard, pGameBoardType) {
    const gameBoardElement = document.querySelector(`#${pGameBoardType}`);
    pGameBoard.getGameBoard().forEach((row, index, array) => {
        let x = index;
        row.forEach((cell, index, array) => {
            let y = index;
            const newCell = document.createElement("div");
            newCell.setAttribute("data-coordinate", `${x}${y}`);
            newCell.textContent = cell;
            gameBoardElement.appendChild(newCell);
        });
    });
}
export { updateGameBoard }