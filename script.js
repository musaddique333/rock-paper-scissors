const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const options = ['rock', 'paper', 'scissors'];

const score = document.querySelector('.score');
const points = document.querySelector('.points');
const message = document.querySelector('.message');
let playerScore = 0;
let computerScore = 0;

const score_update = () => {
    points.innerHTML = `${playerScore} - ${computerScore}`;
};

setTimeout(() => {message.innerHTML = "S. T. A. R. T"}, 9000);
document.addEventListener('click', () => {message.innerHTML = ""});


const game = () => {
    score.innerHTML = options[Math.floor(Math.random() * 3)];
    alert(score.innerHTML);
    if (chosen == 'rock') {
        if (score.innerHTML == 'paper') {
            score.innerHTML = 'You lose!';
            computerScore++;
            score_update();
        } else if (score.innerHTML == 'scissors') {
            score.innerHTML = 'You win!';
            playerScore++;
            score_update();
        } else {
            score.innerHTML = 'Draw!';
            score_update();
        }
    }
    else if (chosen == 'paper') {
        if (score.innerHTML == 'scissors') {
            score.innerHTML = 'You lose!';
            computerScore++;
            score_update();
        } else if (score.innerHTML == 'rock') {
            score.innerHTML = 'You win!';
            playerScore++;
            score_update();
        } else {
            score.innerHTML = 'Draw!';
            score_update();
        }
    }
    else if (chosen == 'scissors'){
        if (score.innerHTML == 'rock') {
            score.innerHTML = 'You lose!';
            computerScore++;
            score_update();
        } else if (score.innerHTML == 'paper') {
            score.innerHTML = 'You win!';
            playerScore++;
            score_update();
        } else {
            score.innerHTML = 'Draw!';
            score_update();
        }
        score_update();
    }
};

rock.addEventListener('click', () => {chosen = options[0];game();});
paper.addEventListener('click', () => {chosen = options[1];game();});
scissors.addEventListener('click', () => {chosen = options[2];game();});