const settingsBtn = document.getElementById('settingsBtn');
const settingsDropdown = document.getElementById('settingsDropdown');
const themeSelector = document.getElementById('themeSelector');

const savedTheme = localStorage.getItem('theme') || 'animated';

themeSelector.value = savedTheme;
applyTheme(savedTheme);

function applyTheme(theme) {
    const animatedStyleMain = document.getElementById('style-main-animated');
    const animatedButtons = document.getElementById('buttons-animated');
    const staticStyleMain = document.getElementById('style-main-static');
    const staticButtons = document.getElementById('buttons-static');
    const flowStyleMain = document.getElementById('style-main-flow');
    const flowButtons = document.getElementById('buttons-flow');
    const flowBgCss = document.getElementById('flow-bg-css');
    const flowCanvas = document.getElementById('flow-bg');

    if (theme === 'animated') {
        animatedStyleMain.disabled = false;
        animatedButtons.disabled = false;
        staticStyleMain.disabled = true;
        staticButtons.disabled = true;
        flowStyleMain.disabled = true;
        flowButtons.disabled = true;
        if (flowBgCss) flowBgCss.disabled = true;
        if (flowCanvas) flowCanvas.style.display = 'none';
    } else if (theme === 'static') {
        animatedStyleMain.disabled = true;
        animatedButtons.disabled = true;
        staticStyleMain.disabled = false;
        staticButtons.disabled = false;
        flowStyleMain.disabled = true;
        flowButtons.disabled = true;
        if (flowBgCss) flowBgCss.disabled = true;
        if (flowCanvas) flowCanvas.style.display = 'none';
    } else if (theme === 'flow') {
        animatedStyleMain.disabled = true;
        animatedButtons.disabled = true;
        staticStyleMain.disabled = true;
        staticButtons.disabled = true;
        flowStyleMain.disabled = false;
        flowButtons.disabled = false;
        if (flowBgCss) flowBgCss.disabled = false;
        if (flowCanvas) {
            flowCanvas.style.display = 'block';
            if (window.resizeFlowCanvas) window.resizeFlowCanvas();
        }
    }
}

themeSelector.addEventListener('change', (e) => {
    const selectedTheme = e.target.value;
    applyTheme(selectedTheme);
    localStorage.setItem('theme', selectedTheme);
});

settingsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    settingsDropdown.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!settingsBtn.contains(e.target) && !settingsDropdown.contains(e.target)) {
        settingsDropdown.classList.remove('active');
    }
});

settingsDropdown.addEventListener('click', (e) => {
    e.stopPropagation();
});


const canvas = document.getElementById('flow-bg');
if (canvas) {
    const ctx = canvas.getContext('2d');

    let canvasWidth, canvasHeight;
    let flowingLines = [];
    let isInitialized = false;

    function initializeCanvas() {
        canvasWidth = window.innerWidth;
        canvasHeight = Math.max(document.documentElement.scrollHeight, window.innerHeight);
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        flowingLines = [];
        const screenDiagonal = Math.sqrt(canvasWidth * canvasWidth + canvasHeight * canvasHeight);
        const maxDistanceFromCenter = screenDiagonal / 2;

        for (let i = 0; i < 5000; i++) {
            const randomValue = Math.random();
            const pushTowardsEdge = Math.pow(randomValue, 0.4);
            const distanceFromCenter = pushTowardsEdge * maxDistanceFromCenter;
            const startingAngle = Math.random() * 6.28;
            const rotationSpeed = 0.001 + Math.random() * 0.003;
            const opacity = 0.2 + Math.random() * 0.3;

            flowingLines.push({
                angle: startingAngle,
                radius: distanceFromCenter,
                speed: rotationSpeed,
                opacity: opacity
            });
        }

        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        isInitialized = true;
    }

    window.resizeFlowCanvas = function () {
        if (canvas.style.display !== 'none') {
            initializeCanvas();
        }
    };

    window.addEventListener('resize', window.resizeFlowCanvas);

    function animateLines() {
        if (!isInitialized || canvas.style.display === 'none') {
            requestAnimationFrame(animateLines);
            return;
        }

        ctx.fillStyle = 'rgba(0,0,0,0.08)';
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        const centerX = canvasWidth / 2;
        const centerY = canvasHeight / 2;

        for (let i = 0; i < flowingLines.length; i++) {
            const line = flowingLines[i];
            line.angle = line.angle + line.speed;

            const lineX = centerX + Math.cos(line.angle) * line.radius;
            const lineY = centerY + Math.sin(line.angle) * line.radius;

            const lineDirection = line.angle + 1.57;
            const lineLength = 21;
            const endX = lineX + Math.cos(lineDirection) * lineLength;
            const endY = lineY + Math.sin(lineDirection) * lineLength;

            ctx.strokeStyle = 'rgba(255,255,255,' + line.opacity + ')';
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(lineX, lineY);
            ctx.lineTo(endX, endY);
            ctx.stroke();
        }

        requestAnimationFrame(animateLines);
    }

    if (savedTheme === 'flow') {
        initializeCanvas();
    }

    animateLines();
}