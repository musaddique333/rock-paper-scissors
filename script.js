const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const options = ['rock', 'paper', 'scissors'];

const score = document.querySelector('.score');

const game = () => {
    score.innerHTML = options[Math.floor(Math.random() * 3)];
    alert(score.innerHTML);
    if (chosen == 'rock') {
        if (score.innerHTML == 'paper') {
            score.innerHTML = 'You lose!';
        } else if (score.innerHTML == 'scissors') {
            score.innerHTML = 'You win!';
        } else {
            score.innerHTML = 'Draw!';
        }
    }
    else if (chosen == 'paper') {
        if (score.innerHTML == 'scissors') {
            score.innerHTML = 'You lose!';
        } else if (score.innerHTML == 'rock') {
            score.innerHTML = 'You win!';
        } else {
            score.innerHTML = 'Draw!';
        }
    }
    else if (chosen == 'scissors'){
        if (score.innerHTML == 'rock') {
            score.innerHTML = 'You lose!';
        } else if (score.innerHTML == 'paper') {
            score.innerHTML = 'You win!';
        } else {
            score.innerHTML = 'Draw!';
        }
    }
};

rock.addEventListener('click', () => {chosen = options[0];game();});
paper.addEventListener('click', () => {chosen = options[1];game();});
scissors.addEventListener('click', () => {chosen = options[2];game();});