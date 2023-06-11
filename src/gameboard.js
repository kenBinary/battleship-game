const gameBoard = () => {
    let gameBoard = [];
    function createGameBoard() {
        for (let x = 0; x < 10; x++) {
            gameBoard[x] = new Array();
            for (let y = 0; y < 10; y++) {
                gameBoard[x][y] = "";
            }
        }
    }
    createGameBoard();
    function placeShip(x, y, shipObject, orientation) {
        switch (orientation) {
            case "horizontal":
                let horOccupancy = x;
                for (let x = 0; x < shipObject.shipLength; x++) {
                    gameBoard[horOccupancy][y] = shipObject.shipType;
                    horOccupancy++;
                }
                return gameBoard[x + (shipObject.shipLength - 1)][y];
            case "vertical":
                let verOccupancy = y;
                for (let y = 0; y < shipObject.shipLength; y++) {
                    gameBoard[x][verOccupancy] = shipObject.shipType;
                    verOccupancy++;
                }
                return gameBoard[x][y + shipObject.shipLength-1];
            default:
                return false;
        }
    }
    return { placeShip }
}
export default gameBoard;
// *Gameboard factory
// -Gameboards should be able to place ships at specific coordinates by calling the ship factory function.
// -Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether
// or not the attack hi t a ship and then sends the ‘hit’ function to the correct ship, or records the
// coordinates of the missed shot.
// -Gameboards should keep track of missed attacks so they can display them properly.
// -Gameboards should be able to report whether or not all of their ships have been sunk.