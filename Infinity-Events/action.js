// script.js
// You can add basic JavaScript functionality here if needed.
// For example, form submission handling, simple UI interactions, etc.

// Example: Prevent form submission for this static version
document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.querySelector('.signup-form form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Registration functionality is not implemented in this simplified version.');
        });
    }
});