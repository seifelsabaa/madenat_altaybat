// Main JavaScript for Madenat Altybat Website

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll behavior for navigation links
    setupSmoothScroll();
    
    // Mobile menu toggle (if needed)
    setupMobileMenu();
});

// Smooth scroll for anchor links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Mobile menu setup
function setupMobileMenu() {
    const container = document.querySelector('.navbar .container');
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '☰';
    hamburger.setAttribute('aria-label', 'Toggle menu');
    
    hamburger.addEventListener('click', () => {
        document.querySelector('.nav-menu').classList.toggle('active');
    });
    
    // Insert after logo-section
    const logoSection = document.querySelector('.logo-section');
    container.insertBefore(hamburger, logoSection.nextSibling);
}

// Handle window resize
window.addEventListener('resize', () => {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.classList.remove('active');
    }
});
