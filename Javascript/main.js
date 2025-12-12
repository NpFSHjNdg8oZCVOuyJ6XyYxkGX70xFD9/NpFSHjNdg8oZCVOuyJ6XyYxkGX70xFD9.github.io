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


const canvas = document.getElementById('flow-bg');
if (canvas) {
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const linesCount = 4000;
    const lines = [];

    for (let i = 0; i < linesCount; i++) {
        lines.push({
            x: Math.random() * width,
            y: Math.random() * height,
            angle: Math.random() * 2 * Math.PI,
            speed: 0.15 + Math.random() * 0.3,
            length: 10 + Math.random() * 20,
            opacity: 0.2 + Math.random() * 0.4
        });
    }

    function getSpiralAngle(x, y, time) {
        const centerX = width / 2;
        const centerY = height / 2;

        const dx = x - centerX;
        const dy = y - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const angleToCenter = Math.atan2(dy, dx);

        const spiralAngle = angleToCenter + Math.PI / 2; 
        const waveInfluence = Math.sin(distance * 0.01 + time * 0.001) * 0.3;

        return spiralAngle + waveInfluence;
    }

    let time = 0;

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, width, height);

    function animate() {
        time++;
        ctx.fillStyle = 'rgba(0, 0, 0, 0.015)';
        ctx.fillRect(0, 0, width, height);

        lines.forEach(line => {
            const targetAngle = getSpiralAngle(line.x, line.y, time);

            let angleDiff = targetAngle - line.angle;
            while (angleDiff > Math.PI) angleDiff -= 2 * Math.PI;
            while (angleDiff < -Math.PI) angleDiff += 2 * Math.PI;

            line.angle += angleDiff * 0.08;

            const x2 = line.x + Math.cos(line.angle) * line.length;
            const y2 = line.y + Math.sin(line.angle) * line.length;

            ctx.strokeStyle = `rgba(255, 255, 255, ${line.opacity * 0.5})`;
            ctx.lineWidth = 0.6;
            ctx.lineCap = 'round';

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