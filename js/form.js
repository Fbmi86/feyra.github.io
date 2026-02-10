// Form validation and handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            const email = form.querySelector('input[type="email"]').value;
            const name = form.querySelector('input[name="name"]').value;
            const message = form.querySelector('textarea').value;
            
            // Simple validation
            if (!email || !name || !message) {
                e.preventDefault();
                alert('Please fill in all fields');
                return false;
            }
            
            if (!isValidEmail(email)) {
                e.preventDefault();
                alert('Please enter a valid email');
                return false;
            }
            
            // Show loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            submitBtn.innerHTML = 'Sending...';
            submitBtn.disabled = true;
        });
    }
});

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}