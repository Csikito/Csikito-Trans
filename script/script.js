const navMenu = document.querySelector(".nav__menu");
const navToggle = document.querySelector(".nav__toggle");
const navClose = document.querySelector(".nav__close");

const servicesData = document.querySelectorAll(".services__data");

const navMenuObject = navMenu.children[0].children;
const navMenuArray = Object.values(navMenuObject);

//Menu
navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
});

navMenuArray.forEach((e) => {
  e.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
});

/*========= Checkbox button ===========*/

servicesData.forEach((element) => {
  element.addEventListener("click", () => {
    let data = element.attributes.data.value;
    document.querySelector('input[data="' + data + '"]').checked = true;
  });
});

//Scroll Reveal Animation

const sr = ScrollReveal({
  distance: "60px",
  duration: 2000,
  delay: 400,
});

sr.reveal(".home__data h1", { origin: "left" });
sr.reveal(".home__data span", { origin: "right", delay: 900 });
sr.reveal(".section__title, form", { delay: 300 });
sr.reveal(".services__data, .contact__list", {
  origin: "bottom",
  interval: 200,
});
sr.reveal(".about_data, .career__data", {
  origin: "left",
  interval: 300,
});
