const board = document.querySelector("#board");

const colors = [
  "#e27d5f",
  "#e8a87c",
  "#c38d9d",
  "#40b3a2",
  "#2b8579",
  "#946472",
  "#b17d56",
  "#5e9d95",
  "#a5583a"
];

const SQUARES_NUMBER = 391;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
};

function setColor(e) {
  const color = getRandomColor();
  e.style.backgroundColor = color;
  e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

function removeColor(e) {
  e.style.backgroundColor = "#86d6d5";
  e.style.boxShadow = `0 0 2px #85cdca`;
};

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
};