function getComputerChoice() {
    const game = [" Rock", " Scissors", " Paper"];
    return game[Math.floor(Math.random() * 3)];
    
    
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        playerSelection = button.innerText;
        let computerSelection = getComputerChoice();
        const para = document.querySelector('p');
        const result = document.createElement("div");
        const choose1 = document.createElement("div"); 
        const choose2 = document.createElement("div"); 
        para.appendChild(choose1);
        para.appendChild(choose2);
        para.appendChild(result);
        result.style.color = 'Blue';
        result.textContent = playRound(playerSelection, computerSelection);
        choose1.textContent = "You choose " + playerSelection;
        choose2.textContent = "Computer choose " + computerSelection;
        console.log(playerSelection);
        console.log(computerSelection);
        console.log(playerSelection.length);
        console.log(computerSelection.length);
        
    });
});


function playRound(playerSelection, computerSelection) {
    if (playerSelection.length == 5 && computerSelection.length == 9){
        return "You Win";
        // return "You Lose! Rock beats Scissors";
    }
    else if (playerSelection.length == 9 && computerSelection.length == 5) {
        return "return You Lose! Rock beats Scissors";
    }
    else if (playerSelection.length == 6 && computerSelection.length == 9){
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
        return "You win";
    }
    else if (playerSelection.length > computerSelection.length){
        return "You Lose! Rock beats Scissors"
    }
    
    else {return "You win;"}
    

}





