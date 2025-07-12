// GeoVision - Main JavaScript File
// Making all buttons functional

document.addEventListener('DOMContentLoaded', function() {
    console.log('GeoVision - All buttons are now functional!');

    // ===== NAVIGATION FUNCTIONALITY =====
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navMenu = document.querySelector('.nav-menu');
                const hamburger = document.querySelector('.hamburger');
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // ===== HERO SECTION BUTTONS =====
    
    // "Commencer l'exploration" button
    const exploreBtn = document.querySelector('.hero-buttons .btn-primary');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function() {
            showNotification('Démarrage de l\'exploration interactive...', 'success');
            // Scroll to continents section
            const continentsSection = document.querySelector('#continents');
            if (continentsSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = continentsSection.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // "Voir la démo" button
    const demoBtn = document.querySelector('.hero-buttons .btn-secondary');
    if (demoBtn) {
        demoBtn.addEventListener('click', function() {
            showNotification('Lancement de la démonstration...', 'info');
            // Simulate demo loading
            setTimeout(() => {
                showNotification('Démo chargée ! Explorez les fonctionnalités interactives.', 'success');
            }, 2000);
        });
    }

    // ===== CTA SECTION BUTTON =====
    
    // "Commencer maintenant" button
    const ctaBtn = document.querySelector('.cta .btn-primary');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', function() {
            showNotification('Redirection vers la plateforme complète...', 'info');
            // Simulate registration process
            setTimeout(() => {
                showNotification('Bienvenue sur GeoVision ! Votre compte a été créé.', 'success');
            }, 1500);
        });
    }

    // ===== FEATURE CARDS INTERACTIVITY =====
    
    // Make all feature cards clickable
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('h3').textContent;
            const icon = this.querySelector('.feature-icon i').className;
            
            showNotification(`Exploration de : ${title}`, 'info');
            
            // Add click animation
            this.classList.add('click-effect');
            setTimeout(() => {
                this.classList.remove('click-effect');
            }, 150);
            
            // Add active effect
            this.classList.add('active-effect');
            setTimeout(() => {
                this.classList.remove('active-effect');
            }, 100);
            
            // Simulate content loading
            setTimeout(() => {
                showNotification(`Contenu chargé pour ${title}`, 'success');
            }, 1000);
        });
        
        // Add hover effects
        card.addEventListener('mouseenter', function() {
            this.classList.add('hover-effect');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('hover-effect');
        });
    });

    // ===== CONTACT FORM FUNCTIONALITY =====
    
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Validate form
            if (!name || !email || !message) {
                showNotification('Veuillez remplir tous les champs', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Veuillez entrer une adresse email valide', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Envoi du message en cours...', 'info');
            
            setTimeout(() => {
                showNotification('Message envoyé avec succès ! Nous vous répondrons bientôt.', 'success');
                this.reset();
            }, 2000);
        });
    }

    // ===== GOOGLE MAPS INTEGRATION =====
    
    // Add interaction to the map overlay
    const mapOverlay = document.querySelector('.map-overlay');
    if (mapOverlay) {
        mapOverlay.addEventListener('click', function() {
            showNotification('Ouverture de Google Maps pour plus de détails...', 'info');
        });
    }

    // ===== SOCIAL MEDIA LINKS =====
    
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.querySelector('i').className;
            let platformName = '';
            
            if (platform.includes('facebook')) platformName = 'Facebook';
            else if (platform.includes('twitter')) platformName = 'Twitter';
            else if (platform.includes('instagram')) platformName = 'Instagram';
            else if (platform.includes('youtube')) platformName = 'YouTube';
            
            showNotification(`Redirection vers ${platformName}...`, 'info');
            
            // Simulate external link opening
            setTimeout(() => {
                showNotification(`${platformName} ouvert dans un nouvel onglet`, 'success');
            }, 1000);
        });
    });

    // ===== FOOTER NAVIGATION =====
    
    const footerLinks = document.querySelectorAll('.footer-section a');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const linkText = this.textContent;
            
            if (this.getAttribute('href') === '#') {
                showNotification(`Page ${linkText} en cours de développement...`, 'info');
            } else {
                // Handle internal links
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ===== STATISTICS ANIMATION =====
    
    // Animate statistics when they come into view
    const statNumbers = document.querySelectorAll('.stat-number');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target;
                const targetValue = statNumber.getAttribute('data-target');
                
                if (targetValue && !statNumber.classList.contains('animated')) {
                    animateNumber(statNumber, targetValue);
                    statNumber.classList.add('animated');
                }
            }
        });
    }, observerOptions);
    
    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });

    // ===== UTILITY FUNCTIONS =====
    
    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Number animation
    function animateNumber(element, target) {
        const targetNum = parseInt(target.replace(/\D/g, ''));
        const suffix = target.replace(/\d/g, '');
        let current = 0;
        const increment = targetNum / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= targetNum) {
                current = targetNum;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + suffix;
        }, 30);
    }
    
    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        });
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.transform = 'translateX(400px)';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }

    // ===== ADDITIONAL INTERACTIVITY =====
    
    // Logo click functionality
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            showNotification('Retour à l\'accueil', 'info');
        });
    }
    
    // Footer logo click
    const footerLogo = document.querySelector('.footer-logo');
    if (footerLogo) {
        footerLogo.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ===== KEYBOARD SHORTCUTS =====
    
    document.addEventListener('keydown', function(e) {
        // Escape key to close mobile menu
        if (e.key === 'Escape') {
            const navMenu = document.querySelector('.nav-menu');
            const hamburger = document.querySelector('.hamburger');
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
        
        // Home key to scroll to top
        if (e.key === 'Home') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });

    console.log('Tous les boutons sont maintenant fonctionnels !');
}); 