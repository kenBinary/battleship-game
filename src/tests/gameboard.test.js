import gameBoard from "../gameboard";
import ship from "../ship";
const newGameBoard = gameBoard();
const newShip = ship(3, "ac");

test("ship placed in specified coordinate along x axis", () => {
    expect(newGameBoard.placeShip(1, 1, newShip, "horizontal")).toBe("ac")
});
test("ship placed in specified coordinate along y axis", () => {
    expect(newGameBoard.placeShip(1, 1, newShip, "vertical")).toBe("ac")
});
// test("check if attack hit a ship based on given coordinates", () => {
//     expect(true).toBe(true)
// });
// test("check if attack did not hit ship based on given coordinates", () => {
//     expect(true).toBe(true)
// });
// test("check if all attacked coordinates are tracked", () => {
//     expect(true).toBe(true)
// });
// tests("check if all ships from one player are destroyed", () => {
//     expect(true).toBe(true)
// });

