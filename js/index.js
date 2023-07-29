const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');

const toggleMenu = () => {
  const showMenu = menu.classList.toggle('showMenu');
  closeIcon.style.display = showMenu ? 'block' : 'none';
  menuIcon.style.display = showMenu ? 'none' : 'block';
};
hamburger.addEventListener('click', toggleMenu);
document.querySelectorAll('.menuItem').forEach((menuItem) => {
  menuItem.addEventListener('click', toggleMenu);
});

const projectsData = [{
  title: 'Multi-Post Stories',
  image: 'image/cardpopupflame.png',
  article: 'daily selection of privately personalized Ipsum isIpsum is and typesettingreads and typesettingreads; Ipsum is and typesettingreadsno accounts or sign-ups personalized reads; no accounts ',
  technologies: ['CSS', 'HTML', 'Boostrap', 'Ruby'],
},
{
  title: 'Data Dashboard Healthcare',
  image: 'image/Img Placeholder (1).png',
  article: 'daily selection of privately personalized Ipsum is and typesettingreads; no accounts or sign-ups personalized reads; no accounts ',
  technologies: ['HTML', 'Bootstrap', 'Ruby'],
  liveLink: 'https://example.com/project1',
  sourceLink: 'https://github.com/example/project1',
}, {
  title: 'Profesional Art Printing Data',
  image: 'image/Img Placeholder (1).png',
  article: 'daily selection of privately personalized Ipsum is and typesettingreads; no accounts or sign-ups personalized reads; no accounts ',
  technologies: ['HTML', 'Bootstrap', 'Ruby'],
  liveLink: 'https://example.com/project1',
  sourceLink: 'https://github.com/example/project1',
}, {
  title: 'Website Portfolio ',
  image: 'image/Img Placeholder (1).png',
  article: 'daily selection of privately personalized Ipsum is and typesettingreads; no accounts or sign-ups personalized reads; no accounts ',
  technologies: ['HTML', 'Bootstrap', 'Ruby'],
  liveLink: 'https://example.com/project1',
  sourceLink: 'https://github.com/example/project1',
}, {
  title: 'Profesional Art Printing Data',
  image: 'image/cardpopupflame.png',
  article: 'daily selection of privately personalized Ipsum is and typesettingreads; no accounts or sign-ups personalized reads; no accounts ',
  technologies: ['HTML', 'Bootstrap', 'Ruby'],
  liveLink: 'https://example.com/project1',
  sourceLink: 'https://github.com/example/project1',
}, {
  title: 'Data Dashboard Healthcare',
  article: 'daily selection of privately personalized The big brother africa comming is and typesettingreads; no accounts or sign-ups personalized reads; no accounts ',
  technologies: ['HTML', 'Bootstrap', 'Ruby'],
  liveLink: 'https://example.com/project1',
  sourceLink: 'https://github.com/example/project1',
  image: 'image/cardpopupflame.png',
}, {
  title: 'Website Portfolio',
  image: 'image/Img Placeholder (1).png',
  article: 'daily selection of privately personalized Ipsum is and typesettingreads; no accounts or sign-ups personalized reads; no accounts ',
  technologies: ['HTML', 'Bootstrap', 'Ruby'],
  liveLink: 'https://example.com/project1',
  sourceLink: 'https://github.com/example/project1',
},
];

const projectsSection = document.getElementById('projects');
const popupContainer = document.getElementById('popup'); // Define popupContainer

