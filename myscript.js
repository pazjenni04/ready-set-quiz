
var question2 = document.getElementsByClassName(".question-b");
var question3 = document.getElementsByClassName(".question-c");
var question4 = document.getElementsByClassName(".question-d");

//event listener starts once the user clicks the start button
document.getElementById("mybutton").addEventListener("click", countdown);

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

const radioButtons = Array.from(document.querySelectorAll('input[type=radio]'));

function checkChecked(){
  console.log(radioButtons.every(button => button.checked));
}

radioButtons.forEach(button => button.onchange = checkChecked);


//this function will make content hidden or visible
//function displayContent(event)






//this function will assist in generating a random order in which the questions will get presented
//function getRandomQ (event) {
    //var generatedQ = " "; //empty string that function will choose results from for loop

   // for(var i=0; i<questions.length; i++) {
       // generatedQ += questions.charAt[Math.floor(Math.random(questions.length))]

    //};
//};
