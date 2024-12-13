document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('close-btn');
  const navLinks = document.querySelector('.nav-links');

  menuBtn.addEventListener('change', () => {
    navLinks.style.left = '0'; // Show menu
  });

  closeBtn.addEventListener('change', () => {
    navLinks.style.left = '-100%'; // Hide menu
  });
});
