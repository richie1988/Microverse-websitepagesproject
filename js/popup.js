const cardData = [{
  title: '',
  description: '',
  skills: [''],
},
{
  title: 'Profesional Art Printing Data',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
  skills: ['HTML', 'Bootstrap', 'Ruby'],
},
{
  title: 'Profesional Art Printing Data',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
  skills: ['HTML', 'Bootstrap', 'Ruby'],
},
{
  title: 'Profesional Art Printing Data',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
  skills: ['HTML', 'Bootstrap', 'Ruby'],
},
{
  title: 'Profesional Art Printing Data',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
  skills: ['HTML', 'Bootstrap', 'Ruby'],
},
{
  title: 'Profesional Art Printing Data',
  description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
  skills: ['HTML', 'Bootstrap', 'Ruby'],
},
];

const cardContainer = document.getElementById('Profile');

function createCard(obj) {
  const cardDiv = document.createElement('div');
  cardDiv.className = 'card-hero';

  const article = document.createElement('article');
  const h2 = document.createElement('h2');
  h2.textContent = obj.title;
  article.appendChild(h2);

  const p = document.createElement('p');
  p.textContent = obj.description;
  article.appendChild(p);

  const ul = document.createElement('ul');
  ul.className = 'card-Skills-links';

  const { skills } = obj;
  skills.forEach((skill) => {
    const li = document.createElement('li');
    li.className = `b${skills.indexOf(skill) + 5}`;
    li.textContent = skill;
    ul.appendChild(li);
  });

  article.appendChild(ul);

  const button = document.createElement('button');
  button.className = 'card-projectbtn';
  button.textContent = 'See project';
  button.id = 'showDetailsBtn';
  article.appendChild(button);
  cardDiv.appendChild(article);
  return cardDiv;
}

cardData.forEach((item) => {
  const card = createCard(item);
  cardContainer.appendChild(card);
});