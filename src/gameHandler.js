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
import loadStartup from "./loadStartup";
function newGame(playerName, ships) {
    const container = document.querySelector(".container");
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
        const newShip = ship(ships[shipKey].length, ships[shipKey].shipType, ships[shipKey].alignment);
        pGameBoard.placeShip(parseInt(ships[shipKey].axis.charAt(0)), parseInt(ships[shipKey].axis.charAt(1)), newShip, ships[shipKey].alignment);
    }
    domHandler.updateGameBoard(pGameBoard, "player-gameboard")

    // updating the DOM
    const coordinateCells = document.querySelectorAll(".coordinate-cell");
    domHandler.updateTurnDisplay(newPlayer.getName());
    domHandler.updatePlayerNames(newPlayer.getName(), newComputer.getName());
    coordinateCells.forEach((cell) => {
        cell.addEventListener('click', (e) => {
            let x = e.target.getAttribute("data-coordinate");
            let isHit;
            if (newPlayer.getTurn()) {
                isHit = cGameBoard.receiveAttack(x.charAt(0), x.charAt(1));
                newPlayer.setTurn(false);
                domHandler.updateTurnDisplay(newComputer.getName());
                domHandler.toggleGameBoard()
                domHandler.displayHitShip(e.target, isHit);
                if (cGameBoard.allShipsDestroyed()) {
                    domHandler.showWinner(newPlayer.getName());
                    new Promise(function (resolve) {
                        container.innerHTML = "";
                        container.classList.toggle("game-start");
                        resolve("done");
                    }).then(() => {
                        loadStartup()
                    })
                }
            }
            else {
                isHit = pGameBoard.receiveAttack(x.charAt(0), x.charAt(1));
                newPlayer.setTurn(true);
                domHandler.updateTurnDisplay(newPlayer.getName());
                domHandler.toggleGameBoard()
                domHandler.displayHitShip(e.target, isHit);
                if (pGameBoard.allShipsDestroyed()) {
                    new Promise(function (resolve) {
                        container.innerHTML = "";
                        container.classList.toggle("game-start");
                        resolve("done");
                    }).then(() => {
                        loadStartup()
                    })
                    domHandler.showWinner(newComputer.getName());
                }
            }
        }, { once: true });
    });
}
export default newGame;
