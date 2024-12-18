let darkModeButton = document.getElementById("darkModeButton");
darkModeButton.textContent = "Dark Mode";
let quizStartButton = document.getElementById("quizStartButton");
let checkBoxSelection = [4];
checkBoxSelection[0] = document.getElementById("checkBoxAnswer1");
checkBoxSelection[1] = document.getElementById("checkBoxAnswer2");
checkBoxSelection[2] = document.getElementById("checkBoxAnswer3");
checkBoxSelection[3] = document.getElementById("checkBoxAnswer4");
checkBoxSelection[0].style.display = "none";
checkBoxSelection[1].style.display = "none";
checkBoxSelection[2].style.display = "none";
checkBoxSelection[3].style.display = "none";
let radioButtonSelection = [2];
radioButtonSelection[0] = document.getElementById("radioButtonAnswer1");
radioButtonSelection[1] = document.getElementById("radioButtonAnswer2");
radioButtonSelection[0].style.display = "none";
radioButtonSelection[1].style.display = "none";
let quizNextButton = document.getElementById("quizNextButton");
quizNextButton.style.display = "none";
let quizEndButton = document.getElementById("quizEndButton");
quizEndButton.style.display = "none";
let quizTextHeader = document.querySelector("#quizTextHeader");
let quizText = document.querySelector("#quizText");
let questionAnswer;
const quizQuestionAnswerSelection = ["A", "B", "C", "D"];
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
let questionAnswerSelectionRadioButton = [2];
questionAnswerSelectionRadioButton[0] = document.querySelector(
  "#questionAnswerSelectionRadioButton1"
);
questionAnswerSelectionRadioButton[1] = document.querySelector(
  "#questionAnswerSelectionRadioButton2"
);

