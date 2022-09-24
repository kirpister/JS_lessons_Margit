const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const circles = document.querySelectorAll('.circle');
const scoreCount = document.querySelector('#score');
const overlay = document.querySelector('#overlay');
const closeBtn = document.querySelector('#closeBtn');
const endScore = document.querySelector('#endscore');

let score = 0;
let active = 0;
let timer;
let pace = 1000;
let rounds = 0;

// getting a random number
const getRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

circles.forEach((circle, i) => {
    circle.addEventListener('click', () => clickCircle(i));
});

const clickCircle = (i) => {
   
   if (i !== active) {
    stopGame();
   } else {
    score++;
    rounds--;
   }
    scoreCount.textContent = `${score}`
    endScore.textContent = `Your score was: ${score}`
};

const startGame = () => {

    if (rounds >= 3) {
        return endGame();
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

