// Initialize global variables
let playerScore = "";
let cpuScore = "";
let roundDescription = "";
let gameWinner = "";

// Get the button selection
function getBtnSelection(e) {
  selection = e.target.id;
  return selection;
}

// Container selector
const container = document.querySelector(".container");

// Start button selector
const startBtn = document.querySelector(".start");

// Reset button selector
const reset = document.querySelector("#reset");

// Create reset button
function createReset() {
  const resetBtn = document.createElement("button");
  resetBtn.classList.add("reset");
  resetBtn.id = "show";
  resetBtn.innerText = "RESET";
  container.appendChild(resetBtn);
  // Create reset button event listener
  const resetClass = document.querySelector(".reset");
  resetClass.addEventListener("click", () => {
    location.reload();
  });
}

// Create start button event listener
const startId = document.querySelector("#show");
startId.addEventListener("click", () => {
  toggleStart();
  createChoices();
  createScoreBoard();
  createReset();
});

// Toggle show/hide start button
function toggleStart() {
  let show = document.getElementById("show");
  show.classList.toggle("hide");
}

function toggleChoices() {
  let rock = document.getElementById("rock");
  let paper = document.getElementById("paper");
  let scissors = document.getElementById("scissors");
  rock.classList.toggle("hide");
  paper.classList.toggle("hide");
  scissors.classList.toggle("hide");
}

// Create the btnChoices div
function createChoices() {
  const btnChoices = document.createElement("div");
  btnChoices.classList.add("choices");

  // Create rock button
  const rockAnchor = document.createElement("a");
  const rockBtn = document.createElement("img");
  rockBtn.setAttribute("src", "./imgs/rock.png");
  rockBtn.id = "rock";
  rockBtn.classList.add("choice");
  rockBtn.addEventListener("click", (e) => {
    playRound(e);
  });
  rockAnchor.appendChild(rockBtn);
  btnChoices.appendChild(rockAnchor);

  // Create paper button
  const paperAnchor = document.createElement("a");
  const paperBtn = document.createElement("img");
  paperBtn.setAttribute("src", "./imgs/Paper.png");
  paperBtn.id = "paper";
  paperBtn.classList.add("choice");
  paperBtn.addEventListener("click", (e) => {
    playRound(e);
  });
  paperAnchor.appendChild(paperBtn);
  btnChoices.appendChild(paperAnchor);

  // Create scissors button
  const scissorsAnchor = document.createElement("a");
  const scissorsBtn = document.createElement("img");
  scissorsBtn.setAttribute("src", "./imgs/Scissors.png");
  scissorsBtn.id = "scissors";
  scissorsBtn.classList.add("choice");
  scissorsBtn.addEventListener("click", (e) => {
    playRound(e);
  });
  scissorsAnchor.appendChild(scissorsBtn);
  btnChoices.appendChild(scissorsAnchor);

  // Append btnChoices to container
  container.appendChild(btnChoices);
}

// A function that returns an integer between the minimum of 1 and the defined maximum
function getComputerChoice() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  // Return a random integer between 1 and 3
  // Depending on the integer returned, log the corresponding string
  let randomInt = getRandomInt(3);

  if (randomInt === 1) {
    return "Rock";
  } else if (randomInt === 2) {
    return "Paper";
  } else if (randomInt === 3) {
    return "Scissors";
  } else {
    console.log("Something went wrong..");
  }
}

