const testFactory = () => {
    let number = 5;
    function add() {
        number = number + 5;
    }
    function getNumber() {
        return number;
    }
    return { add, getNumber }
}

let x = testFactory();
console.log(x.getNumber())
x.add();
console.log(x.getNumber())
