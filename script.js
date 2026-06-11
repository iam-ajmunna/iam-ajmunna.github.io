// Assaduzzaman Munna - AI/ML Engineer Portfolio Script
document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // 1. HTML5 Canvas Neural Network Particle System
    // ----------------------------------------------------
    const canvas = document.getElementById('neural-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        let mouse = { x: null, y: null, radius: 160 };

        // Handle sizing
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        }

        // Particle Class
        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 2 + 1;
                // Move speed
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                // Color variation (teal, indigo, violet)
                const colors = ['#06b6d4', '#6366f1', '#8b5cf6'];
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.baseAlpha = Math.random() * 0.4 + 0.2;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.globalAlpha = this.baseAlpha;
                ctx.fill();
            }

            update() {
                // Bounds collision
                if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
                if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

                // Mouse interaction (gentle attraction)
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouse.radius) {
                        const force = (mouse.radius - distance) / mouse.radius;
                        // Pull vector
                        this.x += (dx / distance) * force * 0.8;
                        this.y += (dy / distance) * force * 0.8;
                    }
                }

                // Add default velocity
                this.x += this.vx;
                this.y += this.vy;
            }
        }

        // Initialize Particles list
        function initParticles() {
            particles = [];
            // Particle count relative to screen area (performance control)
            const count = Math.min(75, Math.round((canvas.width * canvas.height) / 22000));
            for (let i = 0; i < count; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                particles.push(new Particle(x, y));
            }
        }

        // Draw connecting lines between close particles
        function connectParticles() {
            const maxDistance = 115;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a + 1; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        // Draw line
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        // Line opacity based on closeness
                        const alpha = (1 - (distance / maxDistance)) * 0.15;
                        ctx.strokeStyle = '#6366f1';
                        ctx.globalAlpha = alpha;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }
            }
        }

        // Animation Loop
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Background is pure dark, we draw on top of it
            particles.forEach(p => {
                p.update();
                p.draw();
            });

            connectParticles();
            requestAnimationFrame(animate);
        }

        // Listeners
        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });
        window.addEventListener('mouseleave', () => {
            mouse.x = null;
            mouse.y = null;
        });

        // Start
        resizeCanvas();
        animate();
    }

    // ----------------------------------------------------
    // 2. Bento Card 3D Parallax Tilt & Glow Effects
    // ----------------------------------------------------
    const interactiveCards = document.querySelectorAll('.bento-card, .project-card, .pub-card');
    
    // Check if device supports hover interactions to avoid touch-device jank
    const supportsHover = window.matchMedia('(hover: hover)').matches;
    
    if (supportsHover) {
        interactiveCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left; // x coordinate inside element
                const y = e.clientY - rect.top;  // y coordinate inside element
                
                // Track mouse on elements for CSS glowing borders
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);

                // 3D Parallax Tilt Calculation
                const width = rect.width;
                const height = rect.height;
                const xc = width / 2;
                const yc = height / 2;
                
                // Max tilt angle (degrees)
                const maxTilt = 8;
                const tiltX = -((y - yc) / yc) * maxTilt;
                const tiltY = ((x - xc) / xc) * maxTilt;

                card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
            });
        });
    }

    // ----------------------------------------------------
    // 3. Intersection Observer for Scroll Reveals
    // ----------------------------------------------------
    const revealOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Trigger skill bar animations if this is the skills wrapper
                if (entry.target.classList.contains('skills-grid')) {
                    animateSkills();
                }
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    const revealElements = document.querySelectorAll('.fade-in, .skills-grid');
    revealElements.forEach(el => revealObserver.observe(el));

    // ----------------------------------------------------
    // 4. Scroll-Triggered Skill Bar Fills
    // ----------------------------------------------------
    function animateSkills() {
        const fillBars = document.querySelectorAll('.skill-bar-fill');
        fillBars.forEach(bar => {
            const val = bar.getAttribute('data-value');
            bar.style.width = val;
        });
    }

    // ----------------------------------------------------
    // 5. Contact Form Client-side Validation & Mock Sending
    // ----------------------------------------------------
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Clear status banners
            const successBanner = document.getElementById('submit-success');
            const errorBanner = document.getElementById('submit-error');
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            
            successBanner.style.display = 'none';
            errorBanner.style.display = 'none';

            let hasErrors = false;
            
            // Validation elements
            const nameInput = document.getElementById('form-name');
            const emailInput = document.getElementById('form-email');
            const messageInput = document.getElementById('form-message');

            const nameError = document.getElementById('error-name');
            const emailError = document.getElementById('error-email');
            const messageError = document.getElementById('error-message');

            // Reset errors
            [nameInput, emailInput, messageInput].forEach(inp => inp.classList.remove('validation-error'));
            [nameError, emailError, messageError].forEach(err => err.classList.remove('visible'));

            // Name validation
            if (!nameInput.value.trim()) {
                nameInput.classList.add('validation-error');
                nameError.classList.add('visible');
                hasErrors = true;
            }

            // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
                emailInput.classList.add('validation-error');
                emailError.classList.add('visible');
                hasErrors = true;
            }

            // Message validation
            if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
                messageInput.classList.add('validation-error');
                messageError.classList.add('visible');
                hasErrors = true;
            }

            if (hasErrors) return;

            // Display loading feedback
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Sending Packet...';

            // Mock network call
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
                
                // Random mock success
                successBanner.className = 'submit-status-banner success';
                successBanner.innerHTML = 'Connection established! Message packet sent successfully.';
                successBanner.style.display = 'block';
                
                contactForm.reset();
            }, 1500);
        });
    }
});