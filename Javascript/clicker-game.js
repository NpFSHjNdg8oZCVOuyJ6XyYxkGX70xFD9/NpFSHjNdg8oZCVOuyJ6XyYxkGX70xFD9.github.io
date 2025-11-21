let score = 0;
let autoclickers = 0;
let clickPower = 1;
let doubleClickers = 0;
let employeeDaniel = 0;

let autoClickerCost = 50;
let doubleClickerCost = 200;
let employeeDanielCost = 1000;

let menuUnlocked = false;
let scoreDisplay = document.getElementById('score');
let clickButton = document.getElementById('clickButton');
let upgrade1Button = document.getElementById('upgrade1');
let upgrade2Button = document.getElementById('upgrade2');
let upgrade3Button = document.getElementById('upgrade3');
let autoClickerDisplay = document.getElementById('autoClickers');
let doubleClickerDisplay = document.getElementById('doubleClicks');
let employeeDanielDisplay = document.getElementById('employeeDaniel');

clickButton.onclick = function () {
    score = score + clickPower;
    scoreDisplay.textContent = score;
    checkSecretMenu();
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

setInterval(function () {
    score = score + autoclickers;
    scoreDisplay.textContent = score;
    checkSecretMenu();
}, 1000);


upgrade2Button.onclick = function () {
    if (score >= doubleClickerCost) {
        score = score - doubleClickerCost;
        doubleClickers = doubleClickers + 1;
        clickPower = clickPower * 2;
        doubleClickerCost = Math.floor(doubleClickerCost * 1.5);
        scoreDisplay.textContent = score;
        doubleClickerDisplay.textContent = doubleClickers;
        upgrade2Button.textContent = 'Double Click Power (Cost: ' + doubleClickerCost + ')';
    }
};


upgrade3Button.onclick = function () {
    if (score >= employeeDanielCost) {
        score = score - employeeDanielCost;
        employeeDaniel = employeeDaniel + 1;
        employeeDanielCost = Math.floor(employeeDanielCost * 1.5);
        scoreDisplay.textContent = score;
        employeeDanielDisplay.textContent = employeeDaniel;
        autoClickerDisplay.textContent = autoclickers;
        upgrade3Button.textContent = "Hire Employee Daniel (Cost: " + employeeDanielCost + ")";
    }
};

setInterval(function () {
    score = score + (employeeDaniel * 20);
    scoreDisplay.textContent = score;
    checkSecretMenu(); 
}, 1000);


function checkSecretMenu() {
    if (score >= 1 && !menuUnlocked) {
        menuUnlocked = true;
        document.getElementById('secretMenu').classList.add("show")
        document.getElementById('openMenuButton').classList.add('show');
    }
}

document.getElementById('closeMenu').onclick = function() {
    document.getElementById('secretMenu').classList.remove("show")
    document.getElementById('openMenuButton').classList.add('show');
};

document.getElementById('openMenuButton').onclick = function() {
    document.getElementById('secretMenu').classList.add("show")
    document.getElementById('openMenuButton').classList.remove('show');
}

document.getElementById('gambleButton').onclick = function() {
    let gambleAmount = Math.floor(score / 2);
    let randomNum = Math.random();
    if (randomNum < 0.01) {
        let winnings = gambleAmount * 1000;
        score = score + winnings;
        alert("Jackpot! You won " + winnings + " points!");
    }
    scoreDisplay.textContent = score;
};

let criticalButtonCost = 25000;
document.getElementById('criticalbutton').onclick = function() {
    if (score >= criticalButtonCost) {
        score = score - criticalButtonCost;

        let manualClickValue = clickPower;
        let autoClickValue = autoclickers;
        let danielValue = employeeDaniel * 5;
        let criticalPower = manualClickValue + autoClickValue + danielValue;

        let randomNumber = Math.random();
        if (randomNumber < 0.05) {
            criticalGain = criticalPower * 100;
            score = score + criticalGain;
        }

        criticalButtonCost = criticalButtonCost * 10;

        scoreDisplay.textContent = score;
        document.getElementById('criticalbutton').textContent = "Critical Clicks (cost: " + criticalButtonCost + ")";
    }
};

