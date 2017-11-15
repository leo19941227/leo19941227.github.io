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
