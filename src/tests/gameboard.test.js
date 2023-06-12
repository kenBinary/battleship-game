import gameBoard from "../gameboard";
import ship from "../ship";
const newGameBoard = gameBoard();
const newShip = ship(3, "ac");
const newShipB = ship(3, "bc")

test("ship placed in specified coordinate along x axis", () => {
    expect(newGameBoard.placeShip(0, 0, newShip, "horizontal")).toEqual(["ac", "ac", "ac"])

});
test("ship placed in specified coordinate along y axis", () => {
    expect(newGameBoard.placeShip(1, 1, newShipB, "vertical")).toEqual(["bc", "bc", "bc"])

});
// test("check if attack hit a ship based on given coordinates", () => {
//     expect(newGameBoard.receiveAttack(1, 1)).toBe(true);
// });

// test("check if attack did not hit ship based on given coordinates", () => {
//     expect(newGameBoard.receiveAttack(1, 1)).toBe(false)
// });
// test("check if all attacked coordinates are tracked", () => {
//     expect(true).toBe(true)
// });
// tests("check if all ships from one player are destroyed", () => {
//     expect(true).toBe(true)
// });

