let humanScore = 0;
let computerScore = 0;
const win = "You win ";
const lose = "You lose ";

function getComputerChoice() {
  const tab = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * tab.length);
  return tab[index];
}

function getHumanChoice() {
  const question = prompt("rock paper or scissors ?");
  return question.toLowerCase();
}

//TODO simplifier
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock" && computerChoice == "paper") {
    computerScore++;
    return lose + computerChoice + " beats " + humanChoice;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore++;
    return win + humanChoice + " beats " + computerChoice;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    computerScore++;
    return lose + computerChoice + " beats " + humanChoice;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    humanScore++;
    return win + humanChoice + " beats " + computerChoice;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    computerScore++;
    return lose + computerChoice + " beats " + humanChoice;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore++;
    return win + humanChoice + " beats " + computerChoice;
  } else if (humanChoice == computerChoice) {
    return "Egality";
  } else return "Error";
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(getHumanChoice(), getComputerChoice()));
  }
  if (humanScore > computerScore) {
    return console.log("Human is winner");
  } else if (computerScore > humanScore) {
    return console.log("Computer is winner");
  }
  return console.log("Egality");
}

playGame();
