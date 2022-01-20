// element selectors

const timeEl = document.querySelector(".time");
const startButton = document.getElementById("start");
const questionText = document.getElementById("question");
const scores = document.getElementById("score");
const answer1 = document.getElementById("answer-1");
const answer2 = document.getElementById("answer-2");
const answer3 = document.getElementById("answer-3");
const answer4 = document.getElementById("answer-4");
const answerBtns = document.querySelectorAll(".answer");
const gameContainer = document.querySelector(".game-container");
const highscoreContainer = document.querySelector(".highscore-container");



//global variables

let score = 0;

// question section, had to put at top due to hoisting issues

var questions = [
  {
    question: "fish",
    answers: ["tuna", "mackeral", "salmon", "cod"],
    answerIndex: "tuna",
  },
  {
    question: "planets",
    answers: ["earth", "mars", "venus", "jupiter"],
    answerIndex: "earth"
  },
  {
    question: "question 3",
    answers: ["a", "b", "c", "d"],
    answerIndex: "a"
  },
  {
    question: "question 4",
    answers: ["a", "b", "c", "d"],
    answerIndex: "a"
  },
  {
    question: "question 5",
    answers: ["a", "b", "c", "d"],
    answerIndex: "a"
  }
]



function randomizeArr(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

console.log(questions);


let chosenQuestion = [];
let count = 0;
const questionArray = randomizeArr(questions);
console.log(questionArray);

function getQuestion() {
  // let tmpAnswer = randomizeArr(questions);
  // console.log(tmpAnswer);
  // let correctAnswer = tmpAnswer[0];

  console.log(questionArray[count]);
  chosenQuestion = questionArray[count];


  const tmpArr = [...chosenQuestion.answers];
  const randomArr = [];
  while (tmpArr.length > 0) {
    const index = Math.floor(Math.random() * tmpArr.length);
    randomArr.push(tmpArr[index]);
    tmpArr.splice(index, 1);
  }


  questionText.textContent = chosenQuestion.question;
  answer1.textContent = randomArr[0];
  answer1.value = randomArr[0];
  answer2.textContent = randomArr[1];
  answer2.value = randomArr[1];
  answer3.textContent = randomArr[2];
  answer3.value = randomArr[2];
  answer4.textContent = randomArr[3];
  answer4.value = randomArr[3];

  count++;
};



getQuestion();

answerBtns.forEach(function (n) {
  n.addEventListener('click', function (event) {
    console.log(chosenQuestion.answerIndex);
    console.log(event.target.innerHTML);
    if (event.target.innerHTML === chosenQuestion.answerIndex) {
      console.log("it worked");
      score++;
      console.log(score);
    } else {
      console.log("wrong answer");
    }
    if(count < questionArray.length){
    getQuestion();
    } else {
      //switch hide class from game container and highscore container
      gameContainer.classList.add('hide');
      highscoreContainer.classList.remove('hide');
    }
  })
});



// timer function

function timer() {
  secondsLeft = 60;
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left";

    if (secondsLeft == 0) {
      clearInterval(timerInterval);
      timeEl.textContent = "Out of time";
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



// shuffle array of answers/questions



// function randomizeArr(arr) {
//   let chosenQuestion = arr[Math.floor(Math.random() * arr.length)];
//   const tmpArr = [...chosenQuestion.answers];
//   const randomArr = [];
//   while(tmpArr.length > 0) {
//     const index = Math.floor(Math.random() * tmpArr.length);
//     randomArr.push(tmpArr[index]);
//     tmpArr.splice(index, 1);
//   }
//   return randomArr;
// }

