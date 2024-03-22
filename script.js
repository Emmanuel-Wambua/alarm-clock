//declarations

const choices = ["rock","paper","scissors"];
const playerDisplay = document.getElementById("playerChoice");
const computerDisplay = document.getElementById("computerChoice");
const outcomeDisplay = document.getElementById("outcome");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){  

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let outcome = "";

    if(playerChoice === computerChoice){
        return outcome = "IT'S A TIE"
    }
    else if(
    (playerChoice ==="rock" && computerChoice === "scissors" )||
    (playerChoice ==="scissors" && computerChoice === "paper")||
    (playerChoice ==="paper" && computerChoice === "rock"))
    {
        return outcome =  "YOU WIN" 
    }
    else if(
    (playerChoice ==="paper" && computerChoice === "scissors")||
    (playerChoice ==="rock" && computerChoice === "paper")||
    (playerChoice ==="scissors" && computerChoice === "rock"))
    {
        return outcome = "YOU LOSE"
    }


playerDisplay.textContent = `Player Pick: ${playerChoice}`;

computerDisplay.textContent = `Computer Pick: ${computerChoice}`;

outcomeDisplay.textContent = outcome;

    if(outcome === "YOU WIN"){
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    }
    else{
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }
}



