function game() {

    function playRound(playerSelection, computerSelection) {

    //Check validity of player choice//
    if (playerSelection.toLowerCase() != 'rock' && playerSelection.toLowerCase() != 'paper' && playerSelection.toLowerCase() != 'scissors') {
            console.log('Invalid Move');
        } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        console.log("Tie! Try again")
        } else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') {
            playerScore++;
            console.log("You Win! Rock beats Scissors")
        } else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') {
            playerScore++;
            console.log("You Win! Paper beats Rock")
        } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper') {
            playerScore++;
            console.log("You Win! Scissors beats Paper")
        } else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper') {
            computerScore++;
            console.log("You Lose! Paper beats Rock")
        } else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors') {
            computerScore++;
            console.log("You Lose! Scissors beats Paper")
        } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'rock') {
            computerScore++;
            console.log("You Lose! Rock beats Rock")
        }
    
}
let playerScore = 0;
let computerScore = 0;
while (playerScore <= 2 && computerScore <= 2) {
    //Ask player for a Play in pop up box. And store as a variable//
    playerSelection = window.prompt('Rock, Paper, Scissors. Shoot!');

    //Determine at random computers play and store//
    function computerPlay(validThrows) {
        return computerSelection = validThrows[Math.floor(Math.random() * validThrows.length)];
    }

    const validThrows = ['Rock', 'Paper', 'Scissors'];

    //Compare player and computer plays//
    computerPlay(validThrows);
    console.log(playerSelection);
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);
    console.log(playerScore + " to " + computerScore);
}
}
let replayChoice = "";
let playerScore;
let computerScore;

    if (playerScore > 2) {
            replayChoice = window.prompt('Congratulation! You Win! Rematch? y/n');
        } else if (computerScore > 2) {
            replayChoice = window.prompt('Better Luck Next Time. Rematch? y/n');
        }

function rematchExe(replayChoice) {
    if (replayChoice.toLowerCase() === 'y') {
        game();
    } else if (replayChoice.toLowerCase() === 'n') {
        console.log('Good Game. Goodbye.');
    } /*else if (replayChoice.toLowerCase() != 'y' || replayChoice.toLowerCase() != 'n') {
        console.log('Please choose Y or N');
    }*/
}

game();
rematchExe(replayChoice);
