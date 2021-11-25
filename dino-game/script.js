const dino = document.getElementById("dino"),
      cactus = document.getElementById("cactus"),
      score = document.querySelector("#score"),
      road = document.querySelector("#road"),
      cloud = document.querySelector("#cloud"),
      startOver = document.querySelector("#startOver"),
      gameOver = document.querySelector("#gameOver");

//declaring variable for score
let interval = null;
let playerScore = 0;

//function for score
let scoreCounter = () => {
  playerScore++;
  score.innerText = `${playerScore}`;
};

window.addEventListener("keydown", (start) => {
  if (start.code == "Space") {
    startOver.style.display = "none";
    gameOver.style.display = "none";
    cactus.classList.add("cactusActive");
    road.firstElementChild.style.animation = "roadAnimate 1.5s infinite linear";
    cloud.firstElementChild.style.animation = "cloudAnimate 50s linear infinite";

    //score
    let playerScore = 0;
    interval = setInterval(scoreCounter, 200);
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key == "ArrowUp")
    if (dino.classList != "jump") {
      dino.classList.add("jump");

      setTimeout(() => {
        dino.classList.remove("jump");
      }, 300);
    }
});

//game over if dino hit the cactus
let result = setInterval(() => {
  let dinoBottom = parseInt(getComputedStyle(dino).getPropertyValue("bottom"));
  let cactusLeft = parseInt(getComputedStyle(cactus).getPropertyValue("left"));

  if (dinoBottom <= 60 && cactusLeft >= 1 && cactusLeft <= 30) {
    gameOver.style.display = "block";
    cactus.classList.remove("cactusActive");

    road.firstElementChild.style.animation = "none";
    cloud.firstElementChild.style.animation = "none";

    clearInterval(interval);
    playerScore = 0;
  }
}, 10);
