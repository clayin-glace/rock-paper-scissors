//Computer randomly returns Rock, Paper, or Scissors
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3 + 1); //random number between 1 and 3
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
  let playerChoice = prompt("Please enter 'Rock', 'Paper', or 'Scissors': ");
  playerChoice = caseCorrection(playerChoice); //replaces with correct capitalization
  console.log(playerChoice);

}

//converts player input into correct capitalization
function caseCorrection(playerChoice) {
  let firstCapLetter = playerChoice.charAt().toUpperCase();
  console.log(firstCapLetter);

  let restLowerLetter = playerChoice.toLowerCase().slice(1, playerChoice.length);


  console.log(restLowerLetter);
  return firstCapLetter.concat(restLowerLetter);
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound([playerSelection, computerSelection]));

//console.log(getComputerChoice());
