// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Simple form validation
  document.querySelector('form').addEventListener('submit', function(event) {
    alert('Your message has been sent!');
    event.preventDefault();  // Prevent actual form submission for demo purposes
  });
  