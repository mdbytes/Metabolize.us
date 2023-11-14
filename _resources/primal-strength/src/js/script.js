const navToggleLink = document.querySelector('#navToggler');
const homeLink = document.querySelector('#homeLink');
const servicesLink = document.querySelector('#servicesLink');
const testimonialsLink = document.querySelector('#testimonialsLink');
const contactLink = document.querySelector('#contactLink');
const privacyLink = document.querySelector('#privacyLink');

const navToggler = document.querySelector('#navToggler');

const buttonClick = () => {
  contactLink.click();
  setTimeout(function () {
    navToggleLink.click();
  }, 500);
};

homeLink.addEventListener('click', () => {
  navToggler.click();
});

servicesLink.addEventListener('click', () => {
  navToggler.click();
});

testimonialsLink.addEventListener('click', () => {
  navToggler.click();
});

contactLink.addEventListener('click', () => {
  navToggler.click();
});

let locale = window.location.href;

locale.addEventListener('change', () => {
  let pattern = /\/$/;
  if (!pattern.test(locale)) {
    homeLink.classList.remove('active');
  }
});
