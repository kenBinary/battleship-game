// -game loop should set up a new game by creating Players and Gameboards. For now just populate each 
// Gameboard with predetermined coordinates. You can implement a system for allowing players to 
// place their ships later.
// -game loop should step through the game turn by turn using only methods from other objects. 
// If at any point you are tempted to write a new function inside the game loop, step back 
// and figure out which class or module that function should belong to.
// -Create conditions so that the game ends once one players ships have all been sunk. 
// This function is appropriate for the Game module

import gameBoard from "./gameboard";
import * as domHandler from "./domHandler";
import ship from "./ship";
import player from "./player";
import computer from "./computer";

// game modules should decide game loop and create a new game
// function newGame() {
//     const newPlayer = player("human");
//     const newComputer = computer();
//     const pGameBoard = gameBoard();
//     const pShip1 = ship(3, "a");
//     const pShip2 = ship(3, "c");
//     pGameBoard.placeShip(3, 7, pShip1, "horizontal");
//     pGameBoard.placeShip(4, 5, pShip2, "vertical");
//     domHandler.updateGameBoard(pGameBoard, "player-gameboard")
//     const cGameBoard = gameBoard();
//     const cShip1 = ship(3, "a");
//     const cShip2 = ship(4, "c");
//     cGameBoard.placeShip(5, 0, cShip1, "horizontal");
//     cGameBoard.placeShip(0, 0, cShip2, "vertical");
//     domHandler.updateGameBoard(cGameBoard, "computer-gameboard");
//     const coordinateCells = document.querySelectorAll(".coordinate-cell");
//     domHandler.updateTurnDisplay(newPlayer.getName());
//     domHandler.updatePlayerNames(newPlayer.getName(), newComputer.getName());
//     coordinateCells.forEach((cell) => {
//         cell.addEventListener('click', (e) => {
//             let x = e.target.getAttribute("data-coordinate");
//             if (newPlayer.getTurn()) {
//                 cGameBoard.receiveAttack(x.charAt(0), x.charAt(1));
//                 if (cGameBoard.allShipsDestroyed()) {
//                     domHandler.showWinner(newPlayer.getName());
//                 }
//                 newPlayer.setTurn(false);
//                 domHandler.updateTurnDisplay(newComputer.getName());
//             }
//             else {
//                 pGameBoard.receiveAttack(x.charAt(0), x.charAt(1));
//                 if (pGameBoard.allShipsDestroyed()) {
//                     domHandler.showWinner(newComputer.getName());
//                 }
//                 newPlayer.setTurn(true);
//                 domHandler.updateTurnDisplay(newPlayer.getName());

//             }
//         });
//     });
// }

function newGame(playerName, ships) {
    // Aircraft Carrier: 5 spaces long
    // Battleship: 4 spaces long
    // Cruiser: 3 spaces long
    // Submarine: 3 spaces long
    // Destroyer: 2 spaces long
    // computer ships and gameboard
    const newComputer = computer();
    const cGameBoard = gameBoard();
    const cCarrier = ship(5, "c");
    const cBattleship = ship(4, "c");
    const cCruiser = ship(3, "c");
    const cSubmarine = ship(3, "c");
    const cDestroyer = ship(2, "c");
    cGameBoard.placeShip(2, 8, cCarrier, "vertical");
    cGameBoard.placeShip(1, 3, cBattleship, "vertical");
    cGameBoard.placeShip(0, 0, cCruiser, "vertical");
    cGameBoard.placeShip(6, 0, cSubmarine, "horizontal");
    cGameBoard.placeShip(7, 4, cDestroyer, "horizontal");
    domHandler.updateGameBoard(cGameBoard, "computer-gameboard");


    // player ships and gameboard
    const newPlayer = player(playerName);
    const pGameBoard = gameBoard();
    for (const shipKey in ships) {
        // console.log(ships[shipKey].axis.charAt(0));
        // console.log(ships[shipKey].axis.charAt(1));
        // console.log(ships[shipKey].alignment);

        const newShip = ship(ships[shipKey].length, "p");
        pGameBoard.placeShip(parseInt(ships[shipKey].axis.charAt(0)), parseInt(ships[shipKey].axis.charAt(1)), newShip, ships[shipKey].alignment);
        // pGameBoard.placeShip(ships[shipKey].axis.charAt(0), ships[shipKey].axis.charAt(1), newShip, ships[shipKey].alignment);
    }
    domHandler.updateGameBoard(pGameBoard, "player-gameboard")



    // const pShip1 = ship(3, "a");
    // const pShip2 = ship(3, "c");
    // pGameBoard.placeShip(3, 7, pShip1, "horizontal");
    // pGameBoard.placeShip(4, 5, pShip2, "vertical");


    // updating the DOM
    const coordinateCells = document.querySelectorAll(".coordinate-cell");
    domHandler.updateTurnDisplay(newPlayer.getName());
    domHandler.updatePlayerNames(newPlayer.getName(), newComputer.getName());
    coordinateCells.forEach((cell) => {
        cell.addEventListener('click', (e) => {
            let x = e.target.getAttribute("data-coordinate");
            if (newPlayer.getTurn()) {
                cGameBoard.receiveAttack(x.charAt(0), x.charAt(1));
                if (cGameBoard.allShipsDestroyed()) {
                    domHandler.showWinner(newPlayer.getName());
                }
                newPlayer.setTurn(false);
                domHandler.updateTurnDisplay(newComputer.getName());
            }
            else {
                pGameBoard.receiveAttack(x.charAt(0), x.charAt(1));
                if (pGameBoard.allShipsDestroyed()) {
                    domHandler.showWinner(newComputer.getName());
                }
                newPlayer.setTurn(true);
                domHandler.updateTurnDisplay(newPlayer.getName());

            }
        });
    });
}
export default newGame;
