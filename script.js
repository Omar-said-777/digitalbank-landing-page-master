const header = document.querySelector('header');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelectorAll('.head a');

menuToggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('nav-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        header.classList.remove('nav-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Open navigation');
    });
});