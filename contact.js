
        // Message Journey Animation Control
window.addEventListener('load', () => {
            const messageJourney = document.getElementById('messageJourney');
            const journeyOverlay = document.getElementById('journeyOverlay');

            // Start fade out after 6.5 seconds
            setTimeout(() => {
                journeyOverlay.classList.add('fade-out');
            }, 6500);

            // Remove the entire journey container after animation completes
            setTimeout(() => {
                messageJourney.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 7500);

            // Prevent scrolling during animation
            document.body.style.overflow = 'hidden';
        });

        // Theme Toggle Functionality
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = document.getElementById('themeIcon');
        const body = document.body;

        // Check for saved theme preference or default to 'dark'
        const currentTheme = localStorage.getItem('theme') || 'dark';
        body.setAttribute('data-theme', currentTheme);
        updateThemeIcon(currentTheme);

        themeToggle.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });

        function updateThemeIcon(theme) {
            if (theme === 'dark') {
                themeIcon.className = 'fas fa-moon theme-toggle-icon';
            } else {
                themeIcon.className = 'fas fa-sun theme-toggle-icon';
            }
        }

        // Modal Functionality
        const openModalBtn = document.getElementById('openModalBtn');
        const closeModalBtn = document.getElementById('closeModalBtn');
        const contactModal = document.getElementById('contactModal');

        openModalBtn.addEventListener('click', () => {
            contactModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        closeModalBtn.addEventListener('click', () => {
            contactModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        contactModal.addEventListener('click', (e) => {
            if (e.target === contactModal) {
                contactModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });

        // Form Submission
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Create success animation
            const submitBtn = contactForm.querySelector('.submit-btn');
            submitBtn.innerHTML = '<span>✓ Message Sent!</span>';
            submitBtn.style.background = '#22c55e';
            
            setTimeout(() => {
                contactModal.classList.remove('active');
                document.body.style.overflow = 'auto';
                contactForm.reset();
                submitBtn.innerHTML = '<span>Send Message</span>';
                submitBtn.style.background = 'var(--orange)';
            }, 2000);
        });

        

        // Parallax Effect on Scroll
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const particles = document.querySelectorAll('.particle');
            
            particles.forEach((particle, index) => {
                const speed = (index + 1) * 0.5;
                particle.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });

        // Add intersection observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.bento-item').forEach(item => {
            observer.observe(item);
        });

        // Add smooth scroll behavior
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Cursor trail effect (optional - adds a nice touch)
        document.addEventListener('mousemove', (e) => {
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            trail.style.cssText = `
                position: fixed;
                width: 5px;
                height: 5px;
                background: var(--orange);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                left: ${e.clientX}px;
                top: ${e.clientY}px;
                opacity: 0.5;
                animation: trailFade 1s ease forwards;
            `;
            document.body.appendChild(trail);
            
            setTimeout(() => trail.remove(), 1000);
        });

        // Add trail fade animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes trailFade {
                to {
                    opacity: 0;
                    transform: scale(0);
                }
            }
        `;
        document.head.appendChild(style);

        // Add loading animation
        window.addEventListener('load', () => {
            document.body.style.opacity = '0';
            setTimeout(() => {
                document.body.style.transition = 'opacity 0.5s ease';
                document.body.style.opacity = '1';
            }, 100);
        });

        // Easter egg: Konami code activation
        let konamiCode = [];
        const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
        
        document.addEventListener('keydown', (e) => {
            konamiCode.push(e.key);
            konamiCode = konamiCode.slice(-10);
            
            if (konamiCode.join('') === konamiPattern.join('')) {
                // Trigger special animation
                document.body.style.animation = 'rainbow 2s ease infinite';
                setTimeout(() => {
                    document.body.style.animation = '';
                }, 5000);
            }
        });

        const rainbowStyle = document.createElement('style');
        rainbowStyle.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(rainbowStyle);
