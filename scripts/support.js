document.addEventListener('DOMContentLoaded', () => {
    const supportForm = document.getElementById('supportForm');
    const formMessage = document.getElementById('formMessage');

    supportForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            category: document.getElementById('category').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
            timestamp: new Date().toISOString()
        };

        try {
            // Show loading state
            formMessage.textContent = 'Sending your request...';
            formMessage.className = 'form-message info';

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Store in localStorage (for demo)
            const tickets = JSON.parse(localStorage.getItem('supportTickets') || '[]');
            tickets.push({ id: `TICKET-${Date.now()}`, ...formData });
            localStorage.setItem('supportTickets', JSON.stringify(tickets));

            // Show success message
            formMessage.textContent = 'Your support ticket has been submitted successfully! We\'ll get back to you soon.';
            formMessage.className = 'form-message success';

            // Reset form
            supportForm.reset();

        } catch (error) {
            console.error('Error:', error);
            formMessage.textContent = 'Error submitting your request. Please try again.';
            formMessage.className = 'form-message error';
        }
    });
});