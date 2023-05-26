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


let body = document.querySelector('body');
let section = document.createElement('section');
body.append(section);
section.innerHTML = ` 
<div class="projectcard" id="projectcard">
<h1>Multi Post Stories<li>
<a class="fafatime" id="closefatime" onclick="hide()"><img src="image/xclose.png"></a></li>
</h1>
<ul class="cardlink">
  <li class="html1">HTML</li>
  <li class="html2">Bootstrap</li>
  <li class="html3">Ruby on Rails</li>
</ul>
<img class="cardmg" src="image/cardpopupflame.png">
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent</p>
<section class="btn">
<li><button class="cardlivebtn" >See live<img  src="image/livesource.png" style="margin-left:16px;"></button></li>
<li><button class="sourcebtn">See source<img  src="image/seesource.png" style="margin-left:16px;"></button></li>
</section>
</div>

<div class="desktopcard"  id="projectcard">
<h2> Keeping track of hundreds of components website <a class ="fafatime"onclick = "hide()"> <img src ="image/xclose.png"></a></h2>
<div>
<ul class = "cardlinks"><li class="html1"> HTML</li> <li class="html2">Bootstrap</li> <li class ="html3">Ruby on Rails </li> </ul> </div>
<div class = "sectionart"><img class = "cardimge"src = "image/cardpopupflame.png">
<section class = "paragraph">
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p>
<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.</p> 
<div class = "sourceinks"><li> 
<button class ="cardlivebtn"> See live <img src ="image/livesource.png"style ="margin-left:16px;"></button></li>
<li> <button class = "sourcebtn"> See source <img src ="image/seesource.png"style = "margin-left:16px;"></button></li>
</section>
</div> 
</div> 
</div>

`;

function show() {
    document.getElementById('projectcard').hidden = false

}

function hide() {
    document.getElementById('projectcard').hidden = true
}





//////////////////////////////////////////////////////////////////////////////////////////////////
// let open = document.querySelector(".seelive");
// open.addEventListener('click', () => {
//     let main = document.createElement('div');
//     main.className = "main";
//     let popup = document.createElement('div');
//     popup.className = 'popup';
//     popup.innerHTML = `<div class='desktopcard' id="desktopcard">
//     <li><button onclick="hide()">See source</button></li>
//     <h2>Keeping track of hundreds  of components website</h2>
//     <div>
//       <ul class="cardlinks">
//       <li>HTML</li>
//       <li>Bootstrap</li>
//       <li>Ruby on Rails</li>
//     </ul>
//     </div>

//     <div class="sectionart">
//       <img class="cardimge" src="#">
//       <section class="paragraph">
// <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p>

// <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.</p>
//         <div class="sourcebtn">        <li><button onclick="hide()">See source</button></li>
//        <li><button class="see-more" type="button" onclick="hide()">See source</button></li>
//         </section>
//     </div>
//   </div>
//   </div>`;
//     main.appendChild(popup);
//     body.appendChild(main);
//     let close = document.querySelector('.close');
//     close.addEventListener('click', () => {
//         body.removeChild(main);
//     })
// })


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const projects = [{
        name: "Multi Post Stories",
        description: "  project detail",
        featuredImage: "image/cardpopupflame.png",
        technologies: ["See live image/livesource.png", "See source image/seesource.png"],
        liveVersion: "https://project1liveversion.com",
        sourceLink: "https://github.com/user/project1"
    },
    {
        name: "Keeping track of hundreds  of components website",
        description: "Description of Project 2",
        featuredImage: "image/cardpopupflame.png",
        technologies: ["See live image/livesource.png", "See source image/seesource.png"],
        liveVersion: "https://project2liveversion.com",
        sourceLink: "https://github.com/user/project2"
    },

];

// function generateProjectCards() {
//     const projectCardsContainer = document.querySelector('.body');

//     projects.forEach((project) => {
//         const projectCard = document.createElement('div');
//         projectCard.classList.add('projectcard');

//         const projectImage = document.createElement('img');
//         projectImage.src = project.featuredImage;
//         projectImage.alt = project.name;
//         projectCard.appendChild(projectImage);

//         const projectTitle = document.createElement('h3');
//         projectTitle.textContent = project.name;
//         projectCard.appendChild(projectTitle);

//         const projectDescription = document.createElement('p');
//         projectDescription.textContent = project.description;
//         projectCard.appendChild(projectDescription);

//         const projectDetailsButton = document.createElement('button');
//         const seeDetailsButton = document.createElement('button');
//         projectDetailsButton.textContent = 'Project Details';
//         seeDetailsButton.textContent = 'Project Details';
//         projectDetailsButton.addEventListener('click', () => showProjectDetails(project));
//         projectCard.appendChild(projectDetailsButton);

//         projectCardsContainer.appendChild(projectCard);
//     });
// }

// generateProjectCards();

// function showProjectDetails(project) {
//     const popupContainer = document.createElement('div');
//     popupContainer.classList.add('popup-container');

//     const popupContent = document.createElement('div');
//     popupContent.classList.add('popup-content');

//     const closeButton = document.createElement('button');
//     closeButton.classList.add('close-button');
//     closeButton.innerHTML = '&times;';
//     closeButton.addEventListener('click', () => {
//         document.body.removeChild(popupContainer);
//     });
//     popupContent.appendChild(closeButton);

//     const projectTitle = document.createElement('h2');
//     projectTitle.textContent = project.name;
//     popupContent.appendChild(projectTitle);

//     const projectDescription = document.createElement('p');
//     projectDescription.textContent = project.description;
//     popupContent.appendChild(projectDescription);

//     const projectTechnologies = document.createElement('ul');
//     project.technologies.forEach((technology) => {
//         const technologyItem = document.createElement('li');
//         technologyItem.textContent = technology;
//         projectTechnologies.appendChild(technologyItem);
//     });
//     popupContent.appendChild(projectTechnologies);

//     const liveVersionLink = document.createElement('a');
//     liveVersionLink.textContent = 'Live Version';
//     liveVersionLink.href = project.liveVersion;
//     liveVersionLink.target = '_blank';
//     popupContent.appendChild(liveVersionLink);
// }