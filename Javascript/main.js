const settingsBtn = document.getElementById('settingsBtn');
const settingsDropdown = document.getElementById('settingsDropdown');
const themeSelector = document.getElementById('themeSelector');
const soundToggle = document.getElementById('soundToggle');
const backgroundMusic = document.getElementById('backgroundMusic');
const audioPlayer = document.getElementById('audioPlayer');

const savedTheme = localStorage.getItem('theme') || 'animated';
const savedSound = localStorage.getItem('soundEffects');

themeSelector.value = savedTheme;
applyTheme(savedTheme);

if (savedSound !== null) {
    soundToggle.checked = savedSound === 'true';
}

let soundEnabled = soundToggle.checked;

if (soundEnabled) {
    backgroundMusic.volume = 0.3;
    backgroundMusic.play().catch(e => console.log('Audio autoplay blocked:', e));
}

soundToggle.addEventListener('change', (e) => {
    soundEnabled = e.target.checked;
    localStorage.setItem('soundEffects', soundEnabled);

    if (soundEnabled) {
        backgroundMusic.currentTime = 0; // Reset to beginning
        backgroundMusic.play().catch(e => console.log('Audio play failed:', e));
    } else {
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0; // Reset when paused
    }
});

function applyTheme(theme) {
    const animatedStyleMain = document.getElementById('style-main-animated');
    const animatedButtons = document.getElementById('buttons-animated');
    const staticStyleMain = document.getElementById('style-main-static');
    const staticButtons = document.getElementById('buttons-static');

    if (theme === 'animated') {
        animatedStyleMain.disabled = false;
        animatedButtons.disabled = false;
        staticStyleMain.disabled = true;
        staticButtons.disabled = true;
    } else {
        animatedStyleMain.disabled = true;
        animatedButtons.disabled = true;
        staticStyleMain.disabled = false;
        staticButtons.disabled = false;
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