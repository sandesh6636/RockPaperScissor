let userScore = 0;
let computerScore = 0;

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const msg = document.querySelector("#msg");
// console.log(msg);
const getComputerChoice = () => {
  // rock paper scissor
  const options = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};
const drawMatch = () => {
  //   console.log("Game was  Draw Try again !!");
  msg.innerHTML = `Draw Play again !!`;
  msg.style.backgroundColor = "blue";
  //   drawMatch();
};

const displayWinner = (userWin, userChoiceId, computerChoice) => {
  if (userWin) {
    // console.log("You Winnnn!!!");
    userScore++;
    msg.innerHTML = `Youur ${userChoiceId} beats ${computerChoice}`;
    msg.style.backgroundColor = "green";
    userScorePara.innerHTML = userScore;
  } else {
    // console.log("Computer Winnnn!!!");
    computerScore++;
    msg.innerHTML = `Computer ${computerChoice} beats ${userChoiceId}`;
    msg.style.backgroundColor = "red";
    computerScorePara.innerHTML = computerScore;
  }
};

const playGame = (userChoiceId) => {
  //   console.log("User choice = ", userChoiceId);
  //Genetare Computer Choice  --> Modular
  const computerChoice = getComputerChoice();
  //   console.log("computer choice is = ", computerChoice);
  if (userChoiceId === computerChoice) {
    drawMatch();
    // console.log("Game draww");
  } else {
    let userWin = true;
    if (userChoiceId === "rock") {
      // computer -> paper , scissor
      userWin = computerChoice === "paper" ? false : true;
    } else if (userChoiceId === "paper") {
      //computer -> scissor , rock
      userWin = computerChoice === "scissor" ? true : false;
    } else {
      //user -> scissor
      // computer -> paper , rock
      userWin = computerChoice === "paper" ? true : false;
    }
    displayWinner(userWin, userChoiceId, computerChoice);
  }
};

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
  //   console.log(choice);
  choice.addEventListener("click", () => {
    const userChoiceId = choice.getAttribute("id");
    // console.log("Clicked", userChoiceId);
    playGame(userChoiceId);
  });
});
