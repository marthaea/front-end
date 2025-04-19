document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const submitButton = document.querySelector('.btn');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the form from submitting immediately

        // Basic validation
        if (firstName.value.trim() === '') {
            alert("First Name is required.");
            return;
        }
        if (lastName.value.trim() === '') {
            alert("Last Name is required.");
            return;
        }
        if (email.value.trim() === '') {
            alert("Email is required.");
            return;
        }
        if (!validateEmail(email.value)) {
            alert("Please enter a valid email address.");
            return;
        }
        if (message.value.trim() === '') {
            alert("Message cannot be empty.");
            return;
        }

        // Simulate form submission
        alert("Thank you for your message! We will get back to you shortly.");

        // Reset the form after submission
        form.reset();
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }
});
