document.addEventListener("DOMContentLoaded", function() {

    // ======== EFEK KETIK (TYPING EFFECT) ========
    const typingElement = document.getElementById('typing-effect');
    if (typingElement) {
        const textToType = "Rizki Firdaus Purnama";
        let index = 0;

        function type() {
            if (index < textToType.length) {
                typingElement.textContent += textToType.charAt(index);
                index++;
                setTimeout(type, 120); // Kecepatan ketik (ms)
            }
        }
        
        // Mulai efek ketik saat halaman dimuat
        type();
    }

    // ======== ANIMASI SAAT SCROLL (INTERSECTION OBSERVER) ========
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Berhenti mengamati setelah animasi muncul
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 // Muncul saat 10% elemen terlihat
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // ======== TUTUP NAVBAR MOBILE SAAT LINK DI-KLIK ========
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('navbarNav');
    
    // Cek jika menuToggle ada sebelum membuat instance Collapse
    if (menuToggle) {
        const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });
        navLinks.forEach((link) => {
            link.addEventListener('click', () => {
                // Cek jika navbar sedang terbuka (mode mobile)
                if (window.getComputedStyle(menuToggle).display !== 'none' && menuToggle.classList.contains('show')) {
                    bsCollapse.hide();
                }
            });
        });
    }

});