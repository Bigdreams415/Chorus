document.addEventListener('DOMContentLoaded', () => {
    const donateButtons = document.querySelectorAll('.donate-btn');

    donateButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Thank you for your donation!');
        });
    });
});
