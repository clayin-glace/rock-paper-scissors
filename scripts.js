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
        computerScore++;
        return "Paper beats Rock, YOU LOSE!";
      case "Scissors":
        playerScore++;
        return "Rock beats Scissors, YOU WIN!";
    }
  } else if (playerSelection == "Paper") {
    switch(computerSelection) {
      case "Scissors":
        computerScore++;
        return "Scissors beats Paper, YOU LOSE!";
      case "Rock":
        playerScore++;
        return "Paper beats Rock, YOU WIN!";
    }
  } else if (playerSelection == "Scissors") {
    switch(computerSelection) {
      case "Rock":
        computerScore++;
        return "Rock beats Scissors, YOU LOSE!";
      case "Paper":
        playerScore;
        return "Scissors beats Paper, YOU WIN!";
    }
  } else {
    gameRound--; //doesn't count as a game round
    return "Input unrecognized, please try again!";
  }
}

//game function with 5 rounds, score keeping, and winner declaration
function game() {
  while (gameRound <= 4) { //for loop -> while loop to use gameRound
    gameRound++;
    console.log("[Game #" + gameRound + "]" + " Player: " + playerScore + "-" + computerScore + " :Computer");
    computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
  
  console.log("Player: " + playerScore + "-" + computerScore + " :Computer"); 

  if (playerScore > computerScore) {
    return "CONGRATULATIONS! YOU WON THE GAME";
  } else if (playerScore < computerScore) {
    return "GAMEOVER! COMPUTER WINS";
  } else {
    return "NOBODY WINS?";
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

let gameRound = 0;
let playerScore = 0;
let computerScore = 0;
console.log(game());