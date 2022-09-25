const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const circles = document.querySelectorAll('.circle');
const scoreCount = document.querySelector('#score');
const overlay = document.querySelector('#overlay');
const closeBtn = document.querySelector('#closeBtn');
const endScore = document.querySelector('#endscore');
const insult = document.querySelector('#insult');

let score = 0;
let active = 0;
let timer;
let pace = 1000;
let rounds = 0;

let gameBeep = new Audio('sounds/sound2.mp3')
let gameOver = new Audio('sounds/end_sound.mp3')



// getting a random number
const getRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

circles.forEach((circle, i) => {
    circle.addEventListener('click', () => clickCircle(i));
});

stopBtn.style.visibility = 'hidden';

const clickCircle = (i) => {

    gameBeep.play();
   
   if (i !== active) {
    stopGame();
   } else {
    score++;
    rounds--;
   }
    scoreCount.textContent = `${score}`
    endScore.textContent = `Your score was: ${score}`

    if (score < 25) {
        insult.textContent = `Did you even try?`
    } else {
        insult.textContent = `Ehh, that's okay I guess..`
    }
};

const startGame = () => {

    startBtn.style.visibility = 'hidden';
    stopBtn.style.visibility = 'visible';
    

    if (rounds >= 3) {
        return stopGame();
    }

    let nextActive = pickNew(active);

    circles[nextActive].classList.toggle('active');
    circles[active].classList.remove('active');

    active = nextActive;
    console.log('current number', active);

    timer = setTimeout(startGame, pace);
    pace = pace -10;

    rounds++;

    function pickNew(active) {
        let nextActive = getRandomNum(0,3);

        if (nextActive != active) {
            return nextActive;
        } else {
            return pickNew(active);
        }
    }
};

const stopGame = () => {
    overlay.style.visibility = 'visible';
    clearTimeout(timer);
    gameOver.play();
};

const resetGame = () => {
    window.location.reload();
}

const modal = () => {
    overlay.classList.toggle('visible');
    
  };

  

startBtn.addEventListener('click', startGame);
//stopBtn.addEventListener('click', stopGame);
closeBtn.addEventListener('click', resetGame);
//stopBtn.addEventListener('click', modal);

stopBtn.addEventListener('click',() => {
stopGame();
modal();
});
