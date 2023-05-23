function setupMobileMenu() {
    const hamburgerButton = document.getElementById('hamburger');
    const closeMenuButton = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOptions = document.querySelectorAll('#mobile-menu ul li a');
    const sections = document.querySelectorAll('section');

    hamburgerButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    closeMenuButton.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });

    menuOptions.forEach(option => {
        option.addEventListener('click', e => {
            e.preventDefault();
            mobileMenu.classList.remove('active');
            const targetSectionId = e.target.getAttribute('href');
            const targetSection = document.querySelector(targetSectionId);
            sections.forEach(section => {
                section.classList.remove('active');
            });
            targetSection.classList.add('active');
        });
    });
}

setupMobileMenu();