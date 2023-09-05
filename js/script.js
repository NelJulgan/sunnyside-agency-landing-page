import Lenis from '@studio-freight/lenis';
import '../css/main.css';

const navbar = document.querySelector('.navbar-nav');
const toggleBtn = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-link');

const toggleBtnFunc = function () {
  navbar.classList.toggle('active');
  toggleBtn.classList.toggle('active');
};

toggleBtn.addEventListener('click', toggleBtnFunc);

const lenis = new Lenis({
  duration: 2,
  easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  smooth: true,
  smoothTouch: false,
  touchMultiplier: 2,
});

window.lenis = lenis;

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    lenis.scrollTo(this.getAttribute('href'));
  });
});
