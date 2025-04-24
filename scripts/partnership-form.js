function handleSubmit(event) {
    event.preventDefault();
    
    // Get form values
    const formData = {
        companyName: document.getElementById('companyName').value,
        industry: document.getElementById('industry').value,
        website: document.getElementById('website').value,
        contactName: document.getElementById('contactName').value,
        position: document.getElementById('position').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        interests: Array.from(document.querySelectorAll('input[name="interests"]:checked'))
            .map(cb => cb.value),
        goals: document.getElementById('goals').value
    };

    // Validate form
    if (!validateForm(formData)) {
        return false;
    }

    // Show success message
    showSuccessMessage();
    
    // Reset form
    event.target.reset();
    
    return false;
}

function validateForm(data) {
    if (data.interests.length === 0) {
        alert('Please select at least one area of interest');
        return false;
    }
    return true;
}

function showSuccessMessage() {
    const message = document.createElement('div');
    message.className = 'success-message';
    message.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <h3>Application Submitted!</h3>
        <p>We'll review your application and get back to you within 2-3 business days.</p>
    `;
    
    document.querySelector('.partnership-form').appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 5000);
}