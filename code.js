//Javascript to run countdown timer
function countdownTimer() {
  var currTime = 55;
  document.getElementById("countdown").innerHtml = currTime;
  currTime = currTime - 5;

//Start timer at 50
  setTimeout(function(){
      document.getElementById("countdown").innerHTML = currTime;
      currTime = currTime - 5;
  }, 0);

//Timer for 45
  setTimeout(function(){
      document.getElementById("countdown").innerHTML = currTime;
      currTime = currTime - 5;
  }, 5000);

//Timer for 40
  setTimeout(function(){
      document.getElementById("countdown").innerHTML = currTime;
      currTime = currTime - 5;
  }, 10000);

//Timer for 35
  setTimeout(function(){
      document.getElementById("countdown").innerHTML = currTime;
      currTime = currTime - 5;
  }, 15000);

//Timer for 30
  setTimeout(function(){
      document.getElementById("countdown").innerHTML = currTime;
      currTime = currTime - 5;
  }, 20000);

//Timer for 25
  setTimeout(function(){
      document.getElementById("countdown").innerHTML = currTime;
      currTime = currTime - 5;
  }, 25000);

//Timer for 20
  setTimeout(function(){
      document.getElementById("countdown").innerHTML = currTime;
      currTime = currTime - 5;
  }, 30000);

//Timer for 15
  setTimeout(function(){
      document.getElementById("countdown").innerHTML = currTime;
      currTime = currTime - 5;
  }, 35000);

//Timer for 10
  setTimeout(function(){
      document.getElementById("countdown").innerHTML = currTime;
      currTime = currTime - 5;
  }, 40000);

//Timer for 5
  setTimeout(function(){
      document.getElementById("countdown").innerHTML = currTime;
      currTime = currTime - 5;
  }, 45000);

//Timer for Blastoff! when countdown finishes
  setTimeout(function(){
      document.getElementById("countdown").innerHTML = "Blastoff!";
      currTime = currTime - 5;
  }, 50000);
}
