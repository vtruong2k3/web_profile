 function createStars() {
            const starsContainer = document.createElement('div');
            starsContainer.className = 'stars';
            document.querySelector('.hero-section').appendChild(starsContainer);
            
            for (let i = 0; i < 50; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.animationDelay = Math.random() * 3 + 's';
                starsContainer.appendChild(star);
            }
        }

        // Smooth scroll
        function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            section.scrollIntoView({ behavior: 'smooth' });
            
            const mobileMenu = document.getElementById('mobileMenu');
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }

        // Toggle mobile menu
        function toggleMenu() {
            const mobileMenu = document.getElementById('mobileMenu');
            mobileMenu.classList.toggle('hidden');
        }

        // Handle form submission
        function handleSubmit(event) {
            event.preventDefault();
            alert('💌 Cảm ơn bạn đã gửi tin nhắn! Mình sẽ phản hồi sớm nhất có thể nha! ✨');
            event.target.reset();
        }

        // Add scroll animations
        function addScrollAnimations() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.glass-card, .hobby-card').forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(50px)';
                el.style.transition = 'all 0.6s ease-out';
                observer.observe(el);
            });
        }

        // Initialize
        window.addEventListener('load', () => {
            createStars();
            addScrollAnimations();
        });

        // Add particle effect on mouse move
        document.addEventListener('mousemove', (e) => {
            if (Math.random() > 0.95) {
                const particle = document.createElement('div');
                particle.style.position = 'fixed';
                particle.style.left = e.clientX + 'px';
                particle.style.top = e.clientY + 'px';
                particle.style.pointerEvents = 'none';
                particle.style.fontSize = '20px';
                particle.style.zIndex = '9999';
                particle.textContent = ['✨', '💫', '⭐', '🌟'][Math.floor(Math.random() * 4)];
                document.body.appendChild(particle);
                
                setTimeout(() => {
                    particle.style.transition = 'all 1s ease-out';
                    particle.style.transform = 'translateY(-100px)';
                    particle.style.opacity = '0';
                }, 10);
                
                setTimeout(() => particle.remove(), 1000);
            }
        });