const button = document.querySelector('.click-button');
const gameArea = document.querySelector('.game-area');
const scoreDisplay = document.querySelector('.score');
const difficultyBtns = document.querySelectorAll('.difficulty-btn');

let score = 0;
let currentDifficulty = 'Easy';
let isGameStarted = false;
let moveTimeout = null;

const difficulties = {
    'Easy': { delay: 100, scale: 1 },
    'Medium': { delay: 75, scale: 0.7 },
    'Hard': { delay: 45, scale: 0.6 },
    'Extreme': { delay: 25, scale: 0.33 },
    'Nightmare': { delay: 5, scale: 0.125 },
    'Master': { delay: 1, scale: 0.065 }
};

button.addEventListener('click', () => {
    if (!isGameStarted) {
        isGameStarted = true;
        button.textContent = 'Click Me!';
    }

    score++;
    scoreDisplay.textContent = score;
});

button.addEventListener('mousemove', () => {
    if (!isGameStarted) return;

    if (moveTimeout) {
        clearTimeout(moveTimeout);
    }

    moveTimeout = setTimeout(() => {
        moveButton();
    }, difficulties[currentDifficulty].delay);
});

function moveButton() {
    const gameAreaRect = gameArea.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const maxX = gameAreaRect.width - buttonRect.width;
    const maxY = gameAreaRect.height - buttonRect.height;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
}

difficultyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        difficultyBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentDifficulty = btn.textContent;
        button.style.transform = `translate(-50%, -50%) scale(${difficulties[currentDifficulty].scale})`;
    });
});
