// Select container div
const container = document.querySelector("#container");

// Create start div
const startDiv = document.createElement("div");
const startBtn = document.createElement("button");
startBtn.id = "show";
startBtn.classList.add("startButton");
startBtn.textContent = "START GAME";
startDiv.appendChild(startBtn);
container.appendChild(startDiv);

function listenForButtonClicks() {
  // Get all buttons on the page
  var buttons = document.getElementsByTagName("button");

  // Loop through the buttons and add a click event listener to each one
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (event) {
      // When a button is clicked, log the id of the button to the console
      console.log(event.target.id);
    });
  }
}

// Hide the start button after clicing it
function toggleStart() {
  let show = document.getElementById("show");
  show.classList.toggle("hide");
}

// Create the choices div
function createChoices() {
  // Create choices div
  const choices = document.createElement("div");
  choices.classList.add("choices");

  // Create rock div
  const rock = document.createElement("div");
  const rockBtn = document.createElement("button");
  rockBtn.textContent = "ROCK";
  rockBtn.classList.add = "choice";
  rockBtn.id = "rock";
  rockBtn.addEventListener("click", () => {
    game();
  });
  rock.appendChild(rockBtn);
  choices.appendChild(rock);

  // Create paper div
  const paper = document.createElement("div");
  const paperBtn = document.createElement("button");
  paperBtn.textContent = "PAPER";
  paperBtn.classList.add("choice");
  paperBtn.id = "paper";
  paperBtn.addEventListener("click", () => {
    game();
  });
  paper.appendChild(paperBtn);
  choices.appendChild(paper);

  // Create scissors div
  const scissors = document.createElement("div");
  const scissorsBtn = document.createElement("button");
  scissorsBtn.textContent = "SCISSORS";
  scissorsBtn.classList.add("choice");
  scissorsBtn.id = "scissors";
  scissorsBtn.addEventListener("click", () => {
    game();
  });
  scissors.appendChild(scissorsBtn);
  choices.appendChild(scissors);

  // Append choices to container
  container.appendChild(choices);

  listenForButtonClicks();
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
function playRound(cpuChoice) {
  let userChoice = selection;
  const userChoiceCap =
    userChoice.charAt(0).toUpperCase() + userChoice.slice(1);

  if (userChoiceCap == "Rock" && cpuChoice == "Scissors") {
    result = "Rock beats Scissors, player wins the round!";
    return result;
  } else if (userChoiceCap == "Paper" && cpuChoice == "Rock") {
    result = "Paper beats Rock, player wins the round!";
    return result;
  } else if (userChoiceCap == "Scissors" && cpuChoice == "Paper") {
    result = "Scissors beats Paper, player wins the round!";
    return result;
  } else if (cpuChoice == "Rock" && userChoiceCap == "Scissors") {
    result = "Rock beats Scissors.. CPU wins the round.";
    return result;
  } else if (cpuChoice == "Paper" && userChoiceCap == "Rock") {
    result = "Paper beats Rock.. CPU wins the round.";
    return result;
  } else if (cpuChoice == "Scissors" && userChoiceCap == "Paper") {
    result = "Scissors beats Paper.. CPU wins the round.";
    return result;
  } else if (userChoiceCap == cpuChoice) {
    result = "Draw!";
    return result;
  } else {
    result = "Something went wrong..";
    return result;
  }
}

function scoreBoard() {
  const scoreBox = document.createElement("div");
  const score = document.createElement("h1");
  scoreBox.id = "scoreBox";
  score.id = "score";
  scoreBox.style.height = "75px";
  scoreBox.style.width = "400px";
  scoreBox.style.backgroundColor = "red";
  scoreBox.style.color = "white";
  scoreBox.appendChild(score);
}

// // Create start button event listener
const startId = document.querySelector("#show");
startId.addEventListener("click", () => {
  toggleStart();
  createChoices();
});

// Play a game consisting of 5 rounds, most victories after 5 rounds wins the game
// If there is a draw, move on to the next round
// After each round, log the winner of the round
// After all rounds are complete, log the winner of the games
function game() {
  let playerScore = 0;
  let cpuScore = 0;
  let drawCount = 0;

  result = playRound(getComputerChoice());
  console.log(result);
  if (result.includes("player wins")) {
    playerScore++;
  } else if (result.includes("CPU wins")) {
    cpuScore++;
  } else if (result.includes("Draw")) {
    drawCount++;
  }

  if (playerScore > cpuScore) {
    console.log(
      "CPU Score: " + cpuScore + " || " + "Player Score: " + playerScore
    );
    console.log("Player Wins The Game!");
  } else if (cpuScore > playerScore) {
    console.log(
      "Player Score: " + playerScore + " || " + "CPU Score: " + cpuScore
    );
    console.log("CPU Wins The Game.");
  } else if (playerScore >= 1 && playerScore === cpuScore) {
    console.log(
      "Player Score: " +
        playerScore +
        " || " +
        "CPU Score: " +
        cpuScore +
        " ||  Number of Draws: " +
        drawCount
    );
    console.log("Tie game! Play again.");
  } else console.log("Play again.");
  score.textContent = `Score: Player ${playerScore} Cpu ${cpuScore}`;
  container.appendChild(scoreBox);
}
