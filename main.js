//Wait for page loading
document.addEventListener('DOMContentLoaded', function() {

    //Get time toggle button
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    //check if user has saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.textContent = 'Light Mode';
    }

    //add click event to toggle
    themeToggle.addEventListener('click', function() {

        //toggle dark theme class
        body.classList.toggle('dark-theme');

        //check if dark theme is active
        const isDark = body.classList.contains('dark-theme');

        //update button text
        themeToggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';

        //save theme preference
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    })
})