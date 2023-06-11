const ship = (shipLength) => {
    let thisShipLength = shipLength;
    let hits = 0;
    function hit() {
        hits += 1;
        return isSunk();
    }
    function isSunk() {
        return (hits >= thisShipLength) ? true : false;
    }
    return { hit, isSunk }
}
export default ship;
// five types of ship
// Aircraft Carrier: 5 spaces long
// Battleship: 4 spaces long
// Cruiser: 3 spaces long
// Submarine: 3 spaces long
// Destroyer: 2 spaces long