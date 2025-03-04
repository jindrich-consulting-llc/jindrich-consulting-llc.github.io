function setActive(element) {
    // Get all the nav links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-item');

    // Remove 'active' class from all items
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Add 'active' class to the clicked item
    const navItem = element.closest('.nav-item'); // Get the parent 'nav-item'
    navItem.classList.add('active');
}
