var size = 12;
var pixel = 50;
var bumbNum = 15;
var saveNum = size * size - bumbNum;
var plane = new Array(size);

var m_offset = [-1, -1, -1, 0, 0, 0, 1, 1, 1];
var n_offset = [-1, 0, 1, -1, 0, 1, -1, 0, 1];

function Cell(m, n) {
  var row = m;
  var column = n;
  var open = false;
  var bomb = false;
  var button = document.querySelector('#' + 'R' + row + 'C' + column);
  
  this.setBomb = function() {
    bomb = true;
    button.textContent = 'X';
  }
  this.isBomb = function() {
    return bomb;
  }
  this.stopFunction = function() {
    button.disabled = true;
  }  
  this.clicked = function() {
    if(!open) {
      open = true;
      if(bomb) {
        button.style.color = 'white';
        button.style.backgroundColor = 'red'
        button.textContent = 'X';
        var endMessage = document.querySelector('h2');
        endMessage.textContent = 'YOU LOSE';
        endMessage.style.color = 'darkorange';
        gameOverHandler();
      } else {
        var bombSum = 0;
        for(var i=0; i<9; i++) {
          var r = row + m_offset[i];
          var c = column + n_offset[i];
          if(r >= 0 && r < size && c >= 0 && c < size) {
            if(plane[r][c].isBomb()) {
              bombSum += 1;
            }
          }
        }
        button.style.color = 'white';
        button.style.backgroundColor = 'green';
        button.textContent = bombSum;
        
        if(bombSum === 0) {
          for(var i=0; i<9; i++) {
            var r = row + m_offset[i];
            var c = column + n_offset[i];
            if(r >= 0 && r < size && c >= 0 && c < size) {
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

for(var i = 0; i < size; i++) {  
  plane[i] = new Array(size);
  for(var j = 0; j < size; j++) {
    var tmp = document.createElement('button');
    tmp.style.margin = '0 auto';
    tmp.style.width = pixel + 'px';
    tmp.style.height = pixel + 'px';
    tmp.textContent = 'NaN';
    tmp.style.color = 'yellow';
    tmp.style.backgroundColor = 'yellow';
    
    tmp.id = 'R' + i + 'C' + j;
    cells.appendChild(tmp);
    
    plane[i][j] = new Cell(i, j);
  }
}

// plane settings is done, can use 'plane' and 'clicked' to finish the rest.

var numList = new Array(size * size);
for(var i = 0; i < size*size; i++) {
  numList[i] = i;
}
for(var i = 1; i < size*size; i++) {
  var target = Math.floor(Math.random() * i);
  var tmp = numList[i];
  numList[i] = numList[target];
  numList[target] = tmp;
}

for(var i = 0; i < bumbNum; i++) {
  setBomb = numList.pop();
  plane[ Math.floor(setBomb/size) ][ setBomb % size ].setBomb();
}

function gameOverHandler() {
  alert('over');
  for(var i = 0; i < size; i++) {
    for(var j = 0; j < size; j++) {
      plane[i][j].stopFunction();
    }
  }
}