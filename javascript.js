 /*first promt*/

 function enterName(){
   const person = prompt('May i know who is playing the game?');
   if (person !== null){
     document.querySelector('.promt').textContent = `Hello ${person}, how are you today, Pera niyo na chill hobe! Let's play the game.`
   }
 }
 enterName();



let secretNumber =Math.trunc(Math.random() * 20) + 1;
let score = 20; 
let highScore = 0;

document.querySelector('.btn-info').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess){
        document.querySelector('.message').textContent = 'Not a number, please enter a number between 1 and 20!';
    } else if (guess === secretNumber){
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = 'Hurray! Correct Number 💯';
        document.querySelector('body').style.backgroundColor = '#3CC47C';
        document.querySelector('.number-box').style.width = '22rem';
        document.querySelector('.number-box').style.backgroundColor = '#009C41';
        document.querySelector('.number').style.fontSize = '100px';
        if (score > highScore){
            highScore = score;
            document.querySelector('.hScore').textContent = highScore;
        }
    }else if (guess > secretNumber){
        if (score > 1){
            document.querySelector('.message').textContent = '🉐 Too high';
            score --;
            document.querySelector('.score').textContent = score;
        }  else {
            document.querySelector('.message').textContent = '🍁 OOH!! You lost the game';
            document.querySelector('.score').textContent = 0;
        }
    }else if (guess < secretNumber){
        if (score > 1){
            document.querySelector('.message').textContent = '🉐 Too low';
            score --;
            document.querySelector('.score').textContent = score;
        }  else {
            document.querySelector('.message').textContent = '🍁 OOH!! You lost the game';
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.btn-lg').addEventListener('click', 
function (){
    score = 20;
    secretNumber =Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing....❓';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = '20';
    document.querySelector('.guess').value = ' ';
    document.querySelector('body').style.backgroundColor = '#0E0B16';
        document.querySelector('.number-box').style.width = '12rem';
        document.querySelector('.number-box').style.backgroundColor = 'darkgrey';
        document.querySelector('.number').style.fontSize = '80px';


})