let playerAnswer = [];
let playerAnswerText = [];
let playerAnswerPoint = [];
const quizQuestions = [
  {
    questionText: "Hur många dagar är en vecka?",
    questionAnswer: ["3 dagar", "7,5 dagar", "5 dagar", "7 dagar"],
    questionSolution: [false, false, false, true],
    questionSolutionText: ["D"],
    questionPoints: 1,
  },
  {
    questionText: "Hur många timmar är en vecka",
    questionAnswer: ["128 timmar", "48 timmar", "168 timmar", "12 timmar"],
    questionSolution: [false, false, true, false],
    questionSolutionText: ["C"],
    questionPoints: 1,
  },
  {
    questionText: "Vilka dagar i veckan har klass FEND24 lektioner",
    questionAnswer: ["Måndag", "Fredag", "Tisdag", "Torsdag"],
    questionSolution: [false, false, true, true],
    questionSolutionText: ["C", "D"],
    questionPoints: 2,
  },
  {
    questionText: "Hur många minuter är en timme",
    questionAnswer: ["120 minuter", "60 minuter", "30 minuter", "256 minuter"],
    questionSolution: [false, true, false, false],
    questionSolutionText: ["B"],
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
    questionSolutionText: ["B", "D"],
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
    questionSolutionText: ["B", "C"],
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
    questionSolutionText: ["B", "C", "D"],
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
    questionSolutionText: ["A"],
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
    questionSolutionText: ["A", "D"],
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
    questionSolutionText: ["A", "C"],
    questionPoints: 2,
  },
  {
    questionText: "Det är 12 månader i ett år",
    questionAnswer: ["Det stämmer", "Det stämmer inte"],
    questionSolution: [true, false],
    questionSolutionText: ["A"],
    questionPoints: 1,
  },
  {
    questionText: "JavaScrip är roligt",
    questionAnswer: ["Det stämmer", "Det stämmer inte"],
    questionSolution: [true, false],
    questionSolutionText: ["A"],
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
  playerAnswer = [];
  playerAnswerText = [];
  playerAnswerPoint = [];
  quizStartButton.style.display = "none";
  quizNextButton.style.display = "inline-block";
  quizEndButton.style.display = "inline-block";
  quizTextHeader.style.color = "black";

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
  if (playerAnswer.length < 12) {
    if (playerAnswer.length > 9) {
      let playerRadioButtonAnswer = [];

      for (
        let i = 0;
        i < quizQuestions[playerAnswer.length].questionAnswer.length;
        i++
      ) {
        playerRadioButtonAnswer[i] = radioButtonSelection[i].checked;
      }

      playerAnswer.push(playerRadioButtonAnswer);

      document.getElementById("radioButtonAnswer1").checked = false;
      document.getElementById("radioButtonAnswer2").checked = false;

      for (let i = 0; i < 2; i++) {
        checkBoxSelection[i].style.display = "none";
        questionAnswerSelectionRadioButton[i].textContent = "";
      }
    } else {
      let playerCheckBoxAnswer = [];
      for (
        let i = 0;
        i < quizQuestions[playerAnswer.length].questionAnswer.length;
        i++
      ) {
        playerCheckBoxAnswer[i] = checkBoxSelection[i].checked;
      }
      playerAnswer.push(playerCheckBoxAnswer);

      document.getElementById("checkBoxAnswer1").checked = false;
      document.getElementById("checkBoxAnswer2").checked = false;
      document.getElementById("checkBoxAnswer3").checked = false;
      document.getElementById("checkBoxAnswer4").checked = false;

      for (let i = 0; i < 4; i++) {
        checkBoxSelection[i].style.display = "none";
        questionAnswerSelection[i].textContent = "";
      }
    }
  }

  if (playerAnswer.length > 11) {
    endQuiz();
  } else {
    if (playerAnswer.length > 9) {
      quizTextHeader.textContent = "Fråga " + (playerAnswer.length + 1);
      quizText.textContent = quizQuestions[playerAnswer.length].questionText;

      for (
        let i = 0;
        i < quizQuestions[playerAnswer.length].questionAnswer.length;
        i++
      ) {
        radioButtonSelection[i].style.display = "inline-block";
        questionAnswerSelectionRadioButton[i].textContent =
          radioButtonSelection[i].value +
          quizQuestions[playerAnswer.length].questionAnswer[i];
      }
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
}

function endQuiz() {
  let totQuizPoint = 0;
  let playerTotPoint = 0;
  let playerPoints = [];
  quizStartButton.style.display = "block";
  document.getElementById("checkBoxAnswer1").checked = false;
  document.getElementById("checkBoxAnswer2").checked = false;
  document.getElementById("checkBoxAnswer3").checked = false;
  document.getElementById("checkBoxAnswer4").checked = false;

  radioButtonSelection[0].style.display = "none";
  radioButtonSelection[1].style.display = "none";

  for (let i = 0; i < 4; i++) {
    checkBoxSelection[i].style.display = "none";
    questionAnswerSelection[i].textContent = "";
  }

  quizNextButton.style.display = "none";
  quizEndButton.style.display = "none";
  quizTextHeader.textContent = "";
  quizText.textContent = "";

  let checkSolution = 0;
  let quizQuestionPoint = 0;
  for (let i = 0; i < quizQuestions.length; i++) {
    totQuizPoint += quizQuestions[i].questionPoints;

    if (i < playerAnswer.length) {
      checkSolution = 0;
      quizQuestionPoint = 0;
      let playerAnswerTextTemp = "";

      for (let x = 0; x < quizQuestions[i].questionSolution.length; x++) {
        if (
          quizQuestions[i].questionSolution[x] !== playerAnswer[i][x] &&
          playerAnswer[i][x] === true
        ) {
          checkSolution++;
        }
        if (
          quizQuestions[i].questionSolution[x] === playerAnswer[i][x] &&
          playerAnswer[i][x] === true
        ) {
          quizQuestionPoint++;
        }
        if (playerAnswer[i][x] === true) {
          if (playerAnswerTextTemp === "") {
            playerAnswerTextTemp += quizQuestionAnswerSelection[x];
          } else {
            playerAnswerTextTemp += "," + quizQuestionAnswerSelection[x];
          }
        } else {
          playerAnswerTextTemp === "";
        }
      }

      if (playerAnswerTextTemp === "") {
        playerAnswerText[i] = "Ingen svar";
      } else {
        playerAnswerText[i] = playerAnswerTextTemp;
      }

      if (checkSolution === 0 && quizQuestionPoint > 0) {
        playerTotPoint += quizQuestionPoint;
        playerAnswerPoint[i] = quizQuestionPoint;
        if (quizQuestionPoint < quizQuestions[i].questionPoints) {
          playerPoints[i] = "Delvis rätt";
        } else {
          playerPoints[i] = "Alla rätt";
        }
      } else {
        playerPoints[i] = "Fel";
        playerAnswerPoint[i] = 0;
      }
    } else {
      playerPoints[i] = "Fel";
      playerAnswerPoint[i] = 0;
    }
  }

  if (playerTotPoint / totQuizPoint < 0.5) {
    quizTextHeader.style.color = "red";
  } else if (playerTotPoint / totQuizPoint > 0.75) {
    quizTextHeader.style.color = "green";
  } else {
    quizTextHeader.style.color = "orange";
  }

  quizTextHeader.innerText =
    "Ditt har fått " + playerTotPoint + " poäng av " + totQuizPoint;

  for (let i = 0; i < quizQuestions.length; i++) {
    const div = document.createElement("div");
    div.classList.add("quiz-score");
    div.innerText =
      "Fråga " +
      (i + 1) +
      ": " +
      playerPoints[i] +
      ". " +
      playerAnswerPoint[i] +
      " poäng ( Ditt svar: " +
      playerAnswerText[i] +
      " / rätt svar: " +
      quizQuestions[i].questionSolutionText +
      " )";
    quizText.append(div);
  }
}
