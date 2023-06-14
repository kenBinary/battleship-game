const x = () => {
    let y = 5;
    function add() {
        y += 5;
    }
    function getY() {
        console.log(y);
    }
    function setY(number) {
        y = number;
    }
    return {add, getY,setY }
}
let b = x();
b.getY();
function add(object) {
    object.setY(500);
}
add(b);

b.getY();
b.getY();
b.getY();
b.getY();