function createProjectElement(project, isFirstProject) {
  const projectElement = document.createElement('section');
  projectElement.classList.add('project');

  if (isFirstProject) {
    projectElement.classList.add('first-project'); // Add a class for the first project card
    projectElement.innerHTML = `
      <img src="${project.image}" alt="${project.title}">
      <div class="validation">
          <h3>${project.title}</h3>
          <p>${project.article}</p>
          <ul class="mylinks">
              <li class="links">${project.technologies[0]}</li>
              <li class="links">${project.technologies[1]}</li>
              <li class="links">${project.technologies[2]}</li>
              ${project.technologies[3] ? `<li class="links">${project.technologies[3]}</li>` : ''}
          </ul>
          <button class="details-btn" data-project='${JSON.stringify(project)}'>See project</button>
      </div>
    `;
  } else {
    projectElement.innerHTML = `
      <div class="validation">
          <h3>${project.title}</h3>
          <p>${project.article}</p>
          <ul class="mylinks">
              <li class="links">${project.technologies[0]}</li>
              <li class="links">${project.technologies[1]}</li>
              <li class="links">${project.technologies[2]}</li>
              ${project.technologies[3] ? `<li class="links">${project.technologies[3]}</li>` : ''}
          </ul>
          <button class="details-btn" data-project='${JSON.stringify(project)}'>See project</button>
      </div>
    `;
  }

  return projectElement;
}

function renderProjects() {
  projectsData.forEach((project, index) => {
    const isFirstProject = index === 0; // Check if it's the first project
    const projectElement = createProjectElement(project, isFirstProject);
    projectsSection.appendChild(projectElement);
  });
}

renderProjects();

// const closeMain = document.getElementById('Main-popup');
function showPopup(project) {
  const popup = document.getElementById('popup');
  popup.innerHTML = `
  <div id="Main-popup">
    <span class="close-btn" id="closeBtn">&times;</span>
    <h3>${project.title}</h3>
    <ul class="mylinks">
        <li class="links">${project.technologies[0]}</li>
        <li class="links">${project.technologies[1]}</li>
        <li class="links">${project.technologies[2]}</li>
    </ul>
    <img class="imagholder" src="${project.image}" alt="${project.title}">
    <div class="article-popup">
        <p>${project.article}</p>
        <section class="link-section">
            <a href="${project.liveLink}" target="_blank">See live <img src="image/livesource.png"></a>
            <a href="${project.sourceLink}" target="_blank">See source<img src="image/seesource.png"></a>
        </section>
    </div>
    </div>
  `;

  /// / Show the popupContainer when the "See project" button is clicked
  popupContainer.style.display = 'block';
}

// const closeMain = document.getElementById('closeBtn');

function closePopup() {
  // Hide the popupContainer when the close button is clicked
  popupContainer.style.display = 'none';
}

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('details-btn')) {
    const projectData = JSON.parse(event.target.dataset.project);
    showPopup(projectData);
  }
  if (event.target === popupContainer) {
    closePopup();
  }
});

// Close the popup when clicking outside of it
window.addEventListener('click', (event) => {
  if (event.target === popupContainer) {
    closePopup();
  }
});

/// //////////THIS IS THE FROM VALIDATION RT ////////////////// JavaScript
function displayMessage(message, color) {
  const errorElement = document.getElementById('error');
  errorElement.textContent = message;
  errorElement.style.color = color;
}

document.getElementById('Form').addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission
  const emailInput = document.getElementById('e-mail');
  const email = emailInput.value;

  if (email === email.toLowerCase()) {
    displayMessage('Form submitted successfully!', 'green');
    emailInput.value = '';
  } else {
    displayMessage('Kindly check your email. Email must be in lower case.', 'red');
  }
});

/// ////THIS IS THEESERVE DATART/////////////

function saveFormData() {
  const formData = {
    Fullname: document.querySelector('input[name="Fullname"]').value,
    Surname: document.querySelector('input[name="Surname"]').value,
    email: document.getElementById('e-mail').value,
    subject: document.querySelector('textarea[name="subject"]').value,
  };

  localStorage.setItem('formData', JSON.stringify(formData));
}
// Function to load the form data from local storage
function loadFormData() {
  const formData = JSON.parse(localStorage.getItem('formData')) || {};
  document.querySelector('input[name="Fullname"]').value = formData.Fullname || '';
  document.querySelector('input[name="Surname"]').value = formData.Surname || '';
  document.getElementById('e-mail').value = formData.email || '';
  document.querySelector('textarea[name="subject"]').value = formData.subject || '';
}

// Attach event listener to the form to save data on change
document.getElementById('Form').addEventListener('change', saveFormData);

// Load the form data when the page is loaded
window.addEventListener('load', loadFormData);