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

//const computerChoice = getComputerChoice();
//console.log(computerChoice);