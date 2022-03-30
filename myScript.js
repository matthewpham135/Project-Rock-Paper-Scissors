const rockbutton = document.querySelector('.rock-button');
const paperbutton = document.querySelector('.paper-button');
const scissorsbutton = document.querySelector('.scissors-button');

rockbutton.addEventListener('click',function(){
    game("rock");
});
paperbutton.addEventListener('click',function(){
    game("paper");
});
scissorsbutton.addEventListener('click',function(){
    game("scissors");
});

//game();


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

let playerScore = 0;
let compScore = 0;
function game(playerSelection){
    

        //let playerSelection = prompt("Make a decision: ");
        //playerSelection = playerSelection.toLowerCase();
        const computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        if (result.includes("Win"))
            playerScore++;
        else if(result.includes("TIE")){
        }
        else 
            compScore++;
        
        //console.log(result);
        document.getElementById('result').innerHTML = result;
        document.getElementById('score').innerHTML = playerScore + " - " + compScore;

        if(playerScore == 5){
            document.getElementById('result').innerHTML = "PLAYER WINS!";
        }
        if(compScore == 5){
            document.getElementById('result').innerHTML = "COMPUTER WINS!";
        }
        //console.log(playerScore + " " + compScore);
    /*
    if(playerScore > compScore)
        console.log("YOU WIN!");
    else if(playerScore < compScore)
        console.log("YOU LOSE");
    else
        console.log("TIE");
        */
}

