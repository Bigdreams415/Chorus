document.querySelector('.apply-btn').addEventListener('click', () => {
    window.scrollTo({
        top: document.querySelector('.cta-section').offsetTop,
        behavior: 'smooth'
    });
});
