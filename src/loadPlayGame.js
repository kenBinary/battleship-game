import html from "./play-game.html";
import "./play-game-style.scss";
function loadPlayGame() {
    const container = document.querySelector(".container");
    container.classList.toggle("game-start");
    container.innerHTML = html;
}
export default loadPlayGame;