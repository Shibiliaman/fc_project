document.addEventListener('DOMContentLoaded', () => {
  const donationForm = document.getElementById('donationFormEl');
  const amountButtons = document.querySelectorAll('.amount-btn');
  const customAmount = document.getElementById('customAmount');
  const confirmation = document.getElementById('confirmation');

  // Handle amount button selection
  amountButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      amountButtons.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');
      // Clear custom amount
      customAmount.value = '';
    });
  });

  // Handle custom amount input
  customAmount.addEventListener('input', () => {
    // Remove active class from all buttons when typing custom amount
    amountButtons.forEach(btn => btn.classList.remove('active'));
  });

  // Handle form submission
  donationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = {
      name: document.getElementById('fullName').value,
      email: document.getElementById('email').value,
      amount: document.querySelector('.amount-btn.active')?.dataset.amount || customAmount.value,
      message: document.getElementById('message').value
    };

    // Validate amount
    if (!formData.amount) {
      alert('Please select an amount or enter a custom amount');
      return;
    }

    // Show confirmation message with animation
    confirmation.textContent = `Thank you ${formData.name} for your donation of ₹${formData.amount}!`;
    confirmation.style.opacity = '0';
    confirmation.style.display = 'block';
    
    // Fade in animation
    setTimeout(() => {
      confirmation.style.transition = 'opacity 0.5s ease';
      confirmation.style.opacity = '1';
    }, 10);

    // Reset form after 2 seconds
    setTimeout(() => {
      donationForm.reset();
      amountButtons.forEach(btn => btn.classList.remove('active'));
    }, 2000);
  });
});