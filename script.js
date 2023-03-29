'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);

  // When don't make any guess
  if (!guess) {
    displayMessage('⛔ No number is guess');

    // When the player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 correct number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highScore').textContent = highScore;
    }

    // When the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage((guess > secretNumber) ? '😅 Your guess is too high' : '😅 Your guess is too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🤕 Sorry you lose the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';

  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});