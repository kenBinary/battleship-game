const ship = (pShipLength, pShipType) => {
    let shipLength = pShipLength;
    let hits = 0;
    function hit() {
        hits += 1;
        return isSunk();
    }
    function isSunk() {
        return (hits >= shipLength) ? true : false;
    }
    return { hit, isSunk }
}

let x = ship(3);