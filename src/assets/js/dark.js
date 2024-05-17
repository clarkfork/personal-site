document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.dark-mode-toggle');
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');
    const checkIcons = document.querySelectorAll('.check-icon img');
    
    // Get the current theme from localStorage or default to dark
    let currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Show/hide icons based on current theme
    if (currentTheme === 'light') {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
        // Change check icon src to check-dark.svg
        checkIcons.forEach(icon => {
            icon.src = '/assets/svgs/check-dark.svg';
        });
    } else {
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    }
    
    // Add event listener to the toggle button
    toggle.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'light') {
            theme = 'dark';
            moonIcon.style.display = 'block';
            sunIcon.style.display = 'none';
            // Change check icon src to check.svg
            checkIcons.forEach(icon => {
                icon.src = '/assets/svgs/check.svg';
            });
        } else {
            theme = 'light';
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'block';
            // Change check icon src to check-dark.svg
            checkIcons.forEach(icon => {
                icon.src = '/assets/svgs/check-dark.svg';
            });
        }
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    });
});
