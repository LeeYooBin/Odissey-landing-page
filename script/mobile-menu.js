const headerMenuButton = document.querySelector('.header__menu-icon');
const menuLink = document.querySelectorAll('.header__menu-link');

const toggleMenu = () => {
  const headerMenu = document.querySelector('.header__menu');
  const lines = document.querySelectorAll('.line')

  lines.forEach(item => item.classList.toggle('line-open'));
  headerMenu.classList.toggle('header__menu-open');
};

headerMenuButton.addEventListener('click', toggleMenu);
menuLink.forEach(link => link.addEventListener('click', toggleMenu));