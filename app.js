// element selectors

let timeEl = document.querySelector(".time");
let startButton = document.getElementById("start")


//global variables

let 



// init function called when page loads
function init() {
  getHighscore();  
}

// timer function

function timer() {  
  secondsLeft = 60;
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";

    if (secondsLeft == 0) {
      clearInterval(timerInterval);
      timeEl.textContent = "Out of time";
    } else {

    }
  }, 1000);
}

// start button function for quiz

startButton.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("button clicked");
  if(secondsLeft == 0 || secondsLeft == true){
  timer();
  }
});