var question1 = document.querySelector(".question-a");
var question2 = document.getElementsByClassName(".question-b");
var question3 = document.getElementsByClassName(".question-c");
var question4 = document.getElementsByClassName(".question-d");

//objects created for question bank
var quest1Data = {
  question: "Which of the following is not an arithmetic operator?",
  options: ["Boolean", "Addition (+)","Subtraction (-)", "Multiplication (*)", "Modulus (%)"],
  answer: "Boolean",
};

var quest2Data = {
  question: "What is a boolean?",
  options: ["a standalone entity that holds multiple values in terms of properties and methods", "an operator that perform addition, subtraction, multiplication, division, exponentiation, and modulus operations", "a binary variable, having two possible values called 'true' and 'false'", "none of the above"],
  answer: "a binary variable, having two possible values called 'true' and 'false'"
};

var quest3Data = {
  question: "An array's indexes are set inside within which brackets?",
  options: ["{ }","( )", "an array does not use brackets", "[ ]"],
  answer: "[ ]",
};

var quest4Data = {
  question: "What is the purpose of a for-loop?",
  options: ["loops through a block of code a number of times", "it demonstrates the amount of indexes in an array", "none of the above", "it allows you to to connect a javascript code to a particular class or id on the HTML document."],
  answer: "loops through a block of code a number of times",
}


var arrayofQ = [quest1Data, quest2Data, quest3Data, quest4Data];

//event listener starts once the user clicks the start button
document.getElementById("mybutton").addEventListener("click", startQuiz);

var timeLeft = 10;
var timeEl = document.querySelector(".timer");

//this function runs the timer for the quiz -- once the user clicks the start button the countdown will begin
function countdown() {
    
    var timeInterval = setInterval(function() {
      timeLeft --;
      timeEl.textContent = timeLeft + " seconds remaining"
  
      if (timeLeft === 0) {
        clearInterval(timeInterval);
        timeEl.textContent= "";
        
      };
    }, 1000);
  };

function displayScores() {
    var input = getElementById("scoreboard");
    input.setAttribute('type', 'text');
    input.setAttribute('value','default');

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


//this function will make content hidden or visible
//function displayContent(event)






//this function will assist in generating a random order in which the questions will get presented
function getRandomQ (event) {
    var currentQuestion = arrayofQ[0];  //this will be the question that is located inside the index depending on its position
    question1.textContent =  currentQuestion.question //allows for question to display on window
  
  //loop over the current questions options
  //create a button for each option
  //add the option text into that button
  //add the correct answer data-attribute to the button
  //add that button onto the page
   for(var i=0; i<currentQuestion.options.length; i++) { //this creates the for loop for the options within the question
      var buttonOptions = document.createElement("button");
      buttonOptions.textContent = currentQuestion.options[1];
      buttonOptions.dataset.correctAnswer = currentQuestion.answer;

      //displaying button onto page
     
       
    
    
    //generatedQ += questions.charAt[Math.floor(Math.random(questions.length))]

    };
};
//first pull a question from the array
//pull in a random order
//display the question onto the screen