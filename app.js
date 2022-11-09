const openBtn = document.querySelector('.open');
const mainNav = document.querySelector('.nav');
const closeBtn = document.querySelector('.close');

const openNav = () => {
  mainNav.style.width = '200px';
  mainNav.style.transition = '0.5s';
};

const closeNav = () => {
  mainNav.style.removeProperty('width');
  document.body.style.background = '#353B48';
};

window.addEventListener('resize', function () {
  if (window.innerWidth > 620) {
    mainNav.style.removeProperty('width');
    mainNav.style.removeProperty('transition');
  }
});

openBtn.addEventListener('click', openNav);
closeBtn.addEventListener('click', closeNav);
