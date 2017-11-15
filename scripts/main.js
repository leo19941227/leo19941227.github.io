function Cell(x, y) {
  var column = x;
  var row = y;
  var open = false;
  var bomb = false;
  var button = document.querySelector('#' + 'C' + column + 'R' + row);
  
  this.clicked = function() {
    if(!open) {
      open = true;
      button.style.backgroundColor = 'red';
    }
  };
  
  this.getPosition = function() {
    return [x,y];
  }
  
  button.addEventListener('click', this.clicked); 
}

var size = 10;
var plane = new Array(size);

var tmp = document.createElement('div');
tmp.id = 'cells';
tmp.style.width = size*70 + 'px';
tmp.style.margin = '0 auto';
document.body.appendChild(tmp);
var cells = document.querySelector('#cells');

for(var i=0; i<size; i++) {  
  plane[i] = new Array(size);
  for(var j=0; j<size; j++) {
    var tmp = document.createElement('button');
    tmp.style.margin = '0 auto';
    tmp.style.width = '70px';
    tmp.style.height = '70px';
    tmp.style.backgroundColor = 'yellow';
    tmp.id = 'C' + i + 'R' + j;
    cells.appendChild(tmp);
    
    plane[i][j] = new Cell(i, j);
  }
}

