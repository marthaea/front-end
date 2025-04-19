document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (hamburger && mobileMenu) {
        hamburger.addEventListener("click", function() {
            mobileMenu.classList.toggle("active");
            // Toggle hamburger icon between ☰ and ✕
            if (mobileMenu.classList.contains("active")) {
                hamburger.innerHTML = "✕";
            } else {
                hamburger.innerHTML = "☰";
            }
        });
    } else {
        console.log("Hamburger menu not required (elements not found)");
    }

    document.addEventListener('DOMContentLoaded', function() {
        console.log("DOM fully loaded"); // Debug check
    
        // Signup form functionality - MOVED TO TOP
        const signupForm = document.getElementById('signupForm');
        if (!signupForm) {
            console.error("CRITICAL: signupForm not found");
            return;
        }
    
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log("Form submission intercepted"); // Debug
            handleSignup();
        });
    

        function handleSignup() {
            // Get elements
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const password = document.getElementById('password');
            const confirmPassword = document.getElementById('confirm-password');
            
            // Get values
            const nameValue = name.value.trim();
            const emailValue = email.value.trim();
            const passwordValue = password.value;
            const confirmPasswordValue = confirmPassword.value;
        
            // Reset previous errors
            document.querySelectorAll('.error-message').forEach(el => {
                el.textContent = '';
            });
            document.querySelectorAll('.error-highlight').forEach(el => {
                el.classList.remove('error-highlight');
            });
        
            let isValid = true;
        
            // Name validation
            if (!nameValue) {
                document.getElementById('name-error').textContent = 'Name is required';
                name.classList.add('error-highlight');
                isValid = false;
            }
        
            // Email validation
            if (!emailValue) {
                document.getElementById('email-error').textContent = 'Email is required';
                email.classList.add('error-highlight');
                isValid = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
                document.getElementById('email-error').textContent = 'Please enter a valid email';
                email.classList.add('error-highlight');
                isValid = false;
            }
        
            // Password validation
            if (!passwordValue) {
                document.getElementById('password-error').textContent = 'Password is required';
                password.classList.add('error-highlight');
                isValid = false;
            } else if (passwordValue.length < 8) {
                document.getElementById('password-error').textContent = 'Password must be at least 8 characters';
                password.classList.add('error-highlight');
                isValid = false;
            }
        
            // Confirm password validation
            if (!confirmPasswordValue) {
                document.getElementById('confirm-error').textContent = 'Please confirm your password';
                confirmPassword.classList.add('error-highlight');
                isValid = false;
            } else if (passwordValue !== confirmPasswordValue) {
                document.getElementById('confirm-error').textContent = 'Passwords do not match';
                password.classList.add('error-highlight');
                confirmPassword.classList.add('error-highlight');
                isValid = false;
            }
        
            if (!isValid) {
                // Focus on first error field
                const firstError = document.querySelector('.error-highlight');
                if (firstError) firstError.focus();
                return;
            }
        
            // If valid, proceed with form submission
            alert('Signup successful!');
            signupForm.reset();
        }
    });
        });




         // Form validation
         document.getElementById('profileForm').addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            
            // Clear previous errors
            document.querySelectorAll('.error-message').forEach(el => {
                el.style.display = 'none';
            });
            
            // Validate first name
            if (!document.getElementById('firstName').value.trim()) {
                document.getElementById('firstName-error').textContent = 'First name is required';
                document.getElementById('firstName-error').style.display = 'block';
                isValid = false;
            }
            
            // Validate email
            const email = document.getElementById('email').value.trim();
            if (!email) {
                document.getElementById('email-error').textContent = 'Email is required';
                document.getElementById('email-error').style.display = 'block';
                isValid = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                document.getElementById('email-error').textContent = 'Please enter a valid email';
                document.getElementById('email-error').style.display = 'block';
                isValid = false;
            }
            
            if (isValid) {
                alert('Profile updated successfully!');
                // Here you would typically send data to your backend
                // Example: fetch('/api/profile', { method: 'POST', body: JSON.stringify(formData) })
            }
        });
        
        // Password modal functionality
        const passwordModal = document.getElementById('passwordModal');
        document.getElementById('changePasswordBtn').addEventListener('click', function(e) {
            e.preventDefault();
            passwordModal.style.display = 'flex';
        });
        
        document.getElementById('cancelPasswordBtn').addEventListener('click', function(e) {
            e.preventDefault();
            passwordModal.style.display = 'none';
        });
        
        document.getElementById('updatePasswordBtn').addEventListener('click', function() {
            // Add password change logic here
            const newPassword = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (newPassword !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            alert('Password updated successfully!');
            passwordModal.style.display = 'none';
        });



 // Image Upload Functionality
        document.getElementById('imageUpload').addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    document.getElementById('profileImage').src = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        });


        //cart_section

        function removeItem(button) {
            const item = button.parentElement;
            const price = parseInt(item.getAttribute('data-price'));
            item.remove();
      
            // Update cart count
            const cartCount = document.getElementById('cart-count');
            let count = parseInt(cartCount.textContent);
            count--;
            cartCount.textContent = count;
      
            // Update total
            const totalElement = document.getElementById('total');
            const subTotalElement = document.getElementById('sub-total');
            let total = parseInt(totalElement.textContent.replace('N₦', '').replace(',', ''));
            total -= price;
            totalElement.textContent = `N₦${total.toLocaleString()}`;
            subTotalElement.textContent = `N₦${total.toLocaleString()}`;
          }
