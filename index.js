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
    if (playerSelection === computerSelection) {
        para.textContent = "You drew a tie with computer. Replay";
    }
    else if (playerSelection === 'ROCK') {
        if (computerSelection === 'SCISSORS') {
            para.textContent = 'You win, Rock beats Scissors';
        } else {
            para.textContent = 'You lose, Paper beats Rock';
        }
    } else if (playerSelection === 'SCISSORS') {
        if (computerSelection === 'ROCK') {
            para.textContent = 'You lose, Rock beats Scissors';
        }
        else {
            para.textContent = 'You win, Scissors beats Paper';
        }
    } else if (playerSelection === 'PAPER') {
        if (computerSelection === 'ROCK') {
            para.textContent = 'You win, Paper beats Rock';
        }
        else {
            para.textContent = 'You lose, Scissors beats Paper';
        }
    }
}
let container = document.querySelector("#container");
let div = document.createElement('div');
let para = document.createElement('p');
container.addEventListener('click', (event) => {
    switch(event.target.id) {
        case 'rock':
            playGame('ROCK', 'SCISSORS');
            break;
        case 'paper':
            playGame('PAPER', getComputerChoice());
            break;
        case 'scissors':
            playGame('SCISSORS', getComputerChoice());
            break;
    }
    div.appendChild(para);
    container.appendChild(div);
})