const container = document.querySelector("#container");

// Create choices div
const choices = document.createElement("div");
choices.classList.add("choices");

// Create rock div
const rock = document.createElement("div");
rock.classList.add("rock");
const rockBtn = document.createElement("button");
rockBtn.id = "rock";
rockBtn.textContent = "ROCK";
rock.appendChild(rockBtn);
choices.appendChild(rock);

// Create paper div
const paper = document.createElement("div");
paper.classList.add("paper");
const paperBtn = document.createElement("button");
paperBtn.id = "paper";
paperBtn.textContent = "PAPER";
paper.appendChild(paperBtn);
choices.appendChild(paper);

// Create scissors div
const scissors = document.createElement("div");
scissors.classList.add("scissors");
const scissorsBtn = document.createElement("button");
scissorsBtn.id = "scissors";
scissorsBtn.textContent = "SCISSORS";
scissors.appendChild(scissorsBtn);
choices.appendChild(scissors);

// Append choices to container
container.appendChild(choices);

// const buttons = document.querySelectorAll("button");
// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     alert("Clicked!");
//   });
// });

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
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log(button.id);
    });
  });

  let userChoice = 
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

// Play a game consisting of 5 rounds, most victories after 5 rounds wins the game
// If there is a draw, move on to the next round
// After each round, log the winner of the round
// After all rounds are complete, log the winner of the games
// function game() {
//   let playerScore = 0;
//   let cpuScore = 0;
//   let drawCount = 0;

//   result = playRound(getComputerChoice());
//   console.log(result);
//   if (result.includes("player wins")) {
//     playerScore++;
//   } else if (result.includes("CPU wins")) {
//     cpuScore++;
//   } else if (result.includes("Draw")) {
//     drawCount++;
//   }

//   if (playerScore > cpuScore) {
//     console.log(
//       "CPU Score: " + cpuScore + " || " + "Player Score: " + playerScore
//     );
//     console.log("Player Wins The Game!");
//   } else if (cpuScore > playerScore) {
//     console.log(
//       "Player Score: " + playerScore + " || " + "CPU Score: " + cpuScore
//     );
//     console.log("CPU Wins The Game.");
//   } else if (playerScore >= 1 && playerScore === cpuScore) {
//     console.log(
//       "Player Score: " +
//         playerScore +
//         " || " +
//         "CPU Score: " +
//         cpuScore +
//         " ||  Number of Draws: " +
//         drawCount
//     );
//     console.log("Tie game! Play again.");
//   } else console.log("Something went wrong. Play again.");
// }

// game();
