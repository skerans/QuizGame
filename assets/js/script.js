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
const startBtn = document.querySelector('.start');
const startContainer = document.querySelector('.start-container');
const highscoreBtn = document.querySelector('.highscore-btn')
const highscoreInitials = document.querySelector('.highscore-initials');
const highScores = document.querySelector('.highscores');
const retryBtn = document.querySelector('.retry-btn');

//global variables

let score = 0;
let chosenQuestion = [];
let count = 0;
let highscore = [];

// question section, had to put at top due to hoisting issues

var questions = [
  {
    question: "Which planet spins in the opposite direction from all the others?",
    answers: ["Neptune", "Mercury", "Venus", "Saturn"],
    answerIndex: "Venus",
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: ["Earth", "Mars", "Venus", "Jupiter"],
    answerIndex: "jupiter"
  },
  {
    question: "Which planet has the longest valley?",
    answers: ["Mars", "Earth", "Venus", "Jupiter"],
    answerIndex: "Mars"
  },
  {
    question: "What is the smallest planet?",
    answers: ["Pluto", "Earth", "Mercury", "Neptune"],
    answerIndex: "Mercury"
  },
  {
    question: "Of the total mass of the solar system, what percentage does the sun take up?",
    answers: ["Less than 50", "75", "95", "More than 99"],
    answerIndex: "More than 99"
  }
]


//randomize question array 
function randomizeArr(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}



const questionArray = randomizeArr(questions);


function getQuestion() {

  console.log(questionArray[count]);
  chosenQuestion = questionArray[count];

  //randomize answers and push them into the button values
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



answerBtns.forEach(function (n) {
  n.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(chosenQuestion.answerIndex);
    console.log(event.target.innerHTML);
    if (event.target.innerHTML === chosenQuestion.answerIndex) {
      console.log("it worked");
      score++;
      console.log(score);
    } else {
      console.log("wrong answer");
      secondsLeft -= 10;
    }
    if (count < questionArray.length) {
      getQuestion();
    } else {
      //switch hide class from game container and highscore container
      gameContainer.classList.add('hide');
      highscoreContainer.classList.remove('hide');
    }
  })
});


//Game start button
startBtn.addEventListener('click', function (event) {
  event.preventDefault();
  gameContainer.classList.remove('hide');
  startContainer.classList.add('hide');
  timer();

})

//save your highscore
highscoreBtn.addEventListener('click', function (event) {
  event.preventDefault();

  const name = highscoreInitials.value.trim();
  let li = document.createElement('li');
  li.textContent = ` ${name}:  ${score}`;
  highScores.appendChild(li);
  let newScore = {name, score};
  highscore.push(newScore);
  localStorage.setItem('score', JSON.stringify(highscore));
  this.disabled = true;
  score = 0;
  count = 0;
});


// reset button
retryBtn.addEventListener('click', function (event) {
  event.preventDefault();
  highscoreBtn.disabled = false;
  location.reload();
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

function getHighscores() {

  for (let i = 0; i < highscore.length; i++) {
    let tmpHS = highscore[i];
    console.log(tmpHS);
    let li = document.createElement('li');
    li.textContent = `${tmpHS.name}:  ${tmpHS.score}`;
    highScores.appendChild(li);
    
  }
}


//startup function

function init() {
  getQuestion();
 
  let storedHighscores = JSON.parse(localStorage.getItem('score'));
  if (storedHighscores != null) {
  let tmpArray = [];
  highscore = tmpArray.concat(storedHighscores);
  console.log(highscore);
    
  }
  getHighscores();

}

init();


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

