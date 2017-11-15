var answer = Math.floor(Math.random() * 100) + 1;

var input = document.querySelector(".guessField");
var submit = document.querySelector(".guessSubmit");

var history = document.querySelector(".guesses");
var lastResult = document.querySelector(".lastResult");
var lowOrHigh = document.querySelector(".lowOrHi");

var guessCount = 1;

function evaluateGuess() {
  var inputNumber = Number(input.value);

  if(guessCount === 1) {
    history.textContent = "Previous guesses:";
  }
  //history.textContent += (' ' + inputNumber);
  
  if(inputNumber === answer) {
    lowOrHigh.textContent = "Correct!";
  } else if(inputNumber < answer) {
    lowOrHigh.textContent = "Too low";
  } else {
    lowOrHigh.textContent = "Too high";
  }
  
  guessCount += 1;
  input.value = '';
  input.focus();
}

submit.onclick = function() {
  evaluateGuess();
}
