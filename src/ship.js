const ship = (pShipLength, pShipType, pShipOrientation) => {
    let shipLength = pShipLength;
    let hits = 0;
    let shipType = pShipType;
    let shipCoordinates = [];
    let shipOrientation = pShipOrientation;
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
    function getOrientation() {
        return shipOrientation;
    }
    return { hit, isSunk, shipType, shipLength, addCoordinate, getCoordinates, getOrientation }
}
export default ship;
// five types of ship
// Aircraft Carrier: 5 spaces long
// Battleship: 4 spaces long
// Cruiser: 3 spaces long
// Submarine: 3 spaces long
// Destroyer: 2 spaces long