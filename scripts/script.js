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

// Helper function to update favicon
function updateFavicon(isDark) {
  const favicon = document.querySelector("link[rel='icon']");
  favicon.href = isDark ? '../assets/logo/logo1.png' : '../assets/logo/logo2.png';
}

function toggleTheme() {
  const body = document.body;
  const themeIcon = document.querySelector('.theme-icon');
  const logos = document.querySelectorAll('.logo img');

  // Toggle the theme
  if (body.getAttribute('data-theme') === 'light') {
    body.setAttribute('data-theme', 'dark');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    // Change all logos to dark theme version
    logos.forEach(logo => {
      logo.src = '../assets/logo/logo2.png';
    });
  } else {
    body.setAttribute('data-theme', 'light');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    // Change all logos to light theme version
    logos.forEach(logo => {
      logo.src = '../assets/logo/logo1.png';
    });
  }
}

// Watch for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  const body = document.body;
  if (e.matches) {
    body.setAttribute('data-theme', 'dark');
    updateFavicon(true);
  } else {
    body.setAttribute('data-theme', 'light');
    updateFavicon(false);
  }
});

// Set initial theme based on system preference
document.addEventListener('DOMContentLoaded', () => {
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const body = document.body;
  
  if (prefersDarkScheme.matches) {
    body.setAttribute('data-theme', 'dark');
    updateFavicon(true);
  } else {
    body.setAttribute('data-theme', 'light');
    updateFavicon(false);
  }
});