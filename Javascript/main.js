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
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    });

    const lines = [];
    const maxRadius = Math.sqrt(w * w + h * h) / 2;
    for (let i = 0; i < 5000; i++) {
        const r = Math.random();
        const biasedRadius = Math.pow(r, 0.4) * maxRadius;
        lines.push({
            angle: Math.random() * Math.PI * 2,
            radius: biasedRadius,
            speed: 0.001 + Math.random() * 0.004,
            o: 0.2 + Math.random() * 0.3
        });
    }

    ctx.fillRect(0, 0, w, h);

    function draw() {
        ctx.fillStyle = 'rgba(0,0,0,0.08)';
        ctx.fillRect(0, 0, w, h);

        for (let line of lines) {
            line.angle += line.speed;

            const x = w / 2 + Math.cos(line.angle) * line.radius;
            const y = h / 2 + Math.sin(line.angle) * line.radius;

            const tangent = line.angle + 1.57;

            ctx.strokeStyle = `rgba(255,255,255,${line.o})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + Math.cos(tangent) * 15, y + Math.sin(tangent) * 15);
            ctx.stroke();
        }

        requestAnimationFrame(draw);
    }

    draw();
}