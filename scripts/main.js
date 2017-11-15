var answer = Math.floor(Math.random() * 100) + 1;

var input = document.querySelector('.guessField');
var submit = document.querySelector('.guessSubmit');

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHigh = document.querySelector('.lowOrHi');

var guessCount = 1;

function evaluateGuess() {
  var inputNumber = Number(input.value);
  
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses:';
  }
  guesses.textContent += (' ' + inputNumber);

  if (inputNumber === answer) {
    lastResult.textContent = 'CORRECT';
    lastResult.style.backgroundColor = 'green';
    lowOrHigh.textContent = 'Correct!';
    askReset();
  } else if (inputNumber < answer) {
    lastResult.textContent = 'WRONG';
    lastResult.style.backgroundColor = 'red';
    lowOrHigh.textContent = 'hint: Too low';
  } else {
    lastResult.textContent = 'WRONG';
    lastResult.style.backgroundColor = 'red';
    lowOrHigh.textContent = 'hint: Too high';
  }

  guessCount += 1;
  input.value = '';
  input.focus();
}

function askReset() {
  input.disabled = true;
  submit.disabled = true;
  newGameButton = document.createElement('button');
  newGameButton.textContent = 'New game';
  document.body.appendChild(newGameButton);
  newGameButton.addEventListener('click', resetGame);
}

function resetGame() {
  document.body.removeChild(newGameButton);
  input.disabled = false;
  submit.disabled = false;
  input.value = '';
  input.focus();
  guesses.textContent = '';
  lastResult.textContent = '';
  lastResult.style.backgroundColor = 'white';
  lowOrHigh.textContent = '';
}

submit.onclick = function () {
  evaluateGuess();
}
