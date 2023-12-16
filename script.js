const sidebar = document.querySelector('.sidebar');
const sidebarCloseBtn = document.querySelector('.close-sidebar');

sidebarCloseBtn.onclick = () => {
    sidebar.classList.remove('active');
}

// settings
const settings = document.querySelector('.settings');
const toggleSettings = document.querySelector('.toggle-settings');

const body = document.querySelector('body');

// toggle switch box
toggleSettings.addEventListener('click', () => {
    settings.classList.toggle('show-settings');
});

// close switch box
body.addEventListener('click', () => {
    settings.classList.remove('show-settings');
});

settings.addEventListener('click', (e) => {
    e.stopPropagation();
});