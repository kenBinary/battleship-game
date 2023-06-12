import computer from "../computer";
import ship from "../ship";
import gameBoard from "../gameboard";

test("check if random coordinate is legal ", () => {
    const newComputer = computer();
    const sGameBoard = gameBoard();
    const ship1 = ship(2, "a");
    const ship2 = ship(2, "c");
    sGameBoard.placeShip(0, 0, ship1, "horizontal");
    sGameBoard.placeShip(1, 1, ship2, "vertical");
    newComputer.playTurn(sGameBoard, ship1);
    newComputer.playTurn(sGameBoard, ship1);
    newComputer.playTurn(sGameBoard, ship2);
    newComputer.playTurn(sGameBoard, ship2);
    expect(newComputer.playTurn(sGameBoard)).toBe(true)
});