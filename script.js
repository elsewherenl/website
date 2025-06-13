// v2.3.0-20250613-production-ready
// Custom cursor functionality for desktop
const cursor = document.getElementById('cursor');

if (cursor) {
    // Only show cursor on desktop (1025px+)
    function updateCursorVisibility() {
        if (window.innerWidth >= 1025) {
            cursor.style.display = 'block';
            document.body.style.cursor = 'none';
            
            // Hide cursor on ALL interactive elements
            const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .hero-logo, .subscribe-input, .subscribe-button');
            interactiveElements.forEach(el => {
                el.style.cursor = 'none';
            });
        } else {
            cursor.style.display = 'none';
            document.body.style.cursor = 'auto';
            
            // Restore default cursors on mobile/tablet
            const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .hero-logo, .subscribe-input, .subscribe-button');
            interactiveElements.forEach(el => {
                el.style.cursor = '';
            });
        }
    }
    
    // Update cursor position
    document.addEventListener('mousemove', (e) => {
        if (window.innerWidth >= 1025) {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        }
    });
    
    // Check on page load
    updateCursorVisibility();
    
    // Check on window resize
    window.addEventListener('resize', updateCursorVisibility);
    
    // Re-apply cursor styles when new elements are added
    const observer = new MutationObserver(() => {
        if (window.innerWidth >= 1025) {
            const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .hero-logo, .subscribe-input, .subscribe-button');
            interactiveElements.forEach(el => {
                el.style.cursor = 'none';
            });
        }
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
}

// Optional: Form submission handling
const subscribeForm = document.querySelector('.subscribe-form');
if (subscribeForm) {
    subscribeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('.subscribe-input').value;
        
        // Add your form submission logic here
        console.log('Email submitted:', email);
        
        // For now, just show an alert
        alert('Thank you for subscribing! We\'ll be in touch soon.');
        
        // Reset form
        this.reset();
    });
}