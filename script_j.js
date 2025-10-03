/* Smooth scrolling for navigation links */
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId) || document.querySelector('section');
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

/* Fade-in effect for publication cards and book cards on scroll */
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.publication-card, .book-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        observer.observe(card);
    });

    /* Ensure scrolling list height is sufficient */
    const scrollingList = document.querySelector('.scrolling-list');
    if (scrollingList) {
        const container = document.querySelector('.scrolling-list-container');
        const listHeight = scrollingList.scrollHeight;
        scrollingList.style.height = `${listHeight}px`;
    }
});