import html from "./startup.html";
import "./startup-style.scss";
function loadStartup() {
    const container = document.querySelector(".container");
    container.innerHTML = html;
}
export default loadStartup;