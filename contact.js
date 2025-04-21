function handleSubmit(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send this data to your server
    console.log('Form submitted:', { name, email, subject, message });
    
    // Show success message (in a real application, this would happen after successful submission)
    alert('Thank you for your message! We will get back to you soon.');
    
    // Clear the form
    event.target.reset();
    
    return false;
  }