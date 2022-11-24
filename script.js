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
function playRound(playerChoice, cpuChoice) {
  let userChoice = playerChoice;
  let computerChoice = cpuChoice;
  let result = "";

  if (userChoice == "Rock" && cpuChoice == "Scissors") {
    result = "Rock beats Scissors, player wins!";
    return result;
  } else if (userChoice == "Scissors" && cpuChoice == "Paper") {
    result = "Scissors beats Paper, player wins!";
    return result;
  } else if (userChoice == "Paper" && cpuChoice == "Rock") {
    result = "Paper beats Rock, player wins!";
    return result;
  } else if (cpuChoice == "Rock" && userChoice == "Scissors") {
    result = "Rock beats Scissors.. CPU wins.";
    return result;
  } else if (cpuChoice == "Scissors" && userChoice == "Paper") {
    result = "Scissors beats Paper.. CPU wins.";
    return result;
  } else if (cpuChoice == "Paper" && userChoice == "Rock") {
    result = "Paper beats Rock.. CPU wins.";
    return result;
  } else if (userChoice == cpuChoice) {
    result = "Draw! Please play again.";
    return result;
  } else {
    result = "Something went wrong..";
    return result;
  }
}

function game() {
  for (let i = 0; i < 6; i++) {
    let result = playRound("Rock", getComputerChoice());
    return result;
  }
}

console.log(game());
