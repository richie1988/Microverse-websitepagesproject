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
  name: 'Keeping track of hundreds of components website',
  description: 'Multi Post Stories',
  technologies: ['HTML', 'Boostrap', 'Ruby on Rails'],
  article1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
  article2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  liveLink: 'https://example.com/live-link',
  sourceLink: 'https://github.com/example/source-link',
  imageSrc: 'image/cardpopupflame.png',
},

];

const body = document.querySelector('body');

function createProjectElement(project) {
  const projectElement = document.createElement('div');
  projectElement.id = 'popupContainer';
  projectElement.innerHTML = `
    <div id="popup">
      <span id="XcloseBtn">&times;</span>
      <div class="card-content">
        <div class="card-header">
          <h2 class="hh2">${project.name}</h2>
          <h3 class="hh3">${project.description}</h3>
        </div>
        <ul class="cardlinks">
          ${project.technologies
    .map((technology) => `<li class="linkBtn">${technology}</li>`)
    .join('')}
        </ul>
        <div class="article">
          <img class="popUPimage" src="${project.imageSrc}" />
          <div class="cardarticle">
            <p class="p1">${project.article1}</p>
            <br />
            <p class="p2">${project.article2}</p>
            <div class="button-section">
              <li><button class="livebtn"><a href="${project.liveLink}" target="_blank">See live <img src="image/livesource.png"></a></button></li>
              <li><button class="livebtn"><a href="${project.sourceLink}" target="_blank">See source<img src="image/seesource.png"></a></button></li>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  return projectElement;
}

// Function to populate the projects section with project elements
function renderProjects() {
  const section = document.createElement('section');
  body.append(section);

  projectsData.forEach((project) => {
    const projectElement = createProjectElement(project);
    section.appendChild(projectElement);
  });
}

renderProjects();

document.addEventListener('DOMContentLoaded', () => {
  const showDetailsBtn = document.getElementById('showDetailsBtn');
  const popupContainer = document.getElementById('popupContainer');
  const closeBtn = document.getElementById('XcloseBtn');
  function showPopup() {
    popupContainer.style.display = 'block';
  }

  function closePopup() {
    popupContainer.style.display = 'none';
  }
  showDetailsBtn.addEventListener('click', showPopup);
  closeBtn.addEventListener('click', closePopup);

  window.addEventListener('click', (event) => {
    if (event.target === popupContainer) {
      closePopup();
    }
  });
});