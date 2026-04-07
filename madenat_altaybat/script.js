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
    const navbar = document.querySelector('.navbar');
    const navMenu = document.querySelector('.nav-menu');
    
    // Add hamburger menu for mobile
    if (window.innerWidth <= 768) {
        const hamburger = document.createElement('button');
        hamburger.className = 'hamburger';
        hamburger.innerHTML = '☰';
        
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        navbar.style.display = 'flex';
    }
}

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    }
});
