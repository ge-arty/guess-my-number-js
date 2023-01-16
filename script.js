'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessege = function (messege) {
  document.querySelector('.message').textContent = messege;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When input is empty
  if (!guess) {
    displayMessege('🆘 No Number!');
  }
  // When is right
  else if (guess === secretNumber) {
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    displayMessege('🏅 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
  }
  // When is wrong
  else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessege(guess > secretNumber ? '👉 Too high!' : '👉 Too low!');
      score--;
    } else {
      displayMessege('😞 You lost the game');
    }
    document.querySelector('.score').textContent = score;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.guess').value = ' ';
  document.querySelector('.number').textContent = '?';
  displayMessege('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
