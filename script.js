const choices = ["rock", "paper", "scissors"]

function game() {
    playRound();
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
}

function playerChoice() {
    let input = prompt("Type, Rock, Paper, or Scissors");
    while(input == null){
        input = prompt("Type, Rock, Paper, or Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    if(check == true){
        console.log(input);
    }
    console.log(input);
}

function computerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function validateInput(choice) {
    if(choices.includes(choice)){
        return true;
    }
    else {
        return false;
    }
}






























/*
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();

    if (playerChoice === computerSelection) {
        return "It's a tie! Play again.";
    }

    if (
        (playerChoice === 'rock' && computerSelection === 'scissors') ||
        (playerChoice === 'paper' && computerSelection === 'rock') ||
        (playerChoice === 'scissors' && computerSelection === 'paper')
    ) {
        return `You Win! ${playerChoice} beats ${computerSelection}.`;
    }

    return `You Lose! ${computerSelection} beats ${playerChoice}.`;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
        const computerSelection = getComputerChoice();

        const result = playRound(playerSelection, computerSelection);
        console.log(`Round ${round}: ${result}`);

        if (result.includes('Win')) {
            playerScore++;
        } else if (result.includes('Lose')) {
            computerScore++;
        }
    }

    // Determine the overall winner
    if (playerScore > computerScore) {
        console.log(`Congratulations! You win the game with a score of ${playerScore}-${computerScore}.`);
    } else if (playerScore < computerScore) {
        console.log(`Sorry! You lose the game with a score of ${playerScore}-${computerScore}.`);
    } else {
        console.log("It's a tie game!");
    }
}

// Start the game
game();
*/