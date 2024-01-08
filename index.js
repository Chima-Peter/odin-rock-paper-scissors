function displayResult(arg) {
    const displayDiv = document.querySelector('#displayDiv');
    const midDiv = document.createElement('div');
    const tempPlayer = arg.cloneNode(true);
    const tempComputer = getComputerChoice();

    setUpPlayGame(tempPlayer, tempComputer)
    midBtn.textContent = 'PLAY AGAIN';
    midDiv.appendChild(midPara);
    midDiv.appendChild(midBtn);
    displayDiv.appendChild(tempPlayer);
    displayDiv.appendChild(midDiv);
    displayDiv.appendChild(tempComputer);
}

function setUpPlayGame(arg1, arg2) {
    let playChoice;
    let computerChoice;
    if (arg1.id === 'rock') {
        playChoice = 'ROCK'
    } else if (arg1.id === 'scissors') {
        playChoice = 'SCISSORS';
    } else {
        playChoice = 'PAPER';
    }
    if (arg2.id === 'rock') {
        computerChoice = 'ROCK'
    } else if (arg2.id === 'scissors') {
        computerChoice = 'SCISSORS';
    } else {
        computerChoice = 'PAPER';
    }
    playGame(playChoice, computerChoice);
}

// function to get the computer's choice
function getComputerChoice() {
    let computer = Math.floor(Math.random() * 3);
    if (computer === 0) {
        return rock;
    } else if (computer === 1) {
        return paper;
    } else {
        return scissors;
    }
}


// fucntion to play the actual rock paper scissors game
function playGame(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        midPara.textContent = "YOU DREW";
    }
    else if (playerSelection === 'ROCK') {
        if (computerSelection === 'SCISSORS') {
            midPara.textContent = 'YOU WIN';
        } else {
            midPara.textContent = 'YOU LOSE';
        }
    } else if (playerSelection === 'SCISSORS') {
        if (computerSelection === 'ROCK') {
            midPara.textContent = 'YOU LOSE';
        }
        else {
            midPara.textContent = 'YOU WIN';
        }
    } else if (playerSelection === 'PAPER') {
        if (computerSelection === 'ROCK') {
            midPara.textContent = 'YOU WIN';
        }
        else {
            midPara.textContent = 'YOU LOSE';
        }
    }
}


const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const body = document.querySelector('body');
const footer = document.querySelector('#footer');
const rpsContainer = document.querySelector('#img-container');
const ruleParent = document.querySelector('#rule-div');
const ruleBtn = document.querySelector('#btn-div');
const rpDiv = document.createElement('div');
const holdDiv = document.querySelector('#holder');
const playerParagraph = document.createElement('p');
const computerParagraph = document.createElement('p');
const midPara = document.createElement('p');
const midBtn = document.createElement('button');
playerParagraph.textContent = 'YOU PICKED';
computerParagraph.textContent = 'THE HOUSE PICKED';
rpDiv.appendChild(playerParagraph);
rpDiv.appendChild(computerParagraph);


rock.addEventListener('click', () => {
    body.removeChild(rpsContainer);
    ruleParent.removeChild(ruleBtn);
    holdDiv.appendChild(rpDiv);
    body.removeChild(footer);
    rpDiv.classList.add('rpDiv');
    displayResult(rock);
});


paper.addEventListener('click', () => {
    body.removeChild(rpsContainer);
    ruleParent.removeChild(ruleBtn);
    holdDiv.appendChild(rpDiv);
    body.removeChild(footer);
    rpDiv.classList.add('rpDiv');
    displayResult(paper);
});


scissors.addEventListener('click', () => {
    body.removeChild(rpsContainer);
    ruleParent.removeChild(ruleBtn);
    holdDiv.appendChild(rpDiv);
    body.removeChild(footer);
    rpDiv.classList.add('rpDiv');
    displayResult(scissors);
});

midBtn.addEventListener('click', () => {
    window.location.reload();
});