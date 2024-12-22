


var ana = setInterval(timer,1000);

function timer(){
  var d = new Date().toLocaleTimeString();
  document.querySelector("#demo").innerHTML = d;
}
