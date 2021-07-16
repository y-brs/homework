const qa = [
  {
    question: "when was Javascript created",
    correct: "1995",
    incorrect: ["1984", "2000", "1996", "1994"]
  },
  {
    question: "react was originally created by...",
    correct: "Jordan Walke",
    incorrect: ["Kid Cudi", "Almero Steyn", "Jesse Beach", "Caleb Meredith"]
  },
  {
    question: "what vehicle manufacturer builds the 911 GT3",
    correct: "Porsche",
    incorrect: ["BMW", "Bentley", "Mercedes AMG", "McClaren"]
  },
  {
    question: "what styles a webpage",
    correct: "CSS",
    incorrect: ["HTML", "JSON", "SQL", "All"]
  },
  {
    question: "how many data types does JavaScript have",
    correct: "Seven",
    incorrect: ["Three", "Four", "Two", "Eight"]
  }
];

const answerContainer = document.querySelector(".a");
const questionCon = document.querySelector(".q");
const question = document.querySelector(".q-item");
const bar = document.querySelector(".bar");
const barContainer = document.querySelector(".progressBar");
const progressBar = document.querySelector(".bar-w");
const next = document.querySelector(".next");
const startBtn = document.querySelector(".start-game");
const questions = [];
const player = { score: 0, answers: [] };

let cur = 0;

const holder = [];

(() => {
  loadQuestions(); // load questions immediately
})();

function loadQuestions() {
  qa.forEach((e) => {
    // loop through "qa"
    let temp = [];
    e.incorrect.forEach((ans) => {
      // loop through 'qa.incorrect' => place false on incorrect items
      let obj = {
        response: ans,
        correct: false
      };
      temp.push(obj);
    });

    let obj = {
      // place true on correct items
      response: e.correct,
      correct: true
    };
    temp.push(obj);
    let mainTemp = {
      question: e.question,
      options: temp, // both correct and incorrect options are stored here
      correct: e.correct // correct answer
    };
    questions.push(mainTemp); // push into global
  });
}

function newQuestion() {
  if (cur >= questions.length) {
    next.innerHTML = "View Score";
    results();
  } else {
    next.innerHTML = "Next Question";
  }
  answerContainer.innerHTML = "";
  const el = questions[cur];
  progess();
  console.log(el);
  el.options.sort(() => {
    return 0.5 - Math.random();
  });

  const capQuestion = el.question.charAt(0).toUpperCase() + el.question.slice(1);
  question.textContent = `${capQuestion}?`;
  answerContainer.innerHTML = "";

  el.options.forEach((option) => {
    const divOption = document.createElement("div");
    holder.push(divOption);
    divOption.correctAnswer = el.correct;
    divOption.que = capQuestion;
    divOption.isITcorrect = option.correct;
    divOption.classList.add("a-item");
    divOption.textContent = option.response;
    answerContainer.append(divOption);

    divOption.addEventListener("click", optSelect);
  });
}

// if selected option is T || F
function optSelect(e) {
  endTurn();
  if (e.target.isITcorrect) {
    player.score++;
    let obj = {
      que: e.target.que,
      res: e.target.textContent,
      correct: true,
      qNum: cur
    };
    player.answers.unshift(obj);
    e.target.style.color = "#008205";
    e.target.style.backgroundColor = "#dbfff3";
  } else {
    let obj = {
      que: e.target.que,
      res: e.target.textContent,
      correct: false,
      qNum: cur
    };
    player.answers.unshift(obj);
    e.target.style.color = "#e91e63";
    e.target.style.backgroundColor = "#ffd3e2";
  }
  e.target.style.cursor = "pointer";
  // player.answers.push(temp);
}

// OPTIONS not selected have a unique style

function endTurn() {
  holder.forEach((el) => {
    el.removeEventListener("click", optSelect);
    el.style.backgroundColor = "#ffffff05";
    el.style.color = "#565656";
    el.style.cursor = "default";
  });
  cur++;
  if (cur >= questions.length) {
    next.innerHTML = "View Score";
  } else {
    next.innerHTML = "Next Question";
  }
}

function progess() {
  bar.style.width = "60%";
  next.classList.add("progressActive");
  question.style.display = "block";

  const currentQ = cur + 1;
  const progressIs = (currentQ / questions.length) * 100;

  if (progressIs === 100) {
    next.innerHTML = "View Score";
    progressBar.style.maxWidth = "100%";
  }
  progressBar.style.width = `${progressIs}%`;
}
startBtn.addEventListener("click", newQuestion);
next.addEventListener("click", () => {
  if (cur >= questions.length) {
    results();
  } else {
    newQuestion();
  }
});

// update score while answering each Q

function results() {
  console.log(player.score);
  question.style.display = "block";
  answerContainer.innerHTML = "";
  question.textContent = `Quiz Summary`;
  player.answers.forEach((ans, i) => {
    const resultsMockup = `
    <div class="result">
    <div class="result-q"><span>${ans.qNum}</span> ${ans.que}</div>
    <div>${ans.res}</div>
    <div>${ans.correct}</div>
    </div>`;
    answerContainer.insertAdjacentHTML("afterbegin", resultsMockup);
  });
  const progressIs = (player.score / questions.length) * 100;
  next.innerHTML = `${player.score} / ${questions.length} points`;

  if (progressIs <= 50) {
    bar.style.backgroundColor = `#ff8585`;
    progressBar.style.backgroundColor = `red`;
  } else if (progressIs <= 75) {
    bar.style.backgroundColor = `#ffc582`;
    progressBar.style.backgroundColor = `#ff8900`;
  } else {
    progressBar.style.backgroundColor = `#00d15e`;
    bar.style.backgroundColor = `#bcffda`;
  }

  progressBar.style.width = `${progressIs}%`;

  loadQuestions();
}

function restartGame() {
  newQuestion();
}
