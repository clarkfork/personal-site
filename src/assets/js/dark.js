document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.dark-mode-toggle');
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');
    
    // Get the current theme from localStorage or default to light
    let currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Function to update icon visibility and check icon sources
    const updateIcons = (theme) => {
        if (theme === 'light') {
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'block';
        } else {
            moonIcon.style.display = 'block';
            sunIcon.style.display = 'none';
        }
    };

    // Initialize the icons based on the current theme
    updateIcons(currentTheme);

    // Add event listener to the toggle button
    if (toggle) {
        toggle.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            theme = (theme === 'light') ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            updateIcons(theme);
        });
    }
});
