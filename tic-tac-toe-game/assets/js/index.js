import Game from "./Game.js";
import GameView from "./GameView.js"

let game = new Game();
let gameView = new GameView();

const themeButton = document.querySelector(".dark-mode i");

document.querySelector(".restart").addEventListener("click", () => {
  onRestartClick();
});

document.querySelectorAll(".board__tile").forEach((tile) => {
  tile.addEventListener("click", () => {
    onTileClick(tile.dataset.index);
  });
});

function onTileClick(i) {
  game.makeMove(i);
  gameView.update(game);
}

function onRestartClick() {
  game = new Game();
  gameView.update(game);
}

gameView.update(game);

// ### dark mode
function DarkModeTheme() {
  document.body.classList.toggle('darkModeTheme');
  themeButton.classList.toggle('fa-sun');
}

document.querySelector(".dark-mode").addEventListener("click", () => {
  DarkModeTheme();
});
