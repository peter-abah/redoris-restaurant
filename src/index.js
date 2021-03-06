import './scss/main.scss';

import Background from './assets/background.webp';
import about from './about.hbs';
import home from './home.hbs';
import menu from './menu.hbs';

const main = (() => {
  const changePage = event => {
    const key = event.target.getAttribute('data-page');
    const page = pages[key];

    content.innerHTML = page;

    [activeBtn, event.target].forEach(btn => btn.classList.toggle('nav__btn--active'));
    activeBtn = event.target;
  };

  const clearElement = (elem) => {
    while(elem.lastChild) {
      elem.lastChild.remove();
    }
  };

  const pages = {
    about: about(),
    home: home(),
    menu: menu(),
  };

  const btns = [...document.querySelectorAll('.nav__btn')];
  let activeBtn = document.querySelector('.nav__btn--active');
  const content = document.getElementById('content');
  btns.forEach(btn => btn.addEventListener('click', changePage));

  content.innerHTML = pages.home;
})();
