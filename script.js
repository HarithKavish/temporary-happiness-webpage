document.addEventListener('DOMContentLoaded', function() {
    const exploreBtn = document.getElementById('exploreBtn');
    const body = document.body;

    // Dark theme styles
    body.style.backgroundColor = '#121212';
    body.style.color = '#e0e0e0';
    body.style.transition = 'background-color 0.5s ease, color 0.5s ease';

    // Darken existing sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.backgroundColor = '#1e1e1e';
        section.style.color = '#e0e0e0';
        section.style.border = '1px solid #333';
    });

    exploreBtn.addEventListener('click', function() {
        const sections = document.querySelectorAll('section');
        let currentIndex = 0;

        function scrollToSection() {
            sections[currentIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Animate the button
            exploreBtn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                exploreBtn.style.transform = 'scale(1)';
            }, 200);
        }

        // Initial scroll to first section
        scrollToSection();

        // Add click event to scroll to next section
        exploreBtn.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % sections.length;
            scrollToSection();
        });
    });

    // Dark theme hover effects
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#2a2a2a';
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'background-color var(--transition-speed) ease, transform var(--transition-speed) ease';
        });

        section.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#1e1e1e';
            this.style.transform = 'translateY(0)';
        });
    });

    // Dark theme content animations
    const contentElements = document.querySelectorAll('.happiness-item, .effect-item, .tip-item, .challenge-item');
    contentElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity var(--transition-speed) ease, transform var(--transition-speed) ease';

        // Animate when section is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        observer.observe(element);
    });

    // Dark theme floating animation with glow effect
    let buttonAngle = 0;
    const button = document.getElementById('exploreBtn');

    function animateButton() {
        button.style.transform = `rotate(${buttonAngle}deg) scale(1.02)`;
        button.style.boxShadow = `0 0 10px rgba(224, 224, 224, 0.7)`;
        buttonAngle += 0.5;
        if (buttonAngle > 360) buttonAngle = 0;
        requestAnimationFrame(animateButton);
    }

    setTimeout(animateButton, 1000);
});