const player = (pName, pIsTurn = true) => {
    let name = pName;
    let isTurn = pIsTurn;
    function playTurn(x, y, pGameBoard, pShip) {
        pGameBoard.receiveAttack(x, y, pShip);
    }
    function getTurn() {
        return isTurn;
    }
    function getName() {
        return name;
    }
    function setTurn(boolean) {
        isTurn = boolean;
    }

    return { getTurn, getName, playTurn, setTurn };
}
export default player;