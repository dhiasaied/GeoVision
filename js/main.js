
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fermer le menu mobile quand on clique sur un lien
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scrolling pour les liens d'ancrage
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

    // Animation des statistiques
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const target = stat.getAttribute('data-target');
                    const count = target.replace(/\D/g, '');
                    const suffix = target.replace(/\d/g, '');
                    
                    let current = 0;
                    const increment = count / 100;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= count) {
                            stat.textContent = target;
                            clearInterval(timer);
                        } else {
                            stat.textContent = Math.floor(current) + suffix;
                        }
                    }, 20);
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        observer.observe(statsSection);
    }

    // Gestion du formulaire de contact
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulation d'envoi
            const button = this.querySelector('button');
            const originalText = button.innerHTML;
            
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
            button.disabled = true;
            
            setTimeout(() => {
                button.innerHTML = '<i class="fas fa-check"></i> Message envoyé !';
                button.style.background = '#27AE60';
                
                setTimeout(() => {
                    button.innerHTML = originalText;
                    button.disabled = false;
                    button.style.background = '';
                    this.reset();
                }, 2000);
            }, 1500);
        });
    }

    // Amélioration de l'accessibilité
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Gestion des erreurs d'images
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            if (!this.dataset.fallbackApplied) {
                this.dataset.fallbackApplied = 'true';
                this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTAiIGhlaWdodD0iOTAiIHZpZXdCb3g9IjAgMCA5MCA5MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDUiIGN5PSI0NSIgcj0iNDUiIGZpbGw9IiM0QTkwRTIiLz4KPHN2ZyB4PSIyNSIgeT0iMjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiPgo8cGF0aCBkPSJtMjAgMTctMiAyLTYtNi02IDYtMi0yIDgtOHoiLz4KPHN2ZyB4PSIyNSIgeT0iNTAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiPgo8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIzIi8+CjxwYXRoIGQ9Im0xMiAxIDEwIDEwLTEwIDEwTDIgMTJsNi02eiIvPgo8L3N2Zz4KPC9zdmc+Cg==';
            }
        });
    });

// --- Custom Button Actions ---
const btnExplorer = document.getElementById('btn-explorer');
const btnStartNow = document.getElementById('btn-start-now');
const btnDemo = document.getElementById('btn-demo');
const demoModal = document.getElementById('demo-modal');
const closeDemoModal = document.getElementById('close-demo-modal');

function scrollToContinents() {
    const section = document.getElementById('continents');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

if (btnExplorer) {
    btnExplorer.addEventListener('click', scrollToContinents);
}
if (btnStartNow) {
    btnStartNow.addEventListener('click', scrollToContinents);
}
if (btnDemo && demoModal) {
    btnDemo.addEventListener('click', function() {
        demoModal.style.display = 'flex';
    });
}
if (closeDemoModal && demoModal) {
    closeDemoModal.addEventListener('click', function() {
        demoModal.style.display = 'none';
    });
}
// Close modal on overlay click
if (demoModal) {
    demoModal.addEventListener('click', function(e) {
        if (e.target === demoModal) {
            demoModal.style.display = 'none';
        }
    });
}
// Close modal on Escape key
if (demoModal) {
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && demoModal.style.display !== 'none') {
            demoModal.style.display = 'none';
        }
    });
}
