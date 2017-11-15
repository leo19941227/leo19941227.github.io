function Cell(x, y) {
  var button = document.querySelector('#' + id);
  var column = x;
  var row = y;
  var open = false;
  var bomb = false;
  
  this.clicked = function() {
    if(!open) {
      open = true;
      button.textContent = 'X';
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
tmp.width = '50%';
document.body.appendChild(tmp);
var cells = document.querySelector('#cells');

for(var i=0; i<size; i++) {  
  plane[i] = new Array(size);
  for(var j=0; j<size; j++) {
    var tmp = document.createElement('button');
    tmp.style.margin = '0 auto';
    tmp.style.padding = '40px';
    tmp.style.backgroundColor = 'yellow';
    cells.appendChild(tmp);
  }
}

