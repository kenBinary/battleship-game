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

// game modules should decide game loop and create a new game
function newGame() {
    // const playerGameBoard = gameBoard();
    // domHandler.updateGameBoard(playerGameBoard,"player-gameboard")

    const pGameBoard = gameBoard();
    const pShip1 = ship(3, "a");
    const pShip2 = ship(3, "c");
    pGameBoard.placeShip(3, 7, pShip1, "horizontal");
    pGameBoard.placeShip(1, 1, pShip2, "vertical");
    domHandler.updateGameBoard(pGameBoard, "player-gameboard")
    const cGameBoard = gameBoard();
    const cShip1 = ship(3, "a");
    const cShip2 = ship(4, "c");
    cGameBoard.placeShip(5, 0, cShip1, "horizontal");
    cGameBoard.placeShip(0, 0, cShip2, "vertical");
    domHandler.updateGameBoard(cGameBoard, "computer-gameboard")


}
export default newGame;
