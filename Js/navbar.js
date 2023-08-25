const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('navbar-solid');
  } else {
    navbar.classList.remove('navbar-solid');
  }
});
