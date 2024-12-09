let quizOnGoing = false;
let darkModeButton = document.getElementById("darkModeButton");
darkModeButton.textContent = "Dark Mode";
let quizStartButton = document.getElementById("quizStartButton");
let checkBoxSelection = [4];
checkBoxSelection[0] = document.getElementById("answer1");
checkBoxSelection[1] = document.getElementById("answer2");
checkBoxSelection[2] = document.getElementById("answer3");
checkBoxSelection[3] = document.getElementById("answer4");
checkBoxSelection[0].style.display = "none";
checkBoxSelection[1].style.display = "none";
checkBoxSelection[2].style.display = "none";
checkBoxSelection[3].style.display = "none";
let quizNextButton = document.getElementById("quizNextButton");
quizNextButton.style.display = "none";
let quizEndButton = document.getElementById("quizEndButton");
quizEndButton.style.display = "none";
let quizTextHeader = document.querySelector("#quizTextHeader");
let quizText = document.querySelector("#quizText");

let questionAnswerSelection = [4];
questionAnswerSelection[0] = document.querySelector(
  "#questionAnswerSelection1"
);
questionAnswerSelection[1] = document.querySelector(
  "#questionAnswerSelection2"
);
questionAnswerSelection[2] = document.querySelector(
  "#questionAnswerSelection3"
);
questionAnswerSelection[3] = document.querySelector(
  "#questionAnswerSelection4"
);

let playerAnswer = [];
const quizQuestions = [
  {
    questionText: "Hur många dagar är en vecka?",
    questionAnswer: ["3 dagar", "7,5 dagar", "5 dagar", "7 dagar"],
    questionSolution: [false, false, false, true],
    questionPoints: 1,
  },
  {
    questionText: "Hur många timmar är en vecka",
    questionAnswer: ["128 timmar", "48 timmar", "168 timmar", "12 timmar"],
    questionSolution: [false, false, true, false],
    questionPoints: 1,
  },
  {
    questionText: "Vilka dagar i veckan har klass FEND24 lektioner",
    questionAnswer: ["Måndag", "Fredag", "Tisdag", "Torsdag"],
    questionSolution: [false, false, true, true],
    questionPoints: 2,
  },
  {
    questionText: "Hur många minuter är en timme",
    questionAnswer: ["120 minuter", "60 minuter", "30 minuter", "256 minuter"],
    questionSolution: [false, true, false, false],
    questionPoints: 1,
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
    questionPoints: 2,
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
    questionPoints: 2,
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
    questionPoints: 3,
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
    questionPoints: 1,
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
    questionPoints: 2,
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
    questionPoints: 2,
  },
  {
    questionText: "Det är 12 månader i ett år",
    questionAnswer: ["Det stämmer", "Det stämmer inte"],
    questionSolution: [true, false],
    questionPoints: 1,
  },
  {
    questionText: "JavaScrip är roligt",
    questionAnswer: ["Det stämmer", "Det stämmer inte"],
    questionSolution: [true, false],
    questionPoints: 1,
  },
];

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  if (darkModeButton.textContent === "Dark Mode") {
    darkModeButton.textContent = "Light Mode";
  } else {
    darkModeButton.textContent = "Dark Mode";
  }
}

function startQuiz() {
  quizOnGoing = true;
  playerAnswer = [];
  quizStartButton.style.display = "none";
  quizNextButton.style.display = "inline-block";
  quizEndButton.style.display = "inline-block";
  console.log(quizQuestions);

  quizTextHeader.textContent = "Fråga " + (playerAnswer.length + 1);
  quizText.textContent = quizQuestions[playerAnswer.length].questionText;

  for (
    let i = 0;
    i < quizQuestions[playerAnswer.length].questionAnswer.length;
    i++
  ) {
    checkBoxSelection[i].style.display = "inline-block";
    questionAnswerSelection[i].textContent =
      checkBoxSelection[i].value +
      quizQuestions[playerAnswer.length].questionAnswer[i];
  }
}

function nextQuestion() {
  let playerCheckBoxAnswer = [];
  for (
    let i = 0;
    i < quizQuestions[playerAnswer.length].questionAnswer.length;
    i++
  ) {
    playerCheckBoxAnswer[i] = checkBoxSelection[i].checked;
  }
  playerAnswer.push(playerCheckBoxAnswer);

  document.getElementById("answer1").checked = false;
  document.getElementById("answer2").checked = false;
  document.getElementById("answer3").checked = false;
  document.getElementById("answer4").checked = false;

  for (let i = 0; i < 4; i++) {
    checkBoxSelection[i].style.display = "none";
    questionAnswerSelection[i].textContent = "";
  }

  console.log(playerAnswer);
  if (playerAnswer.length > 11) {
    endQuiz();
  } else {
    quizTextHeader.textContent = "Fråga " + (playerAnswer.length + 1);
    quizText.textContent = quizQuestions[playerAnswer.length].questionText;

    for (
      let i = 0;
      i < quizQuestions[playerAnswer.length].questionAnswer.length;
      i++
    ) {
      checkBoxSelection[i].style.display = "inline-block";
      questionAnswerSelection[i].textContent =
        checkBoxSelection[i].value +
        quizQuestions[playerAnswer.length].questionAnswer[i];
    }
  }
}

function endQuiz() {
  let totPoint = 0;
  quizStartButton.style.display = "block";
  document.getElementById("answer1").checked = false;
  document.getElementById("answer2").checked = false;
  document.getElementById("answer3").checked = false;
  document.getElementById("answer4").checked = false;

  for (let i = 0; i < 4; i++) {
    checkBoxSelection[i].style.display = "none";
    questionAnswerSelection[i].textContent = "";
  }

  quizNextButton.style.display = "none";
  quizEndButton.style.display = "none";
  quizTextHeader.textContent = "";
  quizText.textContent = "";
  console.log("End of game");

  for (let i = 0; i < quizQuestions.length; i++) {
    if (i < playerAnswer.length) {
      let checkSolution = 0;
      let pointCounter = 0;
      for (let x = 0; x < quizQuestions[i].questionSolution.length; x++) {
        if (quizQuestions[i].questionSolution[x] === playerAnswer[i][x]) {
          if (playerAnswer[i][x] === true) {
            pointCounter++;
          }
          checkSolution++;
        }
      }
    }
  }
}
