
document.addEventListener('DOMContentLoaded', function() {

    
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.textContent = 'Light Mode';
    }

    
    themeToggle.addEventListener('click', function() {

        
        body.classList.toggle('dark-theme');

        
        const isDark = body.classList.contains('dark-theme');

       
        themeToggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';

        
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    })

    const apiURL = "https://qapi.vercel.app/api/random";
    const quoteDisplay = document.getElementById("quoteDisplay");
    const authorDisplay = document.getElementById("authorDisplay");

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            console.log('TEST');
            quoteDisplay.textContent = `"${data.quote}"`;
            authorDisplay.textContent = `— ${data.author}`;
        })
        .catch(error => {
            console.error("Error fetching quote:", error);
            quoteDisplay.textContent = "Failed to load quote.";
        });

})