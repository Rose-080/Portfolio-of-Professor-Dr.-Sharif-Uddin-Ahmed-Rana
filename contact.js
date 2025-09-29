

// Contact modal functionality
         const modal = document.getElementById('contactModal');
        const openBtn = document.getElementById('openModalBtn');
        const closeBtn = document.getElementById('closeModalBtn');
        const modalContent = modal.querySelector('.modal-content');

        // Open modal
        openBtn.addEventListener('click', () => {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        // Close modal
        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }

        closeBtn.addEventListener('click', closeModal);

        // Close when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Close with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });

        // Form submission handler
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const btn = this.querySelector('.submit-btn');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<span>Sending...</span>';
            btn.style.opacity = '0.7';
            btn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                btn.innerHTML = '<span>✓ Message Sent!</span>';
                btn.style.background = '#00c851';
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.background = '#ff8c00';
                    btn.style.opacity = '1';
                    btn.disabled = false;
                    this.reset();
                    closeModal();
                }, 2000);
            }, 1500);
        });