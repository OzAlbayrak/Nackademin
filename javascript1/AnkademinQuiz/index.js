let quizOnGoing = false;
let quizStartButton = document.getElementById("quizStartButton");
let quizAnswerSelection = document.getElementById("quizAnswerSelection");
quizAnswerSelection.style.display = "none";
let quizNextButton = document.getElementById("quizNextButton");
quizNextButton.style.display = "none";
let quizEndButton = document.getElementById("quizEndButton");
quizEndButton.style.display = "none";
let playerAnswer = [];
const quizQuestions = [
  {
    questionText: "Question 1 is",
    questionAnswer: ["a", "b", "c", "d"],
    questionSolution: [false, false, false, true],
  },
  {
    questionText: "Question 2 is",
    questionAnswer: ["a", "b", "c", "d"],
    questionSolution: [false, false, true, false],
  },
  {
    questionText: "Question 3 is",
    questionAnswer: ["a", "b", "c", "d"],
    questionSolution: [false, false, true, true],
  },
  {
    questionText: "Question 4 is",
    questionAnswer: ["a", "b", "c", "d"],
    questionSolution: [false, true, false, false],
  },
  {
    questionText: "Question 5 is",
    questionAnswer: ["a", "b", "c", "d"],
    questionSolution: [false, true, false, true],
  },
  {
    questionText: "Question 6 is",
    questionAnswer: ["a", "b", "c", "d"],
    questionSolution: [false, true, true, false],
  },
  {
    questionText: "Question 7 is",
    questionAnswer: ["a", "b", "c", "d"],
    questionSolution: [false, true, true, true],
  },
  {
    questionText: "Question 8 is",
    questionAnswer: ["a", "b", "c", "d"],
    questionSolution: [true, false, false, false],
  },
  {
    questionText: "Question 9 is",
    questionAnswer: ["a", "b", "c", "d"],
    questionSolution: [true, false, false, true],
  },
  {
    questionText: "Question 10 is",
    questionAnswer: ["a", "b", "c", "d"],
    questionSolution: [true, false, true, false],
  },
];

function startQuiz() {
  quizOnGoing = true;
  playerAnswer = [];
  quizStartButton.style.display = "none";
  quizAnswerSelection.style.display = "block";
  quizNextButton.style.display = "inline-block";
  quizEndButton.style.display = "inline-block";
  console.log(quizQuestions);
}

function nextQuestion() {
  playerAnswer.push({
    answer1: document.getElementById("answer1").checked,
    answer2: document.getElementById("answer2").checked,
    answer3: document.getElementById("answer3").checked,
    answer4: document.getElementById("answer4").checked,
  });
  document.getElementById("answer1").checked = false;
  document.getElementById("answer2").checked = false;
  document.getElementById("answer3").checked = false;
  document.getElementById("answer4").checked = false;
  console.log(playerAnswer.length);
  console.log(playerAnswer);
  if (playerAnswer.length > 9) {
    endQuiz();
  }
}

function endQuiz() {
  quizStartButton.style.display = "block";
  quizAnswerSelection.style.display = "none";
  quizNextButton.style.display = "none";
  quizEndButton.style.display = "none";
  console.log("End of game");
}
