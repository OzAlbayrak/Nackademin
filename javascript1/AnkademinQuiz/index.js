let quizOnGoing = false;
let quizStartButton = document.getElementById("quizStartButton");
let quizAnswerSelection = document.getElementById("quizAnswerSelection");
quizAnswerSelection.style.display = "none";
let quizAnswerButton = document.getElementById("quizAnswerButton");
quizAnswerButton.style.display = "none";
//const playerAnswer = [{}];
const quizQuestions = [
  {
    question: "Question 1 is",
    questionAnswer: [false, false, false, true],
  },
  {
    question: "Question 2 is",
    questionAnswer: [false, false, true, false],
  },
  {
    question: "Question 3 is",
    questionAnswer: [false, false, true, true],
  },
  {
    question: "Question 4 is",
    questionAnswer: [false, true, false, false],
  },
  {
    question: "Question 5 is",
    questionAnswer: [false, true, false, true],
  },
  {
    question: "Question 6 is",
    questionAnswer: [false, true, true, false],
  },
  {
    question: "Question 7 is",
    questionAnswer: [false, true, true, true],
  },
  {
    question: "Question 8 is",
    questionAnswer: [true, false, false, false],
  },
  {
    question: "Question 9 is",
    questionAnswer: [true, false, false, true],
  },
  {
    question: "Question 10 is",
    questionAnswer: [true, false, true, false],
  },
];

function startQuiz() {
  quizOnGoing = true;
  playerAnswer = [];
  console.log(quizStartButton);
  quizStartButton.style.display = "none";
  quizAnswerSelection.style.display = "block";
  quizAnswerButton.style.display = "block";
}
