document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById('navbar');

    function toggleNavbarBackground() {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', toggleNavbarBackground);
});
