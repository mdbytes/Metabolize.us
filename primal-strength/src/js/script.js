console.log("javascript ready");

const navToggleLink = document.querySelector("#navToggler");
const homeLink = document.querySelector("#homeLink");
const servicesLink = document.querySelector("#servicesLink");
const testimonialsLink = document.querySelector("#testimonialsLink");
const contactLink = document.querySelector("#contactLink");
const privacyLink = document.querySelector("#privacyLink");

const navToggler = document.querySelector("#navToggler");

const buttonClick = () => {
  contactLink.click();
  setTimeout(function () {
    navToggleLink.click();
  }, 500);
};

homeLink.addEventListener("click", () => {
  console.log("nav link clicked");
  navToggler.click();
});

servicesLink.addEventListener("click", () => {
  console.log("nav link clicked");
  navToggler.click();
});

testimonialsLink.addEventListener("click", () => {
  console.log("nav link clicked");
  navToggler.click();
});

contactLink.addEventListener("click", () => {
  console.log("nav link clicked");
  navToggler.click();
});

let locale = window.location.href;

locale.addEventListener("change", () => {
  let pattern = /\/$/;
  if (!pattern.test(locale)) {
    homeLink.classList.remove("active");
  }
});
