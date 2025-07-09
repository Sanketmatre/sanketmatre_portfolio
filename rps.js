let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#rps-msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencomputerchoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIndx = Math.floor(Math.random() * 3);
  return options[randIndx];
};

const drawgame = () => {
  msg.innerText = "Game was a draw. Play again!";
  msg.style.backgroundColor = "black";
};

const showwinner = (userwin, userchoice, compChoice) => {
  if (userwin) {
    userScore++;
    userscorepara.innerText = userScore;
    msg.innerText = `You win! Your ${userchoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compscorepara.innerText = compScore;
    msg.innerText = `You lose! ${compChoice} beats ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playgame = (userchoice) => {
  const compChoice = gencomputerchoice();

  if (userchoice === compChoice) {
    drawgame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = compChoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = compChoice === "scissors" ? false : true;
    } else {
      userwin = compChoice === "rock" ? false : true;
    }
    showwinner(userwin, userchoice, compChoice);
  }
};

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});
