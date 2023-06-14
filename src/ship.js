const ship = (pShipLength, pShipType) => {
    let shipLength = pShipLength;
    let hits = 0;
    let shipType = pShipType;
    let shipCoordinates = [];
    function hit() {
        hits += 1;
        return isSunk();
    }
    function isSunk() {
        return (hits >= shipLength) ? true : false;
    }
    function addCoordinate(coordiante) {
        shipCoordinates.push(coordiante);
    }
    function getCoordinates() {
        return shipCoordinates;
    }
    return { hit, isSunk, shipType, shipLength, addCoordinate, getCoordinates }
}
export default ship;
// five types of ship
// Aircraft Carrier: 5 spaces long
// Battleship: 4 spaces long
// Cruiser: 3 spaces long
// Submarine: 3 spaces long
// Destroyer: 2 spaces long