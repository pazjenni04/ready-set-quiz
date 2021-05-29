var question1 = document.querySelector(".question-a");
var quizEl = document.querySelector(".quizEl");
var restartBtn = document.getElementById("#restart");

var scoreInput = document.getElementById("score-input").value;

var questionIndex = 0; //this starts at first question


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
};

var quest5Data = {
  question: "What does HTML stand for?",
  options: ["Hypertext Markup Language", "Hero Max Language", "none of the above", "all of the above"],
  answer: "Hypertext Markup Language",
};

var quest6Data = {
  question: "What is the purpose of a CSS stylesheet?",
  options: ["to provide a set of general rules that suggest how content should look when rendered", "to create responsive, interactive elements for web pages, enhancing the user experience", "to provide Web developers with a standard way to define, apply, and manage sets of style characteristics", "all of the above"],
  answer: "to provide Web developers with a standard way to define, apply, and manage sets of style characteristics",
};


var arrayofQ = [quest1Data, quest2Data, quest3Data, quest4Data, quest5Data, quest6Data];

//event listener starts once the user clicks the start button
document.getElementById("mybutton").addEventListener("click", startQuiz);

var timeLeft = 5;
var timeEl = document.querySelector(".timer");

//this function runs the timer for the quiz -- once the user clicks the start button the countdown will begin
function countdown() {
    
    var timeInterval = setInterval(function() {
      timeLeft --;
      timeEl.textContent = "Timer: " + timeLeft + " seconds remaining";
      
      if (timeLeft > 0 || !null) {
        timeEl.style.display = "block";
        document.getElementById("restart").style.display = "block";
       //restartBtn.style.display = "block";
      };

      displayScores();

      if (timeLeft === 0) {
        clearInterval(timeInterval);
        timeEl.textContent= "";
        
      };
    }, 1000);
};



//function will start quiz and timer and redirect to first question
function startQuiz() {
  countdown();
  document.querySelector(".homepage").style.display = "none"; //this removes the instructional page of "hides"
  getRandomQ();
};


//this function will assist in generating a the questions on the quiz from the array
function getRandomQ () {
    var currentQuestion = arrayofQ[questionIndex];  //this will be the question that is located inside the index depending on its position
    
    question1.textContent = currentQuestion.question; //allows for question to display on window

   for(var i=0; i<currentQuestion.options.length; i++) { //this creates the for loop for the options within the question
      var buttonOptions = document.createElement("button");  //created a button for each option within the array

      buttonOptions.textContent = currentQuestion.options[i];  //shows all answers dedicated to the array within "options"
      question1.appendChild(buttonOptions);  //displays button options onto page
      
      buttonOptions.onclick = optionClick; //creates event listener for when you click the button it connects to the function () optionClick

      buttonOptions.dataset.correctAnswer = currentQuestion.answer;  //adds the correct answer data-attribute to the button
 
};

};


//displays scoreboard and input to enter name for highscore ranks
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

var scoreEl = 0;

//when user clicks on an option button then will go to the next question in the quiz
function optionClick (event) {
  event.preventDefault();

  var currentQuestion = arrayofQ[questionIndex];
  var choiceClick = event.target.textContent;
  
  if (choiceClick === currentQuestion.answer) {
    console.log("Correct!");
    scoreEl+=5; //every correct answer the user answers correctly, it will add 5 points to the final score
    document.getElementById("scoreboard").textContent= "Score: " + scoreEl;
  } else {
    console.log("Wrong!");
    countdown -2;
  };
  
  questionIndex++;
  document.querySelector(".question-a").innerHTML = " "; //clears option interval after the function populates a new question
  getRandomQ();

};

//need to add score to local storage and name input once complete
var highscore = localStorage.getItem("highscore");

//need to create a restart button for scoreboard page

function restart(event) {
  event.preventDefault();

  clearInterval(timeEl);
  clearScore();
  startQuiz();
};

document.getElementById("restart").addEventListener("click", restartQuiz);
document.getElementById("restart2").addEventListener("click", restartQuiz);

function clearScore() {
  scoreEl = 0;
};


function submit(event) {
  event.preventDefault();

  event.target.textContent;  

  document.getElementById("submit").style.display= "none";
  document.querySelector(".hidden").style.display= "none";
  document.querySelector(".score-container").style.display= "none";
  document.querySelector(".highscore-container").style.display= "block";
  showInput();

};

function showInput () {
 var message = document.getElementById("score-input").value;
 var displayedInput = document.querySelector(".displayedInput");

 displayedInput.innerHTML = "Congratulations " + message + "!" + " You scored " + scoreEl + " points!";
};

showInput();

document.getElementById("submit").addEventListener("click", submit);