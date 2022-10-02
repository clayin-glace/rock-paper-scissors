//Computer randomly returns Rock, Paper, or Scissors
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1; //random number between 1 and 3
  if (choice === 1) {
    return "Rock";
  } else if (choice === 2) {
    return "Paper";
  } else if (choice === 3) {
    return "Scissors";
  }
}

//Plays one round of RPS
function playRound(playerSelection, computerSelection) {
  let playerInput = prompt("Please enter 'Rock', 'Paper', or 'Scissors': ");
  playerSelection = caseCorrection(playerInput); //replaces with correct capitalization
  console.log("Player chose: " + playerSelection);
  console.log("Computer chose: " + computerSelection);

  if (playerSelection == computerSelection) {
    return "It's a tie!";
  } else if (playerSelection == "Rock") {
    switch(computerSelection) {
      case "Paper":
        return "Paper beats Rock, YOU LOSE!";
        break;
      case "Scissor":
        return "Rock beats Scissor, YOU WIN!"
        break;
    }
  } else if (playerSelection == "Paper") {
    switch(computerSelection) {
      case "Scissors":
        return "Scissors beats Paper, YOU LOSE!";
        break;
      case "Rock":
        return "Paper beats Rock, YOU WIN!"
        break;
    }
  } else if (playerSelection == "Scissors") {
    switch(computerSelection) {
      case "Rock":
        return "Rock beats Scissors, YOU LOSE!";
        break;
      case "Paper":
        return "Scissors beats Paper, YOU WIN!"
        break;
    }
  } else {
    return "Input unrecognized, please try again!";
  }
}

//game function with 5 rounds, score keeping, and winner declaration
function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    playRound();
  }
}


//converts player input into correct capitalization
function caseCorrection(playerInput) {
  let firstCapLetter = playerInput.charAt().toUpperCase();
  //console.log(firstCapLetter);

  let restLowerLetter = playerInput.toLowerCase().slice(1, playerInput.length);
  //console.log(restLowerLetter);

  return firstCapLetter.concat(restLowerLetter);
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));



//remember correct commit message phrasing (no past tense)