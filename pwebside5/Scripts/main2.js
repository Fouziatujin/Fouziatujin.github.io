var myButton = document.getElementById('change');
var myHeading = document.querySelector('h2');
if(!localStorage.getItem('name')){
    setUserName();
}else{
    var storeName = localStorage.getItem('name');
    myHeading.textContent='Welcome to my site.' +storeName;
}
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to my site., ' + myName;
  }

  myButton.onclick=function(){
      setUserName();
  }