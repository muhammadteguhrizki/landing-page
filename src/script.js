var nav = document.querySelector('nav');
var toTop = document.querySelector('#toTop');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 200) {
    nav.classList.add('sticky-top', 'bg-light', 'navbar-light', 'opacity-75', 'shadow');
    toTop.classList.remove('d-none');
  } else {
    nav.classList.remove('sticky-top', 'bg-light', 'navbar-light', 'opacity-75', 'shadow');
    toTop.classList.add('d-none');
  }
});