// Play a single round between the player's choice and the computer's choice
// Return the results of the round
function playRound(e) {
  let userChoice = getBtnSelection(e);
  let cpuChoice = getComputerChoice();
  const userChoiceCap =
    userChoice.charAt(0).toUpperCase() + userChoice.slice(1);

  if (userChoiceCap == "Rock" && cpuChoice == "Scissors") {
    playerScore++;
    roundDescription = "Rock beats Scissors, player won the round!";
    if (playerScore === 5) {
      checkForWinner(playerScore);
    }
    scoreUpdater(roundDescription);
    return playerScore;
  } else if (userChoiceCap == "Paper" && cpuChoice == "Rock") {
    playerScore++;
    roundDescription = "Paper beats Rock, player won the round!";
    if (playerScore === 5) {
      checkForWinner(playerScore);
    }
    scoreUpdater(roundDescription);
    return playerScore;
  } else if (userChoiceCap == "Scissors" && cpuChoice == "Paper") {
    playerScore++;
    roundDescription = "Scissors beats Paper, player won the round!";
    if (playerScore === 5) {
      checkForWinner(playerScore);
    }
    scoreUpdater(roundDescription);
    return playerScore;
  } else if (cpuChoice == "Rock" && userChoiceCap == "Scissors") {
    cpuScore++;
    roundDescription = "Rock beats Scissors.. CPU won the round.";
    if (cpuScore === 5) {
      checkForWinner(cpuScore);
    }
    scoreUpdater(roundDescription);
    return cpuScore;
  } else if (cpuChoice == "Paper" && userChoiceCap == "Rock") {
    cpuScore++;
    roundDescription = "Paper beats Rock.. CPU won the round.";
    if (cpuScore === 5) {
      checkForWinner(cpuScore);
    }
    scoreUpdater(roundDescription);
    return cpuScore;
  } else if (cpuChoice == "Scissors" && userChoiceCap == "Paper") {
    cpuScore++;
    roundDescription = "Scissors beats Paper.. CPU won the round.";
    if (cpuScore === 5) {
      checkForWinner(cpuScore);
    }
    scoreUpdater(roundDescription);
    return cpuScore;
  } else if (userChoiceCap == cpuChoice) {
    roundDescription = "Draw!";
    scoreUpdater(roundDescription);
    return;
  } else {
    roundDescription = "Something went wrong..";
    scoreUpdater(roundDescription);
    return;
  }
}

// Create the score board
function createScoreBoard() {
  const scoreBoard = document.createElement("div");
  const playerScoreCount = document.createElement("h4");
  const cpuScoreCount = document.createElement("h4");
  const roundDescription = document.createElement("p");
  const theWinner = document.createElement("p");
  scoreBoard.id = "board";
  playerScoreCount.id = "playerScore";
  cpuScoreCount.id = "cpuScore";
  roundDescription.id = "description";
  theWinner.id = "gameWinner";
  playerScoreCount.innerText = `Player Score: ${playerScore}`;
  cpuScoreCount.innerText = `CPU Score: ${cpuScore}`;
  scoreBoard.appendChild(playerScoreCount);
  scoreBoard.appendChild(cpuScoreCount);
  scoreBoard.appendChild(roundDescription);
  scoreBoard.appendChild(theWinner);
  container.appendChild(scoreBoard);
  scoreUpdater(playerScoreCount, cpuScoreCount, roundDescription, theWinner);
}

// Update the score
function scoreUpdater() {
  let pscore = document.getElementById("playerScore");
  let cscore = document.getElementById("cpuScore");
  let board = document.getElementById("board");
  let description = document.getElementById("description");
  let winner = document.getElementById("gameWinner");
  pscore.innerText = `Player Score: ${playerScore}`;
  cscore.innerText = `CPU Score: ${cpuScore}`;
  description.innerText = `${roundDescription}`;
  winner.innerText = `${gameWinner}`;
  board.appendChild(pscore);
  board.appendChild(cscore);
  board.appendChild(description);
  board.appendChild(winner);
}

// Check to see if either player or cpu have a score of 5
// If either has a score of 5 + a higher score than the other
// Display the score and declare a winner
function checkForWinner() {
  if (playerScore > cpuScore) {
    gameWinner = "Player Wins The Game!";
    toggleChoices();
  } else if (cpuScore > playerScore) {
    gameWinner = "CPU Wins The Game.";
    toggleChoices();
  }
}
