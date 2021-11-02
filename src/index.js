import './scss/main.scss';

import Background from './assets/background.webp';
import about from './about-page.handlebars';
import home from './home.hbs';

const main = (() => {
  const changePage = event => {
    const key = event.target.getAttribute('data-page');
    const page = pages[key];

    content.innerHTML = page;
  };

  const clearElement = (elem) => {
    while(elem.lastChild) {
      elem.lastChild.remove();
    }
  };

  const pages = {
    about: about(),
    home: home(),
  };

  const btns = [...document.querySelectorAll('.nav__btn')];
  const content = document.getElementById('content');
  btns.forEach(btn => btn.addEventListener('click', changePage));

  content.innerHTML = pages.home;
})();
