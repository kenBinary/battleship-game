const player = (pName) => {
    let name = pName;
    let isTurn = false;
    function playTurn(x, y, pGameBoard, pShip) {
        pGameBoard.receiveAttack(x, y, pShip);
    }
    function getTurn() {
        return isTurn;
    }
    function getName() {
        return name;
    }
    return { getTurn, getName };
}
export default player;