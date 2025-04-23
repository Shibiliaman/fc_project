document.addEventListener('DOMContentLoaded', () => {
    const donationForm = document.getElementById('donationForm');
    const amountButtons = document.querySelectorAll('.amount-btn');
    const customAmountInput = document.getElementById('customAmount');
    const customAmountDiv = document.querySelector('.custom-amount');

    // Handle amount button selection
    amountButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            amountButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            if (btn.classList.contains('custom')) {
                customAmountDiv.style.display = 'block';
                customAmountInput.focus();
            } else {
                customAmountDiv.style.display = 'none';
            }
        });
    });

    // Format number to Indian currency format
    function formatIndianCurrency(number) {
        const formatter = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
        return formatter.format(number);
    }

    // Handle form submission
    donationForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const activeButton = document.querySelector('.amount-btn.active');
        let amount = activeButton.classList.contains('custom') 
            ? customAmountInput.value 
            : activeButton.dataset.amount;

        const donationData = {
            amount: parseFloat(amount),
            amountFormatted: formatIndianCurrency(amount),
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value,
            anonymous: document.getElementById('anonymous').checked,
            timestamp: new Date().toISOString()
        };

        try {
            // Show loading state
            const submitBtn = donationForm.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Processing...';

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Show success message and redirect
            alert('Thank you for your donation!');
            window.location.href = '../art-project.html';

        } catch (error) {
            console.error('Error:', error);
            alert('Error processing donation. Please try again.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Complete Donation';
        }
    });
});