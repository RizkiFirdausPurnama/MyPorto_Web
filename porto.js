document.addEventListener("DOMContentLoaded", function() {

    const typingElement = document.getElementById('typing-effect');
    if (typingElement) {
        const textToType = "Rizki Firdaus Purnama";
        let index = 0;

        function type() {
            if (index < textToType.length) {
                typingElement.textContent += textToType.charAt(index);
                index++;
                setTimeout(type, 120); 
            }
        }
        
        type();
    }

    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('navbarNav');


    if (menuToggle) {
        const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
        navLinks.forEach((link) => {
            link.addEventListener('click', () => {
                if (window.getComputedStyle(menuToggle).display !== 'none' && menuToggle.classList.contains('show')) {
                    bsCollapse.hide();
                }
            });
        });
    }

});