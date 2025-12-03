function loadGame() {
    const savedData = localStorage.getItem('clickerGameData');
    if (savedData) {
        const data = JSON.parse(savedData);
        score = data.score || 0;
        autoclickers = data.autoclickers || 0;
        clickPower = data.clickPower || 1;
        doubleClickers = data.doubleClickers || 0;
        employeeDaniel = data.employeeDaniel || 0;
        autoClickerCost = data.autoClickerCost || 50;
        doubleClickerCost = data.doubleClickerCost || 200;
        employeeDanielCost = data.employeeDanielCost || 1000;
        criticalButtonCost = data.criticalButtonCost || 25000;
        menuUnlocked = data.menuUnlocked || false;

        updateAllDisplays();
    }
}

function saveGame() {
    const gameData = {
        score: score,
        autoclickers: autoclickers,
        clickPower: clickPower,
        doubleClickers: doubleClickers,
        employeeDaniel: employeeDaniel,
        autoClickerCost: autoClickerCost,
        doubleClickerCost: doubleClickerCost,
        employeeDanielCost: employeeDanielCost,
        criticalButtonCost: criticalButtonCost,
        menuUnlocked: menuUnlocked
    };
    localStorage.setItem('clickerGameData', JSON.stringify(gameData));
}

function updateAllDisplays() {
    scoreDisplay.textContent = Math.round(score);
    autoClickerDisplay.textContent = autoclickers;
    doubleClickerDisplay.textContent = doubleClickers;
    employeeDanielDisplay.textContent = employeeDaniel;
    upgrade1Button.textContent = 'Auto-Clicker (Cost: ' + autoClickerCost + ')';
    upgrade2Button.textContent = 'Double-Clicker (Cost: ' + doubleClickerCost + ')';
    upgrade3Button.textContent = "Employee Daniel (Cost: " + employeeDanielCost + ")";
    document.getElementById('criticalbutton').textContent = "Critical Clicks (cost: " + criticalButtonCost + ")";

    if (cpsDisplay) {
        cpsDisplay.textContent = calculateCPS();
    }

    if (menuUnlocked) {
        document.getElementById('secretMenu').classList.add("show");
        document.getElementById('openMenuButton').classList.add('show');
    }
}


let score = 0;
let autoclickers = 0;
let clickPower = 1;
let doubleClickers = 0;
let employeeDaniel = 0;

let autoClickerCost = 50;
let doubleClickerCost = 200;
let employeeDanielCost = 1000;
let criticalButtonCost = 25000;

let menuUnlocked = false;
let scoreDisplay = document.getElementById('score');
let cpsDisplay = document.getElementById('totalCPS');
let clickButton = document.getElementById('clickButton');
let upgrade1Button = document.getElementById('upgrade1');
let upgrade2Button = document.getElementById('upgrade2');
let upgrade3Button = document.getElementById('upgrade3');
let autoClickerDisplay = document.getElementById('autoClickers');
let doubleClickerDisplay = document.getElementById('doubleClicks');
let employeeDanielDisplay = document.getElementById('employeeDaniel');
let bulkBuyAuto = document.getElementById('bulkBuyAuto');
let bulkBuyAutoBtn = document.getElementById('bulkBuyAutoBtn');
let bulkBuyDouble = document.getElementById('bulkBuyDouble');
let bulkBuyDoubleBtn = document.getElementById('bulkBuyDoubleBtn');
let bulkBuyDaniel = document.getElementById('bulkBuyDaniel');
let bulkBuyDanielBtn = document.getElementById('bulkBuyDanielBtn');

loadGame();

clickButton.onclick = function () {
    score = score + clickPower;
    scoreDisplay.textContent = Math.round(score);
    checkSecretMenu();
    saveGame();
};

upgrade1Button.onclick = function () {
    if (score >= autoClickerCost) {
        score = score - autoClickerCost;
        autoclickers = autoclickers + 1;
        autoClickerCost = Math.floor(autoClickerCost * 1.5);
        scoreDisplay.textContent = Math.round(score);
        autoClickerDisplay.textContent = autoclickers;
        upgrade1Button.textContent = 'Auto-Clicker (Cost: ' + autoClickerCost + ')';
        if (cpsDisplay) cpsDisplay.textContent = calculateCPS();
        saveGame();
    }
};

bulkBuyAutoBtn.onclick = function () {
    let count = parseInt(bulkBuyAuto.value, 10) || 1;
    count = Math.max(1, count);

    let totalCost = 0;
    let currentCost = autoClickerCost;
    for (let i = 0; i < count; i++) {
        totalCost += currentCost;
        currentCost = Math.floor(currentCost * 1.5);
    }

    if (score >= totalCost) {
        score -= totalCost;
        autoclickers += count;
        autoClickerCost = currentCost;
        updateAllDisplays();
        saveGame();
    } else {
        alert('Not enough points! Need ' + totalCost + ' for ' + count + ' Auto-Clicker(s).');
    }
};

