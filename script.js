const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const options = ['rock', 'paper', 'scissors'];

const score = document.querySelector('.score');
const points = document.querySelector('.points');
const message = document.querySelector('.message');
const game_message = document.querySelector('.game_message');
const game_over = document.querySelector('.game_over');
const try_again = document.querySelector('.try_again');
const you = document.querySelector('.you');
const computer = document.querySelector('.computer');

let playerScore = 0;
let computerScore = 0;

let gameRounds = 0;

let playerRoundsWon = 0;
let computerRoundsWon = 0;

const score_update = () => {
    points.innerHTML = `${playerScore} - ${computerScore}`;
};

const game = () => {
    game_message.innerHTML = `${3 - gameRounds} rounds Left!`;
    let chose_comp = options[Math.floor(Math.random() * 3)];
    
    if (chosen == 'rock') {
        if (chose_comp == 'paper') {
            you.innerHTML = chosen;
            computer.innerHTML = chose_comp;
            computerScore++;
        } else if (chose_comp == 'scissors') {
            you.innerHTML = chosen;
            computer.innerHTML = chose_comp;
            playerScore++;
        } else {
            you.innerHTML = chosen;
            computer.innerHTML = chose_comp;
        }
    } else if (chosen == 'paper') {
        if (chose_comp == 'scissors') {
            you.innerHTML = chosen;
            computer.innerHTML = chose_comp;
            computerScore++;
        } else if (chose_comp == 'rock') {
            you.innerHTML = chosen;
            computer.innerHTML = chose_comp;
            playerScore++;
        } else {
            you.innerHTML = chosen;
            computer.innerHTML = chose_comp;
        }
    } else if (chosen == 'scissors') {
        if (chose_comp == 'rock') {
            you.innerHTML = chosen;
            computer.innerHTML = chose_comp;
            computerScore++;
        } else if (chose_comp == 'paper') {
            you.innerHTML = chosen;
            computer.innerHTML = chose_comp;
            playerScore++;
        } else {
            you.innerHTML = chosen;
            computer.innerHTML = chose_comp;
        }
    }
    
    score_update();
};

const endRound = () => {
    if (computerScore == 3 || playerScore == 3) {
        gameRounds++;
        if (playerScore > computerScore) {
            playerRoundsWon++;
        } else if (playerScore < computerScore) {
            computerRoundsWon++;
        }
        roundsPlayed = 0;
        message.style.fontSize = '15.0vw';
        message.style.color = 'rgb(0, 115, 255)';
        message.innerHTML = `${playerRoundsWon} - ${computerRoundsWon}`;
        playerScore = 0;
        computerScore = 0;
    }
    if (gameRounds === 3) {
        game_message.style.paddingTop = '10.0vh';
        game_message.style.fontSize = '20.0vw';
        game_message.innerHTML = "Game Over!";
        message.style.fontSize = '10.0vw';
        message.style.maringTop = '10.0vh';
        message.innerHTML = `${playerRoundsWon} - ${computerRoundsWon}`;
        setTimeout(() => {
            game_message.remove();
            message.remove();
            game_over.style.margin = '5.0vw 0';
            try_again.style.marginTop = '5.0vh';
            try_again.style.marginBottom = '5.0vh';
            try_again.style.textDecoration = 'none';
            try_again.style.padding = '3.0vw 3.0vh';
            try_again.style.fontSize = '3.0vw';
            try_again.style.backgroundColor = 'rgb(255, 0, 0)';
            try_again.style.border = 'solid 2px #fff';
            try_again.style.textAlign = 'center';
            try_again.addEventListener('mouseover', () => {
                try_again.style.backgroundColor = 'rgb(0, 255, 0)';
                try_again.style.border = 'solid 3px rgb(255, 0, 0)';
                try_again.style.textAlign = 'center';
                try_again.style.color = 'rgb(255, 0, 0)';
                try_again.style.transform = 'scale(1.1)';
            });
            if (playerRoundsWon > computerRoundsWon) {
                game_over.innerHTML = "You Saved The World!";
            } else{
                game_over.innerHTML = "Earth Has Been Destroyed!";
            }
            try_again.innerHTML = "Try Again?";
        }, 3000);
    }
};

setTimeout(() => {
    message.style.fontSize = '15.0vw';
    message.innerHTML = "S. T. A. R. T"}, 9000);
document.addEventListener('click', () => {message.innerHTML = ""});

rock.addEventListener('click', () => { chosen = options[0]; game(); });
paper.addEventListener('click', () => { chosen = options[1]; game(); });
scissors.addEventListener('click', () => { chosen = options[2]; game(); });

document.addEventListener('click', () => {
    endRound();
});