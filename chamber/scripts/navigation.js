document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-links');
    const nav = document.querySelector('.navbar');

    if (hamburger && navMenu && nav) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            nav.classList.toggle('menu-open'); // 🔁 toggle a class here
            // Optional: toggle hamburger icon between ☰ and X
            hamburger.innerHTML = hamburger.innerHTML.trim() === '☰' ? 'X' : '☰';
        });
    } else {
        console.error('Required elements not found in the DOM.');
    }
});

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.toggle img');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const body = document.body;

  // Dark Mode
  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Optional: Toggle the toggle icon
    const isDark = body.classList.contains('dark-mode');
    toggleBtn.src = isDark ? 'images/toggle-on-solid.svg' : 'images/toggle-off-solid.svg';
  });

  // Hamburger Menu
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
});
