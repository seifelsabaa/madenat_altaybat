// Contact Form JavaScript

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});

function handleFormSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Validate form
    if (!name || !email || !subject || !message) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Show success message
    alert(`Thank you, ${name}! Your message has been sent successfully.\n\nWe'll get back to you as soon as possible.`);
    
    // Reset form
    document.getElementById('contactForm').reset();
    
    // In a real application, you would send this data to a server
    console.log('Form submitted:', {
        name,
        email,
        phone,
        subject,
        message,
        timestamp: new Date().toISOString()
    });
}
