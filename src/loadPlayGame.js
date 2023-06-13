import html from "./play-game.html";
import "./play-game-style.scss";
function loadPlayGame() {
    const container = document.querySelector(".container");
    container.innerHTML = html;
}
export default loadPlayGame;