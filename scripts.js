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
  let playerInput = prompt("Please enter 'Rock', 'Paper', or 'Scissors': ");
  playerSelection = caseCorrection(playerInput); //replaces with correct capitalization
  console.log(playerSelection);

}

//converts player input into correct capitalization
function caseCorrection(playerInput) {
  let firstCapLetter = playerInput.charAt().toUpperCase();
  console.log(firstCapLetter);

  let restLowerLetter = playerInput.toLowerCase().slice(1, playerInput.length);


  console.log(restLowerLetter);
  return firstCapLetter.concat(restLowerLetter);
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound([playerSelection, computerSelection]));

//console.log(getComputerChoice());
