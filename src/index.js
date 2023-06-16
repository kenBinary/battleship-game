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
            "alignment": "vertical",
            "shipType": "battleship"
        },
        "cruiser": {
            "axis": "01",
            "length": 3,
            "alignment": "vertical",
            "shipType": "cruiser"
        },
        "submarine": {
            "axis": "02",
            "length": 3,
            "alignment": "vertical",
            "shipType": "submarine"
        },
        "carrier": {
            "axis": "03",
            "length": 5,
            "alignment": "vertical",
            "shipType": "carrier"
        },
        "destroyer": {
            "axis": "04",
            "length": 2,
            "alignment": "vertical",
            "shipType": "destroyer"
        }
    }
    newGame("test", obj)
}