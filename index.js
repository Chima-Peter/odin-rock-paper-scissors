function getComputerChoice() {
    let identifier = Math.floor(Math.random() * 3);
    if (identifier === 0) {
        return "ROCK";
    } else if (identifier == 1) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}