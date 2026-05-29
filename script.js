let humanScore = 0;
let computerScore = 0;
const win = "You win ";
const lose = "You lose ";

function getComputerChoice() {
  const tab = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * tab.length);
  return tab[index];
}

//TODO simplifier
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

document.getElementById("btn-rock").addEventListener("click", function () {
  document.getElementById("result").textContent = playRound(
    "rock",
    getComputerChoice(),
  );
  document.getElementById("score-human").textContent = humanScore;
  document.getElementById("score-computer").textContent = computerScore;
  if (humanScore === 5 || computerScore === 5) {
    humanScore === 5 ? alert("You win !") : alert("You lose...");
    humanScore = 0;
    computerScore = 0;
    document.getElementById("score-human").textContent = 0;
    document.getElementById("score-computer").textContent = 0;
  }
});

document.getElementById("btn-paper").addEventListener("click", function () {
  document.getElementById("result").textContent = playRound(
    "paper",
    getComputerChoice(),
  );
  document.getElementById("score-human").textContent = humanScore;
  document.getElementById("score-computer").textContent = computerScore;
  if (humanScore === 5 || computerScore === 5) {
    humanScore === 5 ? alert("You win !") : alert("You lose...");
    humanScore = 0;
    computerScore = 0;
    document.getElementById("score-human").textContent = 0;
    document.getElementById("score-computer").textContent = 0;
  }
});

document.getElementById("btn-scissors").addEventListener("click", function () {
  document.getElementById("result").textContent = playRound(
    "scissors",
    getComputerChoice(),
  );
  document.getElementById("score-human").textContent = humanScore;
  document.getElementById("score-computer").textContent = computerScore;
  if (humanScore === 5 || computerScore === 5) {
    humanScore === 5 ? alert("You win !") : alert("You lose...");
    humanScore = 0;
    computerScore = 0;
    document.getElementById("score-human").textContent = 0;
    document.getElementById("score-computer").textContent = 0;
  }
});

document.getElementById("reset").addEventListener("click", function () {
  humanScore = 0;
  computerScore = 0;
  document.getElementById("score-human").textContent = 0;
  document.getElementById("score-computer").textContent = 0;
  document.getElementById("result").textContent = "";
});
