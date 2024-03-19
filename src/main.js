document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('signupModal');
    const closeButton = document.getElementById('closeButton');
    const modalOverlay = document.querySelector('.modal-overlay');
    const signUpButton = document.getElementById('signupButton');
    const signupForm = document.getElementById('signupForm');
    const emailInput = document.getElementById('email');
    const emailValidityCheck = document.getElementById('emailValidityCheck');

    function showModal() {
        modal.classList.remove('hidden');
    }

    function hideModal() {
        modal.classList.add('hidden');
    }

    signUpButton.addEventListener('click', showModal);
    closeButton.addEventListener('click', hideModal);

    modalOverlay.addEventListener('click', function (event) {
        if (event.target === modalOverlay) {
            hideModal();
        }
    });

    signupForm.addEventListener('submit', function (event) {
        // Prevent form submission
        event.preventDefault();
        // You can perform form validation here before hiding the modal
        hideModal();
    });

    emailInput.addEventListener('input', validateEmail);

    function validateEmail(event) {
        const email = event.target.value;
        const isValid = isValidEmail(email);
        displayValidity(isValid);
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function displayValidity(isValid) {
        if (isValid) {
            emailValidityCheck.innerHTML = '<i class="fas fa-check text-green-500"></i>';
        } else {
            emailValidityCheck.innerHTML = '<i class="fas fa-times text-red-500"></i>';
            // You can also add additional feedback here, such as changing the input border color to red
            emailInput.classList.add('border-red-500');
        }
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const signUpButton = document.getElementById('signupButton');

    // Event listener for the Sign Up button
    signUpButton.addEventListener('click', function () {
        // Change the window location to the desired signup page URL
        window.location.href = 'signup.html'; // Replace 'signup.html' with your actual signup page URL
    });
});

