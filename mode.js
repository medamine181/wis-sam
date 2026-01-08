function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    const modeToggle = document.getElementById('mode-toggle');
    if (body.classList.contains('dark-mode')) {
        modeToggle.textContent = 'Light Mode';
    } else {
        modeToggle.textContent = 'Dark Mode';
    }
    
}