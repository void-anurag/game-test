function getComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3);

    switch(randomNumber){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            null; 
    }
}
const computerSelection = getComputerChoice();

function play_a_round(playerSelection, computerSelection){
    const playerChoice = playerSelection.toLowerCase();

    if (playerChoice === computerSelection.toLowerCase()){
        return "It's a tie. Play again!";
    }

    if(
        (playerChoice === 'rock' && computerSelection === 'scissors') ||
        (playerChoice === 'paper' && computerSelection === 'rock') ||
        (playerChoice === 'scissors' && computerSelection === 'paper')
        )
        {
            return 'You Win! ${playerChoice} beats ${computerSelection}.';
        }
        
        return 'You Lose. ${computerSelection} beats ${playerChoice}.';
}

const playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
console.log(play_a_round(playerSelection, computerSelection));

function isGameOver(){
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) {
            return "You Win! Thanks for playing"; 
        }
        else {
            return "You Lose! Thanks for playing"; 
        }
    }
    return '';
}
//const computerChoice = getComputerChoice();
//console.log(computerChoice);