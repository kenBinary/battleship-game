import ship from "../ship";
const newShip = ship(3);
test("when battleship is hit but not sunk", () => {
    newShip.hit();
    expect(newShip.isSunk()).toBe(false)
});
test("when battleship is sunk", () => {
    while (!newShip.isSunk()) {
        newShip.hit();
    }
    expect(newShip.isSunk()).toBe(true)
});

// ship can only do two things
// get hit
// check if it is sunk