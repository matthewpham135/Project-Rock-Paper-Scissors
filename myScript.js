
game();


function computerPlay(){
    let decision = Math.floor(Math.random() * 3);
    if(decision == 0){
        return "rock";
    }
    else if(decision == 1){
        return "paper";
    }
    else
        return "scissors";
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        return "TIE"
    }
    else if(playerSelection == "rock"){
        if(computerSelection == "scissors"){
            return "Rock beats Scissors. You Win!";
        }
        else 
            return "Paper beats Rock. You lose!";
    }
    else if(playerSelection == "paper"){
        if(computerSelection == "rock"){
            return "Paper beats Rock. You Win!";
        }
        else 
            return "Scissors beats Paper. You lose!";
    }
    else{
        if(computerSelection == "paper"){
            return "Scissors beats Paper. You Win!"
        }
        else    
            return "Rock beats Scissors. You lose!"
    }
}

function game(){
    let playerScore = 0;
    let compScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Make a decision: ");
        playerSelection = playerSelection.toLowerCase();
        const computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        if (result.includes("Win"))
            playerScore++;
        else if(result.includes("TIE")){
            break;
        }
        else 
            compScore++;
        
        console.log(result);
        console.log(playerScore + " " + compScore);
    }
    if(playerScore > compScore)
        console.log("YOU WIN!");
    else if(playerScore < compScore)
        console.log("YOU LOSE");
    else
        console.log("TIE");
}

