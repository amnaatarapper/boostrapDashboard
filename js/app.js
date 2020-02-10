const settingsToggle = document.querySelector('#settings-toggle');
const settings = document.querySelector('.settings');
settingsToggle.addEventListener('click', () => {
    if (settings.classList.contains('settings--open')) {
        settings.classList.remove('settings--open');
    } else {
        settings.classList.add('settings--open');
    }
});