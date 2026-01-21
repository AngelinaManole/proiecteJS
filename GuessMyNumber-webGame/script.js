"use strict";

function generateRandom(){
  return Math.trunc(Math.random() * 20) + 1;
};

let number = generateRandom();
let highscore = 0;
let score = 20;

const curScore = function(guess){
  if(guess != number){
  score --}
};

const displayMessage = function(message){
  document.querySelector(".message").textContent = message;
};


document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  console.log(guess, typeof guess);


  if (!guess) {
    displayMessage("⛔No number")

  } else if (guess === number) {
    displayMessage("✅Correct Number!");

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    
    if(score > highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    };

  } else if (guess !== number){
      if(score > 1){

        displayMessage(guess > number ? "📈 Too High" : "📉 Too Low");
        curScore();
        document.querySelector('.score').textContent = score;

      }else {
        
          displayMessage("💥You lost the game");
          document.querySelector('.score').textContent = 0;
          document.querySelector('body').style.backgroundColor = '#8B0000';
          document.querySelector('.number').textContent = number;
        }
      }
    }
);

document.querySelector('.again').addEventListener('click',
  function(){

    number = generateRandom();
    score = 20;

      document.querySelector('.guess').value = '';
      document.querySelector('.score').textContent = '20';
      document.querySelector('.message').textContent = 'Start guessing...'
      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.number').style.width ='15rem';
      document.querySelector('.number').textContent = '?';
  }
);
