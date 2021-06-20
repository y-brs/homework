const startBtn = document.querySelector(".start"),
      screens = document.querySelectorAll(".screen"),
      timeList = document.querySelector("#time-list"),
      timeEl = document.querySelector("#time"),
      board = document.querySelector("#board");

let time = 0;
let score = 0;

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

startBtn.addEventListener("click", (e) => {
  e.preventDefault();
  screens[0].classList.add("up");
});

timeList.addEventListener("click", e => {
  e.preventDefault();
  if (e.target.classList.contains("time-btn")) {
    time = parseInt(e.target.getAttribute("data-time"));
    screens[1].classList.add("up");
    startGame();
  };
});

board.addEventListener("click", e => {
  if (e.target.classList.contains("circle")) {
    score++;
    e.target.remove();
    createRandomCircle();
  };
});

function startGame() {
  setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTime(time);
};

function decreaseTime() {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`;
    }
    setTime(current);
  }
};

function setTime(value) {
  timeEl.innerHTML = `00:${value}`;
};

function finishGame() {
  board.innerHTML = `<h1>Ваш счет: <span class="primary">${score}</span></h1>`
  timeEl.parentNode.classList.add("hide");
};

function createRandomCircle() {
  const circle = document.createElement("div");
  const size = getRandomNumer(10, 60);
  const color = getRandomColor();

  const {width, height} = board.getBoundingClientRect();

  const x = getRandomNumer(0, width - size);
  const y = getRandomNumer(0, height - size);

  circle.classList.add("circle");
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${x}px`;
  circle.style.left = `${y}px`;
  circle.style.backgroundColor = color;

  board.append(circle);
};

function getRandomNumer(min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
};