const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

function toggleMenu() {
    if (menu.classList.contains('showMenu')) {
        menu.classList.remove('showMenu');
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'block';
    } else {
        menu.classList.add('showMenu');
        closeIcon.style.display = 'block';
        menuIcon.style.display = 'none';
    }
}
hamburger.addEventListener('click', toggleMenu);
const menuItems = document.querySelectorAll('.menuItem');
menuItems.forEach(
    (menuItem) => {
        menuItem.addEventListener('click', toggleMenu);
    },
);

// this is the popupmodal section
const body = document.querySelector('body');
const section = document.createElement('section');
body.append(section);
section.innerHTML = ` 
<div id="popupContainer">
<div id="popup">
<span id="XcloseBtn">&times;</span>
    <div class="card-content">
    <div class="card-header">
        <h2 class="hh2">Keeping track of hundreds of components website</h2>
        <h3 class="hh3">Multi Post Stories</h3>
    </div>
    <ul class="cardlinks">
        <li class="linkBtn">HTML</li>
        <li class="linkBtn">Boostrap</li>
        <li class="linkBtn">Ruby on Rails</li>
    </ul>
    <div class="article">
        <img class="popUPimage" src="image/cardpopupflame.png"></img>
        <div class="cardarticle">
            <p class="p1">Lorem Ipsum is simply dummy text of the printing
             and typesetting industry. Lorem Ipsum has been the industry's 
             standard dummy text ever since the 1500s, when an unknown printer 
             took a galley of type and scrambled it 1960s.
                </p><br>
                <p class="p2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                 industry. Lorem Ipsum has been the industry's standard dummy text 
                 ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it 1960s with the releax map lapora verita.
            </p>
            <div class="button-section">
                <li><button class="livebtn">See live <img src="image/livesource.png"></button></li>
                <li><button class="livebtn">See source<img src="image/seesource.png"></button></li>
            </div>
        </div>
    </div>
</div>
</div>
</div>
`
    // Get the necessary elements
document.addEventListener('DOMContentLoaded', function() {
    const showDetailsBtn = document.getElementById('showDetailsBtn');
    const popupContainer = document.getElementById('popupContainer');
    const closeBtn = document.getElementById('XcloseBtn');

    showDetailsBtn.addEventListener('click', showPopup);
    closeBtn.addEventListener('click', closePopup);

    function showPopup() {
        popupContainer.style.display = 'block';
    }

    function closePopup() {
        popupContainer.style.display = 'none';
    }

    // Close the popup when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === popupContainer) {
            closePopup();
        }
    });
});



// form validation section //

document.getElementById('Form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const emailInput = document.getElementById('e-mail');
    const email = emailInput.value;

    if (email === email.toLowerCase()) {
        // Validation passed, submit the form
        // Replace the following line with your form submission logic
        alert('Form submitted successfully!');
        document.getElementById('error').textContent = '';
        emailInput.value = '';
    } else {
        // Validation failed, show error message
        document.getElementById('error').textContent = 'Kindly check your, Email must be in lower case.';
    }
});