var size = Number( prompt('Enter the metrix size you want to play: ') );
var pixel = 55;
var bumbNum = Math.floor(4 * size / 5);
var saveNum = size * size - bumbNum;
var plane = new Array(size);
var bombList = new Array(size * size);

var m_offset = [-1, -1, -1, 0, 0, 0, 1, 1, 1];
var n_offset = [-1, 0, 1, -1, 0, 1, -1, 0, 1];

var h2 = document.querySelector('h2');
h2.textContent = 'There are ' + saveNum + ' steps to go';

function Cell(m, n) {
  var row = m;
  var column = n;
  var open = false;
  var bomb = false;
  var button = document.querySelector('#' + 'R' + row + 'C' + column);

  this.setBomb = function () {
    bomb = true;
    button.textContent = 'X';
  }
  this.isBomb = function () {
    return bomb;
  }
  this.bombing = function () {
    button.style.color = 'white';
    button.style.backgroundColor = 'red'
    button.textContent = 'X';
  }
  this.stopFunction = function () {
    button.disabled = true;
  }

  this.clicked = function () {
    if (!open) {
      open = true;
      saveNum -= 1;
      h2.textContent = 'There are ' + saveNum + ' steps to go';
      if (bomb) {
        for (var i = 0; i < bumbNum; i++) {
          var setBomb = bombList[i];
          plane[Math.floor(setBomb / size)][setBomb % size].bombing();
        }
        h2.textContent = 'YOU LOSE';
        h2.style.color = 'darkorange';
        gameOverHandler();
      } else {
        if (saveNum === 0) {
          for (var i = 0; i < bumbNum; i++) {
            var setBomb = bombList[i];
            plane[Math.floor(setBomb / size)][setBomb % size].bombing();
          }
          var endMessage = document.querySelector('h2');
          h2.textContent = 'YOU WIN';
          h2.style.color = '#228b22';
          gameOverHandler();
        }

        var bombSum = 0;
        for (var i = 0; i < 9; i++) {
          var r = row + m_offset[i];
          var c = column + n_offset[i];
          if (r >= 0 && r < size && c >= 0 && c < size) {
            if (plane[r][c].isBomb()) {
              bombSum += 1;
            }
          }
        }
        button.style.color = 'white';
        button.style.backgroundColor = '#8fdb84';
        button.textContent = bombSum;

        if (bombSum === 0) {
          for (var i = 0; i < 9; i++) {
            var r = row + m_offset[i];
            var c = column + n_offset[i];
            if (r >= 0 && r < size && c >= 0 && c < size) {
              plane[r][c].clicked();
            }
          }
        }
      }
    }
  }

  button.addEventListener('click', this.clicked);
}

var tmp = document.createElement('div');
tmp.id = 'cells';
tmp.style.width = size * pixel + 'px';
tmp.style.margin = '0 auto';
document.body.appendChild(tmp);
var cells = document.querySelector('#cells');

for (var i = 0; i < size; i++) {
  plane[i] = new Array(size);
  for (var j = 0; j < size; j++) {
    var tmp = document.createElement('button');
    tmp.style.margin = '0 auto';
    tmp.style.width = pixel + 'px';
    tmp.style.height = pixel + 'px';
    tmp.textContent = 'NaN';
    tmp.style.color = '#FFFFBB';
    tmp.style.backgroundColor = '#FFFFBB';
    tmp.style.fontSize = '18px';

    tmp.id = 'R' + i + 'C' + j;
    cells.appendChild(tmp);

    plane[i][j] = new Cell(i, j);
  }
}

// plane settings is done, can use 'plane' and 'clicked' to finish the rest.

for (var i = 0; i < size * size; i++) {
  bombList[i] = i;
}
for (var i = 1; i < size * size; i++) {
  var target = Math.floor(Math.random() * i);
  var tmp = bombList[i];
  bombList[i] = bombList[target];
  bombList[target] = tmp;
}

for (var i = 0; i < bumbNum; i++) {
  var setBomb = bombList[i];
  plane[Math.floor(setBomb / size)][setBomb % size].setBomb();
}

function gameOverHandler() {
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      plane[i][j].stopFunction();
    }
  }
}