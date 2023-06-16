import player from "./player";

const computer = () => {
    const { getTurn, getName, setTurn } = player("Computer", false);
    // function isNestedArrayInArray(arr, target) {
    //     return arr.some(subArray => subArray.length === target.length && subArray.every((value, index) => value === target[index]));
    // }
    function coordinateInMissed(arr, target) {
        if (arr.includes(target)) {
            console.log(target)
            return true;
        }
        // return arr.some(subArray => subArray.length === target.length && subArray.every((value, index) => value === target[index]));
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
            // if (isNestedArrayInArray(gameBoard.getMissedAttacks(), coordinate)) {
            //     coordinate = randomCoordinate();
            // }
            if (coordinateInMissed(gameBoard.getMissedAttacks(), coordinate)) {
                coordinate = randomCoordinate;
            }
            else {
                isHit = gameBoard.receiveAttack(coordinate[0], coordinate[1]);
                // gameBoard.receiveAttack(coordinate[0], coordinate[1], ship)
                // return gameBoard.receiveAttack(coordinate[0], coordinate[1]);
                return [isHit,coordinate];
            }
        }
    }
    return { getTurn, getName, playTurn, setTurn }
}
export default computer;