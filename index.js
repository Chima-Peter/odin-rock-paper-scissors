function getComputerChoice() {
    let computer = Math.floor(Math.random() * 3);
    if (computer === 0) {
        return "ROCK";
    } else if (computer === 1) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

function getPlayerChoice() {
    let player = prompt("Rock, Paper, Scissors ?");
    player = player.toLocaleUpperCase();
    if (player === 'ROCK' || player === 'SCISSORS' || player === 'PAPER') {
        return player;
    }
    alert('Enter valid option');
}
function playGame(playerSelection, computerSelection) {
    console.log('You picked', playerSelection);
    console.log('Computer picked', computerSelection);
    if (playerSelection === computerSelection) {
        console.log("You drew a tie with computer. Replay");
    }
    else if (playerSelection === 'ROCK') {
        if (computerSelection === 'SCISSORS') {
            console.log('You win, Rock beats Scissors');
        } else {
            console.log('You lose, Paper beats Rock');
        }
    } else if (playerSelection === 'SCISSORS') {
        if (computerSelection === 'ROCK') {
            console.log('You lose, Rock beats Scissors');
        }
        else {
            console.log('You win, Scissors beats Paper')
        }
    } else if (playerSelection === 'PAPER') {
        if (computerSelection === 'ROCK') {
            console.log('You win, Paper beats Rock');
        }
        else {
            console.log('You lose, Scissors beats Paper');
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playGame(getPlayerChoice(), getComputerChoice())
    }
}

game();

