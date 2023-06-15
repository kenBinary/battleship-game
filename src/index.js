import loadStartup from "./loadStartup";
import loadPlayGame from "./loadPlayGame";
import newGame from "./gameHandler";
import "normalize.css";




loadStartup();
// loadGame();


function loadGame() {
    loadPlayGame();
    const obj = {
        "battleship": {
            "axis": "00",
            "length": 4,
            "alignment": "horizontal",
            "shipType": "battleship"
        },
        "cruiser": {
            "axis": "10",
            "length": 3,
            "alignment": "horizontal",
            "shipType": "cruiser"
        },
        "submarine": {
            "axis": "20",
            "length": 3,
            "alignment": "horizontal",
            "shipType": "submarine"
        },
        "carrier": {
            "axis": "30",
            "length": 5,
            "alignment": "horizontal",
            "shipType": "carrier"
        },
        "destroyer": {
            "axis": "40",
            "length": 2,
            "alignment": "horizontal",
            "shipType": "destroyer"
        }
    }
    newGame("test", obj)
}