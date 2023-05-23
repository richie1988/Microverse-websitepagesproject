function setupMobileMenu() {
    const hamburgerButton = document.getElementById('hamburger');
    const closeMenuButton = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOptions = document.querySelectorAll('#mobile-menu ul li a');
    const sections = document.querySelectorAll('section');

    function toggleMobileMenu() {
        mobileMenu.classList.toggle('active');
    }

    function hideMobileMenu() {
        mobileMenu.classList.remove('active');
    }

    function handleMenuOptionClick(e) {
        hideMobileMenu();
        const targetSectionId = e.target.getAttribute('href');
        const targetSection = document.querySelector(targetSectionId);
        sections.forEach(function(section) {
            section.classList.remove('active');
        });
        targetSection.classList.add('active');
    }
    hamburgerButton.addEventListener('click', toggleMobileMenu);
    closeMenuButton.addEventListener('click', hideMobileMenu);

    menuOptions.forEach(function(option) {
        option.addEventListener('click', handleMenuOptionClick);
    });
}

setupMobileMenu();