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

// Play a single round between the players choice and the computers choice
// Return the results of the round
function playRound(cpuChoice) {
  let userChoice = prompt("Rock, Paper or Scissors?");

  if (userChoice == "Rock" && cpuChoice == "Scissors") {
    result = "Rock beats Scissors, player wins the round!";
    return result;
  } else if (userChoice == "Paper" && cpuChoice == "Rock") {
    result = "Paper beats Rock, player wins the round!";
    return result;
  } else if (userChoice == "Scissors" && cpuChoice == "Paper") {
    result = "Scissors beats Paper, player wins the round!";
    return result;
  } else if (cpuChoice == "Rock" && userChoice == "Scissors") {
    result = "Rock beats Scissors.. CPU wins the round.";
    return result;
  } else if (cpuChoice == "Paper" && userChoice == "Rock") {
    result = "Paper beats Rock.. CPU wins the round.";
    return result;
  } else if (cpuChoice == "Scissors" && userChoice == "Paper") {
    result = "Scissors beats Paper.. CPU wins the round.";
    return result;
  } else if (userChoice == cpuChoice) {
    result = "Draw!";
    return result;
  } else {
    result = "Something went wrong..";
    return result;
  }
}

// Play a game consisting of 5 single rounds
// If there is a draw, move on to the next round
// After 5 rounds, the most victories wins the game
// After each round, log the winner of the round
// After all rounds are complete, log the winner of the games
function game() {
  let playerScore = 0;
  let cpuScore = 0;

  for (let i = 0; i < 5; i++) {
    result = playRound(getComputerChoice());
    console.log(result);
    if (result.includes("player wins")) {
      playerScore++;
      console.log("Player Score: " + playerScore);
    } else if (result.includes("CPU wins")) {
      cpuScore++;
      console.log("CPU Score: " + cpuScore);
    }
  }

  if (playerScore > cpuScore) {
    console.log("Player Wins The Game!");
  } else if (cpuScore > playerScore) {
    console.log("CPU Wins The Game.");
  } else if (playerScore >= 1 && playerScore === cpuScore) {
    console.log("Tie game! Play again.");
  } else console.log("Something went wrong. Play again.");
}

game();
