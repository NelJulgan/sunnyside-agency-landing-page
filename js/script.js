import '../css/main.css';

const navbar = document.querySelector('.navbar-nav');
const toggleBtn = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-link');

const toggleBtnFunc = function () {
  navbar.classList.toggle('active');
  toggleBtn.classList.toggle('active');
};

toggleBtn.addEventListener('click', toggleBtnFunc);

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', toggleBtnFunc);
}
