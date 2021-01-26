const toggleNav = () => {
    const hamburger = document.querySelector('.navbar__hamburger');
    const navLinks = document.querySelector('.navbar__nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    })
}

toggleNav();

