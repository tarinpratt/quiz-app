
const quizQuestions = [
    {
   num: 1,  
   question:'What is Michael Scott’s infamous catchphrase?',
   answer1:'“Bippity boppity, give me the zoppity.”',
   answer2:'“That’s what she said.”',
   answer3:'“Yeppers.”',
   answer4:'“World’s best boss.”'
   },
   {
   num: 2,
   question:'Which identifier is Dwight Schrute most proud of?',
   answer1:'Volunteer Sheriff’s Deputy',
   answer2:'Official Security Supervisor',
   answer3:'Assistant to the Regional Manager',
   answer4:'Recyclops',
   },
   {
   num: 3,
   question:'Which of the following is not a prank that Jim plays on Dwight?',
   answer1:'Unknowingly training Dwight to crave a mint every time Dwight hears a computer chime',
   answer2:'Tricking Dwight into thinking he’s being recruited by the CIA',
   answer3:'Putting Dwight’s stapler in Jell-O.',
   answer4:'Putting Dwight’s cellphone above the ceiling tiles and repeatedly calling it. ',
   },
   {
   num: 4,
   question:'Out of all of the loves in Michael’s life, who ends up being his biggest?',
   answer1:'The chair model',
   answer2:'Holly Flax',
   answer3:'Pam’s mom',
   answer4:'Jan Levinson',
   },
   {
   num: 5,
   question:'What fictional character does Michael not play throughout the series?',
   answer1:'Nathaniel Nutmeg',
   answer2:'Prison Mike',
   answer3:'Michael Scarn',
   answer4:'Orville Tootenbacher',
   },
   {
   num: 6,
   question:'If Michael had a gun with two bullets in it and was standing in a room with Hitler, Bin Laden, and Toby, what would he do?',
   answer1:'Use a curtain rod to kill them all',
   answer2:'Curve the bullet',
   answer3:'Line them up and use one bullet to shoot them all through the throat at the same time.',
   answer4:'Shoot Toby twice',
   },
   {
   num: 7,
   question:'Who was the most frequent winner of the “Hottest in the Office” Dundie award?',
   answer1:'Jim Halpert',  
   answer2:'Ryan Howard',
   answer3:'Pam Beesly',
   answer4:'Meredith Palmer',
   },
   {
   num: 8,
   question:'In the intro to season 4 episode 7, “Money,” what does Michael exclaim at Pam once he starts watching The Devil Wears Prada in his office?',
   answer1:'“Steak! Where’s my steak?!”',
   answer2:'“Coat!”',
   answer3:'“Where’s Armani? He’s on the phone. Too slow. You’re not going to Paris. I’m so much better than you.”',
   answer4:'All of the above',
   },
   {
   num: 9,
   question:'In season 2, episode 12, “The Injury”, what is the injury that Michael is suffering from?',
   answer1:'He sprained his ankle falling down the stairs in his condo.',
   answer2:'He burned his foot on his George Foreman Grill while grilling bacon beside his bed.',
   answer3:'He had his heart broken by yet another woman.',
   answer4:'He got a black eye from Pam hitting him in the face after he breaks up with her mom.',
   },
   {
   num: 10,
   question:'Which office romance never happened?',
   answer1:'Angela and Dwight',
   answer2:'Oscar and Matt',
   answer3:'Ryan and Kelly',
   answer4:'Jim and Pam',
   },
   ];
   
   const correctAnswers = [
    '“That’s what she said.”',
    'Assistant to the Regional Manager',
    'Putting Dwight’s cellphone above the ceiling tiles and repeatedly calling it. ',
    'Holly Flax',
    'Nathaniel Nutmeg',
    'Shoot Toby twice',
    'Ryan Howard',
    'All of the above',
    'He burned his foot on his George Foreman Grill while grilling bacon beside his bed.',
    'Oscar and Matt',
   ];
   
   let questionNumber = 0;
   let questionScore = 0;
   
   
   function createQuestionLayout(){
     if (questionNumber < 10){
   return  `<form>
        <fieldset>
         <section class="answerOptions" role="main">
            <div class="questionCounter">Question: ${quizQuestions[questionNumber].num}/10</div>
            <div class="scoreCounter">Score: ${questionScore}/10</div>
          <h3>${quizQuestions[questionNumber].question}
          </h3>
          <label for="answer1"><input type="radio" name="answers" id="answer1" value="${quizQuestions[questionNumber].answer1}" checked required>${quizQuestions[questionNumber].answer1}</label>
          <label for="answer2"><input type="radio" name="answers" id="answer2" value="${quizQuestions[questionNumber].answer2}" required>${quizQuestions[questionNumber].answer2}</label>
          <label for="answer3"><input type="radio" name="answers" id="answer3" value="${quizQuestions[questionNumber].answer3}" required>${quizQuestions[questionNumber].answer3}</label>
          <label for="answer4"><input type="radio" name="answers" id="answer4" value="${quizQuestions[questionNumber].answer4}" required>${quizQuestions[questionNumber].answer4}</label>
            <button class="js-submit">Submit</button>
           </section>
        </fieldset>
      </form>`;
   } else {
     return `<section class="results" role="main">
         <h2>Woohoo, you finished!</h2>
        <img src="https://media.giphy.com/media/KYElw07kzDspaBOwf9/giphy.gif" alt="spraying champagne" class="finalCelebration">
        <button class="js-restart-quiz">Try again?</button>
         <h3>You answered ${questionScore} out of 10 questions correctly!</h3>
         </section>`;
    }
   }
   
   
  
   function handleBeginButton(){
     $('.startPage').on('click', '.js-begin-button', function(event) {
       $('.startPage').remove();
       $('.questionPage').removeClass('hidden');
       $('.questionPage').html(createQuestionLayout());
     })
   }
   
   
   function validateUserAnswer(){
   const checkedAnswer = $('input:checked').val();
   if (checkedAnswer == correctAnswers[questionNumber]) {
     let newScore = questionScore++;
     return `<section class="correct" role="main">
             <h3>You are correct! High five!</h3>
             <img src="https://media.giphy.com/media/uIu5b0YYpTPR6/giphy.gif" alt="high five gif" class="highFive">
             <button class="js-next-button">Next</button>
             </section>`;
   } else {
     return `<section class="incorrect" role="main">
         <h3>No! You are wrong!</h3>
           <img src="https://media.giphy.com/media/12XMGIWtrHBl5e/giphy.gif" alt="screaming 'no' gif" class="screamNo">
           <h4>The correct answer is ${correctAnswers[questionNumber]}</h4>
           <button class="js-next-button">Next</button>
           </section>`;
     }
   }
 
   function handleSubmitButton(){
       $('.questionPage').on('click', '.js-submit', function(event) {
       $('.questionPage').html(validateUserAnswer());
     })
   }
   
       
    
   function handleNextButton(){
     $('.questionPage').on('click', '.js-next-button', function(event){
     let newQuestion = questionNumber++;
     $('.questionPage').html(createQuestionLayout());
     })
   }
   
   
   function handleTryAgainButton() {
   $('.questionPage').on('click', '.js-restart-quiz', function(event){
     questionNumber = 0;
     questionScore = 0;
     $('.questionPage').html(createQuestionLayout());
   })
   }
   
   function handleQuiz(){
    handleBeginButton();
    handleSubmitButton();
   handleNextButton();
   handleTryAgainButton();
   }
  
   $(handleQuiz);
