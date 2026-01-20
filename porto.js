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

    const roleElement = document.querySelector('.sub-role');
    if (roleElement) {
        const roles = ["Web Development","Full Stack Development","Front-End Development", "Data Analytics"]; 
        let wordIndex = 0;
        let charIndex = 0;
        let isErasing = false;
        
        const typeDelay = 150;    
        const eraseDelay = 30;    
        const pauseDelay = 1400; 

        function manageRoleTyping() {
            const currentRole = roles[wordIndex];

            if (isErasing) {
                if (charIndex > 0) {
                    roleElement.textContent = currentRole.substring(0, charIndex - 1);
                    charIndex--;
                    setTimeout(manageRoleTyping, eraseDelay);
                } else {
                    isErasing = false;
                    wordIndex = (wordIndex + 1) % roles.length; 
                    setTimeout(manageRoleTyping, typeDelay);
                }
            } else {
                if (charIndex < currentRole.length) {
                    roleElement.textContent = currentRole.substring(0, charIndex + 1);
                    charIndex++;
                    setTimeout(manageRoleTyping, typeDelay);
                } else {
                    isErasing = true;
                    setTimeout(manageRoleTyping, pauseDelay); 
                }
            }
        }
        
        setTimeout(manageRoleTyping, 500); 
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