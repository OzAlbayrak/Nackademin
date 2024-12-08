let quizOnGoing = false;
let quizStartButton = document.getElementById("quizStartButton");
let quizAnswerSelection = document.getElementById("quizAnswerSelection");
quizAnswerSelection.style.display = "none";
let quizNextButton = document.getElementById("quizNextButton");
quizNextButton.style.display = "none";
let quizEndButton = document.getElementById("quizEndButton");
quizEndButton.style.display = "none";
let quizTextHeader = document.querySelector("#quizTextHeader");
let quizText = document.querySelector("#quizText");
let questionAnswerSelection1 = document.querySelector(
  "#questionAnswerSelection1"
);
let questionAnswerSelection2 = document.querySelector(
  "#questionAnswerSelection2"
);
let questionAnswerSelection3 = document.querySelector(
  "#questionAnswerSelection3"
);
let questionAnswerSelection4 = document.querySelector(
  "#questionAnswerSelection4"
);
let playerAnswer = [];
const quizQuestions = [
  {
    questionText: "Hur många dagar är en vecka?",
    questionAnswer: ["3 dagar", "7,5 dagar", "5 dagar", "7 dagar"],
    questionSolution: [false, false, false, true],
  },
  {
    questionText: "Hur många timmar är en vecka",
    questionAnswer: ["128 timmar", "48 timmar", "168 timmar", "12 timmar"],
    questionSolution: [false, false, true, false],
  },
  {
    questionText: "Vilka dagar i veckan har klass FEND24 lektioner",
    questionAnswer: ["Måndag", "Fredag", "Tisdag", "Torsdag"],
    questionSolution: [false, false, true, true],
  },
  {
    questionText: "Hur många minuter är en timme",
    questionAnswer: ["120 minuter", "60 minuter", "30 minuter", "256 minuter"],
    questionSolution: [false, true, false, false],
  },
  {
    questionText: "Vad är Nackademins gatuadress",
    questionAnswer: [
      "Tomtebodavägen 5A",
      "Tomtebodavägen 3A",
      "Tomtebodavägen 9B",
      "Ej Tomtebodavägen 7A",
    ],
    questionSolution: [false, true, false, true],
  },
  {
    questionText:
      "Vad är sant när det gäller Nackademins utbildning Frontendutvecklare",
    questionAnswer: [
      "Har ingen LIA",
      "Det är 400 YH-poäng",
      "2 år lång",
      "Är på deltid",
    ],
    questionSolution: [false, true, true, false],
  },
  {
    questionText: "Vilka av följande klassrum har klass FEND24 haft lektioner",
    questionAnswer: [
      "Klassrum C201",
      "Klassrum A218",
      "Klassrum B205",
      "Klassrum C204",
    ],
    questionSolution: [false, true, true, true],
  },
  {
    questionText: "Hur många sekunder är en minut",
    questionAnswer: [
      "60 sekunder",
      " 120 sekunder",
      "240 sekunder",
      "128 sekunder",
    ],
    questionSolution: [true, false, false, false],
  },
  {
    questionText: "Hur många sekunder är en timme",
    questionAnswer: [
      "3600 sekunder",
      "360 sekunder",
      "36 sekunder",
      "Mer än 3,6 sekunder",
    ],
    questionSolution: [true, false, false, true],
  },
  {
    questionText: "Hur långt tid innan ska man börja sin inlämningsuppgift?",
    questionAnswer: [
      "Så lågt tid innan så att man hinner med att slutföra uppgiften",
      "1 dag innan deadline",
      "Så långt innan så att du får flera dagar kvar till deadline efter inlämning",
      "1 timme innan deadline",
    ],
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
  quizTextHeader.textContent = "Fråga " + (playerAnswer.length + 1);
  quizText.textContent = quizQuestions[playerAnswer.length].questionText;
  questionAnswerSelection1.textContent =
    "A - " + quizQuestions[playerAnswer.length].questionAnswer[0];
  questionAnswerSelection2.textContent =
    "B - " + quizQuestions[playerAnswer.length].questionAnswer[1];
  questionAnswerSelection3.textContent =
    "C - " + quizQuestions[playerAnswer.length].questionAnswer[2];
  questionAnswerSelection4.textContent =
    "D - " + quizQuestions[playerAnswer.length].questionAnswer[3];
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
  } else {
    quizTextHeader.textContent = "Fråga " + (playerAnswer.length + 1);
    quizText.textContent = quizQuestions[playerAnswer.length].questionText;
    questionAnswerSelection1.textContent =
      "A - " + quizQuestions[playerAnswer.length].questionAnswer[0];
    questionAnswerSelection2.textContent =
      "B - " + quizQuestions[playerAnswer.length].questionAnswer[1];
    questionAnswerSelection3.textContent =
      "C - " + quizQuestions[playerAnswer.length].questionAnswer[2];
    questionAnswerSelection4.textContent =
      "D - " + quizQuestions[playerAnswer.length].questionAnswer[3];
  }
}

function endQuiz() {
  quizStartButton.style.display = "block";
  quizAnswerSelection.style.display = "none";
  quizNextButton.style.display = "none";
  quizEndButton.style.display = "none";
  quizTextHeader.textContent = "";
  quizText.textContent = "";
  console.log("End of game");
}
