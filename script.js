function getComputerChoice() {
    const game = ["Rock", "Scissors", "Paper"];
    return game[Math.floor(Math.random() * 3)];
    
    
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection.length == 4 && computerSelection.length == 8){
        return "You Win"
        // return "You Lose! Rock beats Scissors";
    }
    else if (playerSelection.length == 8 && computerSelection.length == 4) {
        return "return You Lose! Rock beats Scissors"
    }
    else if (playerSelection.length == 5 && computerSelection.length == 8){
        return "You Lose! Scissors beats Paper";
    }
    else if (computerSelection.length == playerSelection.length){
        return "Tie";
    }
    else if (playerSelection.length < computerSelection.length) {
        return "You Lose! Paper beats Rock";
    }
    else if (playerSelection.length < computerSelection.length) {
        return "You Lose! Scissors beats Paper";
    }
    else if (playerSelection.length > computerSelection.length) {
        return "You win;"
    }
    else if (playerSelection.length > computerSelection.length){
        return "You Lose! Rock beats Scissors"
    }
    
    else {return "You win;"}
    

}

const playerSelection = prompt("Rock, Paper or Scissors");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
console.log(playerSelection.length);
console.log(computerSelection.length);