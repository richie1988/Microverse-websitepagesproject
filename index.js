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