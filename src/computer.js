import player from "./player";

const computer = () => {
    const { getTurn, getName, setTurn } = player("Computer", false);
    function coordinateInMissed(arr, pTarget) {
        let target = `${pTarget[0]}${pTarget[1]}`;
        if (arr.includes(target)) {
            console.log(target)
            return true;
        }
    }
    function randomCoordinate() {
        let xCoordinate = Math.floor(Math.random() * 10);
        let yCoordinate = Math.floor(Math.random() * 10);
        let coordinate = [xCoordinate, yCoordinate];
        return coordinate;
    }
    function playTurn(gameBoard) {
        let coordinate = [];
        let isHit;
        while (true) {
            coordinate = randomCoordinate();
            if (coordinateInMissed(gameBoard.getMissedAttacks(), coordinate)) {
                coordinate = randomCoordinate();
            }
            else {
                isHit = gameBoard.receiveAttack(coordinate[0], coordinate[1]);
                return [isHit, coordinate];
            }
        }
    }
    return { getTurn, getName, playTurn, setTurn }
}
export default computer;