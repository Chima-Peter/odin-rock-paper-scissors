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
    if (player !== 'ROCK' || player !== 'SCISSORS' || player !== 'PAPER') {
        alert('Enter valid option');
    }
    return player;
}