setInterval(function () {
    const autoClickerMultiplier = Math.pow(1.3, doubleClickers);
    score = score + (autoclickers * autoClickerMultiplier);
    scoreDisplay.textContent = Math.round(score);
    checkSecretMenu();
    saveGame();
}, 1000);


upgrade2Button.onclick = function () {
    if (score >= doubleClickerCost) {
        score = score - doubleClickerCost;
        doubleClickers = doubleClickers + 1;
        clickPower = clickPower * 2;
        doubleClickerCost = Math.floor(doubleClickerCost * 2.3);
        scoreDisplay.textContent = Math.round(score);
        doubleClickerDisplay.textContent = doubleClickers;
        upgrade2Button.textContent = 'Double Click Power (Cost: ' + doubleClickerCost + ')';
        if (cpsDisplay) cpsDisplay.textContent = calculateCPS();
        saveGame();
    }
};

bulkBuyDoubleBtn.onclick = function () {
    let count = parseInt(bulkBuyDouble.value, 10) || 1;
    count = Math.max(1, count);

    let totalCost = 0;
    let currentCost = doubleClickerCost;
    let newClickPower = clickPower;
    for (let i = 0; i < count; i++) {
        totalCost += currentCost;
        currentCost = Math.floor(currentCost * 2.3);
        newClickPower *= 2;
    }

    if (score >= totalCost) {
        score -= totalCost;
        doubleClickers += count;
        clickPower = newClickPower;
        doubleClickerCost = currentCost;
        updateAllDisplays();
        saveGame();
    } else {
        alert('Not enough points! Need ' + totalCost + ' for ' + count + ' Double Click(s).');
    }
};


upgrade3Button.onclick = function () {
    if (score >= employeeDanielCost) {
        score = score - employeeDanielCost;
        employeeDaniel = employeeDaniel + 1;
        employeeDanielCost = Math.floor(employeeDanielCost * 1.5);
        scoreDisplay.textContent = Math.round(score);
        employeeDanielDisplay.textContent = employeeDaniel;
        autoClickerDisplay.textContent = autoclickers;
        upgrade3Button.textContent = "Hire Employee Daniel (Cost: " + employeeDanielCost + ")";
        if (cpsDisplay) cpsDisplay.textContent = calculateCPS();
        saveGame();
    }
};

bulkBuyDanielBtn.onclick = function () {
    let count = parseInt(bulkBuyDaniel.value, 10) || 1;
    count = Math.max(1, count);

    let totalCost = 0;
    let currentCost = employeeDanielCost;
    for (let i = 0; i < count; i++) {
        totalCost += currentCost;
        currentCost = Math.floor(currentCost * 1.5);
    }

    if (score >= totalCost) {
        score -= totalCost;
        employeeDaniel += count;
        employeeDanielCost = currentCost;
        updateAllDisplays();
        saveGame();
    } else {
        alert('Not enough points! Need ' + totalCost + ' for ' + count + ' Employee Daniel(s).');
    }
};

setInterval(function () {
    score = score + (employeeDaniel * 20);
    scoreDisplay.textContent = Math.round(score);
    checkSecretMenu();
}, 1000);

function calculateCPS() {
    const autoClickerMultiplier = Math.pow(1.3, doubleClickers);
    const autoCPS = autoclickers * autoClickerMultiplier;
    const danielCPS = employeeDaniel * 20;
    return Math.floor(autoCPS + danielCPS);
}

function checkSecretMenu() {
    if (score >= 10000 && !menuUnlocked) {
        menuUnlocked = true;
        document.getElementById('secretMenu').classList.add("show")
        document.getElementById('openMenuButton').classList.add('show');
        saveGame();
    }
}

document.getElementById('closeMenu').onclick = function () {
    document.getElementById('secretMenu').classList.remove("show")
    document.getElementById('openMenuButton').classList.add('show');
};

document.getElementById('openMenuButton').onclick = function () {
    document.getElementById('secretMenu').classList.add("show")
    document.getElementById('openMenuButton').classList.remove('show');
}

document.getElementById('gambleButton').onclick = function () {
    let gambleAmount = Math.floor(score / 2);
    let randomNum = Math.random();
    if (randomNum <= 0.01) {
        let winnings = gambleAmount * 1000;
        score = score + winnings;
        alert("Jackpot! You won " + winnings + " points!");
    }
    scoreDisplay.textContent = Math.round(score);
    saveGame();
};

document.getElementById('criticalbutton').onclick = function () {
    if (score >= criticalButtonCost) {
        score = score - criticalButtonCost;

        let manualClickValue = clickPower;
        let autoClickValue = autoclickers;
        let danielValue = employeeDaniel * 5;
        let criticalPower = manualClickValue + autoClickValue + danielValue;

        let randomNumber = Math.random();
        if (randomNumber <= 0.05) {
            criticalGain = criticalPower * 100;
            score = score + criticalGain;
        }

        criticalButtonCost = criticalButtonCost * 10;

        scoreDisplay.textContent = Math.round(score);
        document.getElementById('criticalbutton').textContent = "Critical Clicks (cost: " + criticalButtonCost + ")";
        saveGame();
    }
};

