// element selectors

const timeEl = document.querySelector(".time");
const startButton = document.getElementById("start");
const questionText = document.getElementById("question");
const scores = document.getElementById("score");
const answer1 = document.getElementById("answer-1");
const answer2 = document.getElementById("answer-2");
const answer3 = document.getElementById("answer-3");
const answer4 = document.getElementById("answer-4");

//global variables

let score = 0;

// question section, had to put at top due to hoisting issues

var questions = [
  {
    question: "question 1",
    answers: ["a", "b", "c", "d"],
  },
  {
    question: "question 2",
    answers: ["a", "b", "c", "d"],
  },
  {
    question: "question 3",
    answers: ["a", "b", "c", "d"],
  },
  {
    question: "question 4",
    answers: ["a", "b", "c", "d"],
  },
  {
    question: "question 5",
    answers: ["a", "b", "c", "d"],
  }
  ]

  // shuffle array of answers/questions
  function randomizeArr(arr) {
    for(let i = arr.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
  }

// randomizeArr(questions);
// console.log(questions);


function getQuestion() {
  chosenQuestion = questions[Math.floor(Math.random() * questions.length)];
  randomizeArr(chosenQuestion.answers);
  questionText.textContent = chosenQuestion.question;
  answer1.textContent = chosenQuestion.answers[0];
  answer1.value = chosenQuestion.answers[0];
  answer2.textContent = chosenQuestion.answers[1];
  answer2.value = chosenQuestion.answers[1];
  answer3.textContent = chosenQuestion.answers[2];
  answer3.value = chosenQuestion.answers[2];
  answer4.textContent = chosenQuestion.answers[3];
  answer4.value = chosenQuestion.answers[3];
};




getQuestion();

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

// startButton.addEventListener("click", function(event) {
//   event.preventDefault();
//   console.log("button clicked");
//   if(secondsLeft == 0 || secondsLeft == true){
//   timer();
//   }
// });



