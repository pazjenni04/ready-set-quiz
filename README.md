# ready-set-quiz
The objective of this webpage is to quiz the user on basic coding knowledge.  When the user first clicks on the webpage, they will be presented with the intro page in which the user will have the option to "Start" the quiz.

List of technologies: JavaScript, CSS, HTML, localStorage

![Getting Started](https://raw.githubusercontent.com/pazjenni04/ready-set-quiz/main/images/Intro-page.PNG)

Once the user clicks on "Start", they will be presented with the first question.  At that moment, the page will present a 15 second timer in which the user will have to race against the clock to answer as many questions as possible.

![In this image, the timer is displayed as the first question is presented to the user.  The timer will continue on to display as each question progresses.](https://raw.githubusercontent.com/pazjenni04/ready-set-quiz/main/images/timer-img.PNG)

As the user continues to test their knowledge throughout each question presented, the timer will continue to tick down until it reaches 0.  Once the timer runs out, the page will be redirected where the user can enter their name into the blank input field and their score will be displayed underneath. 

![In this image, the user will input their name into the blank field.  Their current score will be displayed underneath.](https://raw.githubusercontent.com/pazjenni04/ready-set-quiz/main/images/scoreboard-input-name.PNG)


Once the user has completed the quiz and has entered their name, they can press the "Submit score!" button and will be redirected to a page that will congratulate them and showcase their score.

![In this image, once the user has inputted their name in the field, the page will then display their name and their score](https://raw.githubusercontent.com/pazjenni04/ready-set-quiz/main/images/last-page.PNG)
 
At this moment, the user can choose to "Try again" and restart the quiz.  Depending on how high the user scored in the quiz, the local storage will collect the last 5 highest scores and display their name and score in an array within the browser.  If a user outbeats one of the posted scores in the local storage, then their new highscore will then replace one already within the array.  Depending on how high that user scored will depend on where their name is placed in the local storage array.  The local storage will rank scores from highest to lowest out of the 5 stored.

![In this image, you will see that the browser stores the last 5 highest scores in the local storage](https://raw.githubusercontent.com/pazjenni04/ready-set-quiz/main/images/local-storage.PNG)

How to score points

Once the quiz has started, the user will be presented with one question at a time.  Whether the user answers the question correctly or incorrectly, they will still be prompted with the next question.  The only way the user can score points is if they answer the current question correctly.  For each question the user answers correctly, the browser will add 5 points to the user's overall score and will console log "Correct!".  If the user answers incorrectly, the overall timer will be deducted by 2 seconds, penalizing the user for incorrectly answering and shortening their overall time to finish all the questions.  The user's score will not be displayed until the quiz ends.

If the user finishes all the questions before the timer runs out, they will be prompted to the scoreboard page where they will input their information to be displayed on the final page.

At any moment within the quiz, the user has the option to restart the quiz.  If the user clicks on "Restart" they will be redirected to the intropage where they are welcomed to "Start" the quiz again.


Webpage link: https://pazjenni04.github.io/ready-set-quiz/

Contacat info: pazjenni1331@gmail.com
