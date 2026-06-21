// Initialize AOS (Animate On Scroll)
document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    // Navbar background change on scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(10, 14, 23, 0.9)';
            nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
            nav.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
        } else {
            nav.style.background = 'var(--glass-bg)';
            nav.style.boxShadow = 'none';
            nav.style.borderBottom = '1px solid transparent';
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
