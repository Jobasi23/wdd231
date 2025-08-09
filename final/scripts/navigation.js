document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav');
    const nav = document.querySelector('.links');

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