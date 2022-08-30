import { GameManager } from "./GameManager";

const canvas = document.querySelector("canvas");

document.body.onload = () => {
    const gameManager = new GameManager();
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});