function signUpNewsletter() {
    const emailInput = document.getElementById('newsletterEmail');
    const messageElement = document.getElementById('newsletterMsg');
    
    if (!emailInput.value) {
        showMessage('Please enter your email address.', 'error');
        return;
    }

    if (!isValidEmail(emailInput.value)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
    }

    // Simulate API call
    setTimeout(() => {
        showMessage('Thank you for subscribing! Please check your email for confirmation.', 'success');
        emailInput.value = '';
    }, 1000);
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showMessage(message, type) {
    const messageElement = document.getElementById('newsletterMsg');
    messageElement.textContent = message;
    messageElement.className = `message ${type}`;
    messageElement.style.display = 'block';

    setTimeout(() => {
        messageElement.style.display = 'none';
    }, 5000);
}