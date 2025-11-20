let score = 0;
let autoclickers = 0;
let clickPower = 1;
let doubleClickers = 0;

let autoClickerCost = 50;
let doubleClickerCost = 200;

let scoreDisplay = document.getElementById('score');
let clickButton = document.getElementById('clickButton');
let upgrade1Button = document.getElementById('upgrade1');
let upgrade2Button = document.getElementById('upgrade2');
let autoClickerDisplay = document.getElementById('autoClickers');
let doubleClickerDisplay = document.getElementById('doubleClicks');

clickButton.onclick = function () {
    score = score + clickPower;
    scoreDisplay.textContent = score;
};

upgrade1Button.onclick = function () {
    if (score >= autoClickerCost) {
        score = score - autoClickerCost;
        autoclickers = autoclickers + 1;
        autoClickerCost = Math.floor(autoClickerCost * 1.5);
        scoreDisplay.textContent = score;
        autoClickerDisplay.textContent = autoclickers;
        upgrade1Button.textContent = 'Auto-Clicker (Cost: ' + autoClickerCost + ')';
    }
};

upgrade2Button.onclick = function () {
    if (score >= doubleClickerCost) {
        score = score - doubleClickerCost;
        doubleClickers = doubleClickers + 1;
        clickPower = clickPower * 2;
        doubleClickerCost = Math.floor(doubleClickerCost * 2.5);
        scoreDisplay.textContent = score;
        doubleClickerDisplay.textContent = doubleClickers;
        upgrade2Button.textContent = 'Double Click Power (Cost: ' + doubleClickerCost + ')';
    }
};

setInterval(function () {
    score = score + autoclickers;
    scoreDisplay.textContent = score;
}, 1000);