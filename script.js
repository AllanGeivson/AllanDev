document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
  
    // Toggle visibility on click
    hamburgerMenu.addEventListener('click', () => {
      navLinks.classList.toggle('expanded');
    });
  });
