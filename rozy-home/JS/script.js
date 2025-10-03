// Hero Text Overlap Effect (Simple Mouse Follow/Parallax for dynamic feel)
        const heroSection = document.getElementById('hero');
        const avatar = document.querySelector('.avatar-placeholder');
        
        document.addEventListener('mousemove', (e) => {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const offsetX = (e.clientX - centerX) * -0.01;
            const offsetY = (e.clientY - centerY) * -0.01;

            // Apply a slight parallax movement to the avatar
            if (avatar) {
                avatar.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(0.9)`;
            }
        });