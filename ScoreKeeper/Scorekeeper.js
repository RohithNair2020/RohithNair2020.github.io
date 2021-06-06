const p1display = document.querySelector('#ponescore');
const p2display = document.querySelector('#ptwoscore');
const playto = document.querySelector('#gamesizeselect')
const b1 = document.querySelector('#b1');
const b2 = document.querySelector('#b2');
const reset = document.querySelector('#reset');


let p1score = 0;
let p2score = 0;
let winningscore = 3;
let isGameOver = false;

function resetgame() {
    p1score = 0;
    p1display.textContent = p1score;
    p2score = 0;
    p2display.textContent = p2score;
    isGameOver = false;
    p1display.classList.remove('winner', 'loser')
    p2display.classList.remove('winner', 'loser')
    b1.disabled = false;
    b2.disabled = false;
}

playto.addEventListener('change', function () {
    winningscore = parseInt(this.value);
    resetgame();
})

b1.addEventListener('click', function () {
    if (!isGameOver) {
        p1score++;
        if (p1score === winningscore) {
            isGameOver = true;
            p1display.classList.add('winner');
            p2display.classList.add('loser');
            b1.disabled = true;
            b2.disabled = true;
        }
        p1display.textContent = p1score;
    }
    else {
        isGameOver = true;
    }
});

b2.addEventListener('click', function () {
    if (!isGameOver) {
        p2score++;
        if (p2score === winningscore) {
            isGameOver = true;
            p2display.classList.add('winner');
            p1display.classList.add('loser');
            b1.disabled = true;
            b2.disabled = true;
        }
        p2display.textContent = p2score;
    }
    else {
        isGameOver = true;
    }
});

reset.addEventListener('click', resetgame);
