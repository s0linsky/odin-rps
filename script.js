// A function that returns an integer between the minimum of 1 and the defined maximum
function getComputerChoice() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  // Return a random integer between 1 and 3
  // Depending on the integer returned, log the corresponding string
  let randomInt = getRandomInt(3);

  if (randomInt === 1) {
    console.log("Rock");
  } else if (randomInt === 2) {
    console.log("Paper");
  } else if (randomInt === 3) {
    console.log("Scissors");
  } else {
    console.log("Something went wrong..");
  }
}

getComputerChoice();
