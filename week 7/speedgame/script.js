const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const circles = document.querySelectorAll('.circle');
const scoreCount = document.querySelector('#score');
const overlay = document.querySelector('#overlay');
const closeBtn = document.querySelector('#closeBtn');
const endScore = document.querySelector('#endscore');
const message = document.querySelector('#message');

stopBtn.style.visibility = 'hidden';

let score = 0;
let active = 0;
let timer;
let pace = 1200;
let rounds = 0;

// SOUNDS
let gameBeep = new Audio('sounds/sound2.mp3')
let gameOver = new Audio('sounds/vinyl-scratch2.mp3')
let gameStart = new Audio('sounds/bass-sounds.mp3')


// getting a random number
const getRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

circles.forEach((circle, i) => {
    circle.addEventListener('click', () => clickCircle(i));
});

const clickCircle = (i) => {

    gameBeep.play();

   if (i !== active) {
    stopGame();
    } else {
    score++;
    rounds--;
   }

    scoreCount.textContent = `${score} records collected.`
    endScore.textContent = `${score} records collected.`

    if (score < 10) {
        message.textContent = `Come on, more records!!`
    } else if (score < 20) {
        message.textContent = `That's a decent haul!`
    } else {
        message.textContent = `Whoa, so many records!!`
    }
};

const startGame = () => {

    gameStart.play();
    
    startBtn.style.visibility = 'hidden';
    stopBtn.style.visibility = 'visible';

    for (let i = 0; i < circles.length; i++)
    circles[i].style.pointerEvents = "auto";
    
    if (rounds >= 3) {
        return stopGame(); 
    }

    let nextActive = pickNew(active);

    circles[nextActive].classList.toggle('active');
    circles[active].classList.remove('active');

    active = nextActive;
    
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

    gameStart.pause();
    overlay.style.visibility = 'visible';
    clearTimeout(timer);
    gameOver.play();
};

const resetGame = () => {
    window.location.reload();
};

const modal = () => {
    overlay.classList.toggle('visible');
};

startBtn.addEventListener('click', startGame);
closeBtn.addEventListener('click', resetGame);

stopBtn.addEventListener('click',() => {
stopGame();
modal();
});

