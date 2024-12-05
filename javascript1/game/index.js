let changeTeamANameInput = document.querySelector("#changeTeamAName");
let changeTeamBNameInput = document.querySelector("#changeTeamBName");

let changeTeamANameBtn = document.querySelector("#changeTeamANameBtn");
let changeTeamBNameBtn = document.querySelector("#changeTeamBNameBtn");

let teamAName = document.querySelector("#teamAName");
let teamBName = document.querySelector("#teamBName");

let teamAList = document.querySelector("#teamAList");
let teamBList = document.querySelector("#teamBList");

let addPlayerInput = document.querySelector("#addPlayer");
let addPlayerBtn = document.querySelector("#addPlayerBtn");

changeTeamANameBtn.addEventListener("click", () => {
  console.log("hej");
  teamAName.textContent = changeTeamANameInput.value;

  console.log(teamAName);
  teamAName.value = "";
});

changeTeamBNameBtn.addEventListener("click", () => {
  console.log("hej");
  teamBName.textContent = changeTeamBNameInput.value;

  console.log(teamBName);
  teamBName.value = "";
});

addPlayerBtn.addEventListener("click", () => {
  let li = document.createElement("li");
  li.innerText = addPlayerInput.value;

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  li.append(deleteBtn);

  deleteBtn.addEventListener("click", (event) => {
    event.target.parentElement.remove();
  });

  let changeBtn = document.createElement("button");
  changeBtn.textContent = "Change";
  li.append(changeBtn);

  changeBtn.addEventListener("click", () => {
    let playerTeam = changeBtn.parentElement.parentElement.id;
    if (playerTeam === teamAList.id) {
      if (document.querySelectorAll("#teamBList li").length < 5) {
        let li = changeBtn.parentElement;
        console.log(changeBtn.parentElement);
        teamBList.append(li);
      } else {
        alert("Team B is full");
      }
    } else {
      if (document.querySelectorAll("#teamAList li").length < 5) {
        let li = changeBtn.parentElement;
        teamAList.append(li);
      } else {
        alert("Team A is full");
      }
    }
  });

  if (document.querySelectorAll("#teamAList li").length < 5) {
    teamAList.append(li);
  } else if (document.querySelectorAll("#teamBList li").length < 5) {
    teamBList.append(li);
  } else {
    alert("List Full");
  }

  addPlayerInput.value = "";
});
