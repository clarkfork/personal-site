document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('back-to-top');

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    const copyText = document.getElementById('copyTarget');
    const copyMessage = document.getElementById('copyMessage');

    copyText.addEventListener('click', () => {
        const textToCopy = copyText.textContent;

        navigator.clipboard.writeText(textToCopy).then(() => {
            // Success callback
            copyMessage.style.display = 'block';
            setTimeout(() => {
                copyMessage.style.display = 'none';
            }, 3000);
        }).catch((error) => {
            // Error callback
            console.error('Failed to copy text: ', error);
        });
    });
});