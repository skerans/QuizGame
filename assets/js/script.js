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

  // let chosenQuestion = questions[Math.floor(Math.random() * questions.length)];


  let chosenQuestion = [];

  function getQuestion() {
  // let tmpAnswer = randomizeArr(questions);
  // console.log(tmpAnswer);
  // let correctAnswer = tmpAnswer[0];
  for(i=0; i < questions.length; i++) {
    console.log(questions[i]);
    chosenQuestion = questions[i];
  

  const tmpArr = [...chosenQuestion.answers];
  const randomArr = [];
  while(tmpArr.length > 0) {
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

  }
};

// answerBtns.addEventListener('click', )

getQuestion();

answerBtns.forEach(function (n) {
  n.addEventListener('click', function (event) {
    console.log(chosenQuestion.answerIndex);
    console.log(event.target.innerHTML);
    if(event.target.innerHTML === chosenQuestion.answerIndex) {
      console.log("it worked");
      score++;
    } else {
    }
    getQuestion();
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



// shuffle array of answers/questions
function randomizeArr(arr) {
  let newArr = arr.slice();
  for(let i = arr.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return newArr;
}


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

