import ship from "./ship";

const gameBoard = () => {
    let gameBoard = [];
    let missedAttacks = [];
    let shipsDestroyed = 0;
    let shipsPlaced = 0;
    let ships = [];

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
                let horOccupancy = y;
                let b = 0;
                for (let i = 0; i < shipObject.shipLength; i++) {
                    gameBoard[x][horOccupancy] = shipObject.shipType;
                    let keyCoordinates = `${x}${horOccupancy}`;
                    shipObject.addCoordinate(keyCoordinates);
                    horOccupancy++;
                }
                ships.push(shipObject);
                shipsPlaced++;
                return [gameBoard[x][y], gameBoard[x][y + 1], gameBoard[x][y + 2]];
            case "vertical":
                let varOccupancy = x;
                for (let z = 0; z < shipObject.shipLength; z++) {
                    gameBoard[varOccupancy][y] = shipObject.shipType;
                    let keyCoordinates = `${varOccupancy}${y}`;
                    shipObject.addCoordinate(keyCoordinates);
                    varOccupancy++;
                }
                ships.push(shipObject);
                shipsPlaced++;
                return [gameBoard[x][y], gameBoard[x + 1][y], gameBoard[x + 2][y]];
            default:
                return false;
        }
    }
    function receiveAttack(x, y) {
        let isHit = false;
        ships.forEach((ship) => {
            ship.getCoordinates().forEach((element) => {
                if (element === `${x}${y}`) {
                    let isSunk = ship.hit();
                    if (isSunk) {
                        shipsDestroyed++;
                    }
                    isHit = true;
                }
            })
        });
        if (!isHit) {
            // missedAttacks.push([x, y]);
            missedAttacks.push(`${x}${y}`);
            gameBoard[x][y] = "missed";
            return false;
        }
        return isHit;
        // if (gameBoard[x][y] !== "") {
        //     ships.forEach((ship) => {
        //         ship.getCoordinates().forEach((element) => {
        //             if (element === `${x}${y}`) {
        //                 let isSunk = ship.hit();
        //                 if (isSunk) {
        //                     shipsDestroyed++;
        //                 }
        //                 return true
        //                 console.log("hit!")
        //             }
        //         })
        //     });
        //     let isSunk = ship.hit();
        //     if (isSunk) {
        //         shipsDestroyed++;
        //     }
        //     return true
        // }
        // else {
        //     missedAttacks.push([x, y]);
        //     gameBoard[x][y] = "missed";
        //     return false;
        // }
    }
    function allShipsDestroyed() {
        return (shipsDestroyed >= shipsPlaced) ? true : false;
    }
    function getGameBoard() {
        return gameBoard;
    }
    function getMissedAttacks() {
        return missedAttacks;
    }
    function getNumOfShipsPlaced() {
        return shipsPlaced;
    }
    function getShipsPlaced() {
        return ships;
    }
    return { getShipsPlaced, placeShip, receiveAttack, getGameBoard, getMissedAttacks, getNumOfShipsPlaced, allShipsDestroyed }
}
export default gameBoard;
// *Gameboard factory
// -Gameboards should be able to place ships at specific coordinates by calling the ship factory function.
// -Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether
// or not the attack hi t a ship and then sends the ‘hit’ function to the correct ship, or records the
// coordinates of the missed shot.
// -Gameboards should keep track of missed attacks so they can display them properly.
// -Gameboards should be able to report whether or not all of their ships have been sunk.