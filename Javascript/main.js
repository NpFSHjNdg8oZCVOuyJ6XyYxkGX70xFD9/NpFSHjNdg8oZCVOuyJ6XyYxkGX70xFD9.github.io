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

    if (theme === 'animated') {
        animatedStyleMain.disabled = false;
        animatedButtons.disabled = false;
        staticStyleMain.disabled = true;
        staticButtons.disabled = true;
        flowStyleMain.disabled = true;
        flowButtons.disabled = true;
        if (flowBgCss) flowBgCss.disabled = true;
    } else if (theme === 'static') {
        animatedStyleMain.disabled = true;
        animatedButtons.disabled = true;
        staticStyleMain.disabled = false;
        staticButtons.disabled = false;
        flowStyleMain.disabled = true;
        flowButtons.disabled = true;
        if (flowBgCss) flowBgCss.disabled = true;
    } else if (theme === 'flow') {
        animatedStyleMain.disabled = true;
        animatedButtons.disabled = true;
        staticStyleMain.disabled = true;
        staticButtons.disabled = true;
        flowStyleMain.disabled = false;
        flowButtons.disabled = false;
        if (flowBgCss) flowBgCss.disabled = false;
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

// flow theme background effect

const canvas = document.getElementById('flow-bg');
if (canvas) {
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const linesCount = 2000;
    const lines = [];

    for (let i = 0; i < linesCount; i++) {
        lines.push({
            x: Math.random() * width,
            y: Math.random() * height,
            angle: Math.random() * 2 * Math.PI,
            speed: 0.3 + Math.random() * 0.5,
            length: 20 + Math.random() * 30
        });
    }

    function noise(x, y) {
        return (Math.sin(x * 0.01) + Math.cos(y * 0.01));
    }

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, width, height);

    function animate() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, width, height);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.lineWidth = 0.1;

        lines.forEach(line => {
            const nx = noise(line.x, line.y);
            const ny = noise(line.y, line.x);
            line.angle += (nx + ny) * 0.002;

            const x2 = line.x + Math.cos(line.angle) * line.length;
            const y2 = line.y + Math.sin(line.angle) * line.length;

            ctx.beginPath();
            ctx.moveTo(line.x, line.y);
            ctx.lineTo(x2, y2);
            ctx.stroke();

            line.x += Math.cos(line.angle) * line.speed;
            line.y += Math.sin(line.angle) * line.speed;

            if (line.x < 0) line.x = width;
            if (line.x > width) line.x = 0;
            if (line.y < 0) line.y = height;
            if (line.y > height) line.y = 0;
        });

        requestAnimationFrame(animate);
    }

    animate();
}