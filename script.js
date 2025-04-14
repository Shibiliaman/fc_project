function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}


function signUpNewsletter() {
  const email = document.getElementById("newsletterEmail").value;
  if (email) {
    document.getElementById("newsletterMsg").textContent = "Thank you for subscribing!";
  } else {
    document.getElementById("newsletterMsg").textContent = "Please enter a valid email.";
  }
}

function toggleTheme() {
  const body = document.body;
  const themeIcon = document.querySelector('.theme-icon');

  // Toggle the dark-theme class
  body.classList.toggle('dark-theme');

  // Update the icon based on the current theme
  if (body.classList.contains('dark-theme')) {
    themeIcon.classList.remove('fa-themeco');
    themeIcon.classList.add('fa-sun'); // Change to sun icon for light mode
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-themeco'); // Change back to themeco icon for dark mode
  }
}

// Optional: Set the initial theme based on user preference or default
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const themeIcon = document.querySelector('.theme-icon');

  if (body.classList.contains('dark-theme')) {
    themeIcon.classList.remove('fa-themeco');
    themeIcon.classList.add('fa-sun');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-themeco');
  }
});