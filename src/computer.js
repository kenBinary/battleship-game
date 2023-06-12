import player from "./player";

const computer = () => {
    const { getTurn, getName } = player("Computer");
    function isNestedArrayInArray(arr, target) {
        return arr.some(subArray => subArray.length === target.length && subArray.every((value, index) => value === target[index]));
    }
    function randomCoordinate() {
        let xCoordinate = Math.floor(Math.random() * 10);
        let yCoordinate = Math.floor(Math.random() * 10);
        let coordinate = [xCoordinate, yCoordinate];
        return coordinate;
    }
    function playTurn(gameBoard, ship) {
        let coordinate = [];
        while (true) {
            coordinate = randomCoordinate();
            if (isNestedArrayInArray(gameBoard.getMissedAttacks(), coordinate)) {
                coordinate = randomCoordinate();
            }
            else {
                console.log(coordinate);
                gameBoard.receiveAttack(coordinate[0], coordinate[1], ship)
                return true;
            }
        }
    }
    return { getTurn, getName, playTurn }
}
export default computer;