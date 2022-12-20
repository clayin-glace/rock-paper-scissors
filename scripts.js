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
  //let playerInput = prompt("Please enter 'Rock', 'Paper', or 'Scissors': ");
  //playerSelection = caseCorrection(playerInput); //corrects capitalization
  
  
  player.textContent = "Player chose: " + playerSelection;
  computer.textContent = "Computer chose: " + computerSelection;

  console.log("Player: " + playerSelection);
  console.log("Computer: " + computerSelection);

  if (playerSelection == computerSelection) {
    ruling.textContent = "It's a tie!";
  } else if (playerSelection == "Rock") {
    switch(computerSelection) {
      case "Paper":
        computerScore++;
        ruling.textContent = "Paper beats Rock, YOU LOSE!";
        break;
      case "Scissors":
        playerScore++;
        ruling.textContent = "Rock beats Scissors, YOU WIN!";
        break;
    }
  } else if (playerSelection == "Paper") {
    switch(computerSelection) {
      case "Scissors":
        computerScore++;
        ruling.textContent = "Scissors beats Paper, YOU LOSE!";
        break;
      case "Rock":
        playerScore++;
        ruling.textContent = "Paper beats Rock, YOU WIN!";
        break;
    }
  } else if (playerSelection == "Scissors") {
    switch(computerSelection) {
      case "Rock":
        computerScore++;
        ruling.textContent = "Rock beats Scissors, YOU LOSE!";
        break;
      case "Paper":
        playerScore++;
        ruling.textContent = "Scissors beats Paper, YOU WIN!";
        break;
    }
  } else {
    gameRound--; //doesn't count as a game round
    return "Input unrecognized, please try again!";
  }

  scoreboard.textContent = "[Game #" + gameRound + "]" + " Player: " + playerScore +
  "-" + computerScore + " :Computer";

}

//game function with 5 rounds, score keeping, and winner declaration
/*
function game() {
  while (gameRound <= 4) { //for loop -> while loop to use gameRound
    gameRound++;
    console.log("[Game #" + gameRound + "]" + " Player: " + playerScore +
    "-" + computerScore + " :Computer");
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
*/

//converts player input into correct capitalization
/*
function caseCorrection(playerInput) {
  let firstCapLetter = playerInput.charAt().toUpperCase();
  //console.log(firstCapLetter);

  let restLowerLetters = playerInput.toLowerCase().slice(1, playerInput.length);
  //console.log(restLowerLetters);

  return firstCapLetter.concat(restLowerLetters);
}
*/

var playerSelection = "rock";

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
var player = document.getElementById("player-choice");
var computer = document.getElementById("computer-choice");
var scoreboard = document.getElementById("scoreboard");
var ruling = document.getElementById("ruling");

rock.addEventListener("click", e => {
  console.log(e.target);
  gameRound++;
  playRound("Rock", getComputerChoice())
});

paper.addEventListener("click", e => {
  console.log(e.target);
  gameRound++;
  playRound("Paper", getComputerChoice())
});

scissors.addEventListener("click", e => {
  console.log(e.target);
  gameRound++;
  playRound("Scissors", getComputerChoice())
});


let gameRound = 0;
let playerScore = 0;
let computerScore = 0;
