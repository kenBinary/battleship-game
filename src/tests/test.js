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

let x = ship(3);
while (!x.isSunk()) {
    x.hit();
    console.log(x.isSunk())
}