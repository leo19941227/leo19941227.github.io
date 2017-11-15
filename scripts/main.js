var welcomeMessage = document.querySelector('#welcome');
var userName = localStorage.getItem('name');

if(!userName) {
  setUserName();
}
else {
  welcomeMessage.textContent = 'Welcome, ' + userName;
}

function setUserName() {
  var userName = prompt('What\'s your name: ');
  localStorage.setItem('name', userName);
  welcomeMessage.textContent = 'Welcome, ' + userName;
}


var logo = document.querySelector('img.logo');
logo.onclick = function() {
  var mozilla = 'images/mozilla.png';
  var chrome = 'images/chrome.png';
  
  var version = logo.getAttribute('src');
  if(version === mozilla) {
    logo.setAttribute('src', chrome);
  } else {
    logo.setAttribute('src', mozilla);
  }
}

var userButton = document.querySelector('#user-button');
userButton.onclick = function() {
  setUserName();
}