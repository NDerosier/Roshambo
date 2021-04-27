playerThrow = window.prompt('Rock, Paper, Scissors. Shoot!');

if (playerThrow.toLowerCase() === 'rock' || playerThrow.toLowerCase() == 'paper' || playerThrow.toLowerCase() == 'scissors') {
    console.log(playerThrow);
} else {
    console.log('Invalid Move');
}

function computerPlay(throws) {
    return throws[Math.floor(Math.random()*throws.length)];
}

const throws = ['Rock', 'Paper', 'Scissors'];


console.log(computerPlay(throws));
