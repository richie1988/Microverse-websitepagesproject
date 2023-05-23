function setupMobileMenu() {
    var hamburgerButton = document.getElementById('hamburger');
    var closeMenuButton = document.getElementById('close-menu');
    var mobileMenu = document.getElementById('mobile-menu');
    var menuOptions = document.querySelectorAll('#mobile-menu ul li a');
    var sections = document.querySelectorAll('section');

    function toggleMobileMenu() {
        mobileMenu.classList.toggle('active');
    }

    function hideMobileMenu() {
        mobileMenu.classList.remove('active');
    }

    function handleMenuOptionClick(e) {
        hideMobileMenu();
        var targetSectionId = e.target.getAttribute('href');
        var targetSection = document.querySelector(targetSectionId);
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