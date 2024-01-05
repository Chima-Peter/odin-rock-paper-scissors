// function to get the computer's choice
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

// fucntion to play the actual rock paper scissors game
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
let container = document.querySelector("#container");
container.addEventListener('click', (event) => {
    switch(event.target.id) {
        case 'rock':
            playGame('rock', getComputerChoice());
            break;
        case 'paper':
            playGame('paper', getComputerChoice());
            break;
        case 'scissors':
            playGame('scissors', getComputerChoice());
            break;
    }
})