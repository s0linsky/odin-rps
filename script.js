function getComputerChoice() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }

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
