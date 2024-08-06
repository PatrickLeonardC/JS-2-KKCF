// script.js

// Select the button and the form
const button = document.getElementById('toggleFormBtn');
const form = document.getElementById('contactForm');

// Add an event listener to the button
button.addEventListener('click', () => {
    // Toggle the visibility of the form
    if (form.style.display === 'none' || form.style.display === '') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
});
