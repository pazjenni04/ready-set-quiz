var question1 = document.querySelector(".question-a");
var quizEl = document.querySelector(".quizEl");

var questionIndex = 0; //this starts at first question

var score = 0; //sets original score to 0


//objects created for question bank
var quest1Data = {
  question: "Which of the following is not an arithmetic operator?",
  options: ["Boolean", "Addition (+)","Subtraction (-)", "Multiplication (*)", "Modulus (%)"],
  answer: "Boolean",
};

var quest2Data = {
  question: "What is a boolean?",
  options: ["a standalone entity that holds multiple values in terms of properties and methods", "an operator that perform addition, subtraction, multiplication, division, exponentiation, and modulus operations", "a binary variable, having two possible values called 'true' and 'false'", "none of the above"],
  answer: "a binary variable, having two possible values called 'true' and 'false'",
};

var quest3Data = {
  question: "An array's indexes are set inside within which brackets?",
  options: ["{ }","( )", "an array does not use brackets", "[ ]"],
  answer: "[ ]",
};

var quest4Data = {
  question: "What is the purpose of a for-loop?",
  options: ["loops through a block of code a number of times", "it demonstrates the amount of indexes in an array", "none of the above", "it allows you to to connect a javascript code to a particular class or id in the HTML document."],
  answer: "loops through a block of code a number of times",
}


var arrayofQ = [quest1Data, quest2Data, quest3Data, quest4Data];

//event listener starts once the user clicks the start button
document.getElementById("mybutton").addEventListener("click", startQuiz);

var timeLeft = 5;
var timeEl = document.querySelector(".timer");

//this function runs the timer for the quiz -- once the user clicks the start button the countdown will begin
function countdown() {
    
    var timeInterval = setInterval(function() {
      timeLeft --;
      timeEl.textContent = "Timer: " + timeLeft + " seconds remaining";
  
      displayScores();

      if (timeLeft === 0) {
        clearInterval(timeInterval);
        timeEl.textContent= "";
        
      };
    }, 1000);
  };


function startQuiz() {
  countdown();
  document.querySelector(".homepage").style.display = "none"; //this removes the instructional page of "hides"
  getRandomQ();
};

//start the timer
//switch from the opening window (instructional page) and display first question and options
//repeat throughout each questions
//once timer ends, redirect to a highscore page where the user can insert there name next to the score
//show list of highscores -- local storage


//this function will assist in generating a random order in which the questions will get presented
function getRandomQ () {
    var currentQuestion = arrayofQ[questionIndex];  //this will be the question that is located inside the index depending on its position

    question1.textContent = currentQuestion.question; //allows for question to display on window

   for(var i=0; i<currentQuestion.options.length; i++) { //this creates the for loop for the options within the question
      var buttonOptions = document.createElement("button");  //created a button for each option within the array
      var hiddenEl = document.querySelector(".hidden");
      
      buttonOptions.textContent = currentQuestion.options[i];  //shows all answers dedicated to the array within "options"
      hiddenEl.appendChild(buttonOptions);  //displays button options onto page
      
      buttonOptions.onclick = optionClick; //creates event listener for when you click the button it connects to the function () optionClick

      buttonOptions.dataset.correctAnswer = currentQuestion.answer;  //adds the correct answer data-attribute to the button
      
      currentQuestion.options.innerHTML = " "; //needs to be able to clear the interval - but doesn't work?
};

};


function displayScores() {
  var userScore = document.querySelector(".score-container");
  
  if (timeLeft > 0){
    userScore.style.display = "none"; //if timer is greater than 0 then display score will be hidden
  } else {
    userScore.style.display = "block"; //displays the scoreboard onto the page once timer hits 0
    document.querySelector(".hidden").style.display = "none"; //hides all elements inside div container class ."hidden" -- all questions and headers on page
  };
};

displayScores();

function optionClick (event) {
  event.preventDefault();

  var currentQuestion = arrayofQ[questionIndex];
  var choiceClick = event.target.textContent;
  

  if (choiceClick === currentQuestion.answer) {
    console.log("Correct!");
  } else {
    console.log("Wrong!");
    countdown -2;
  };
  
  questionIndex++;
  getRandomQ();
};




//create a scoreboard to collect 2 points for every question correct
//need to calculate all scores at the end
//need to add score to local storage and name input once complete

var scoreEl = 0;

function addToScore () {
  var scoreboard = document.getElementById("#scoreboard");
  var currentQuestion = arrayofQ[0];
  var answer = currentQuestion.answer;

  scoreboard.textContent = document.querySelector(".container")

  if (optionClick === currentQuestion.answer) {
    scoreEl +2;

  } else {

    return;
  };
  
};

addToScore();
