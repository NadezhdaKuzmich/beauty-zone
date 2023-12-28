const header = document.querySelector("header");
const menuBtnOpen = document.querySelector(".menu-btn-open");
const menuBtnClose = document.querySelector(".menu-btn-close");
const menu = document.querySelector(".header__menu");

const toggleMenu = () => header.classList.toggle("mobile-menu");
const disableScroll = () =>
  document.body.classList.toggle("is-scroll-disabled");

menuBtnOpen.addEventListener("click", () => {
  toggleMenu();
  disableScroll();
});

menu.addEventListener("click", () => {
  document.body.classList.remove("is-scroll-disabled");
  header.classList.remove("mobile-menu");
});

menuBtnClose.addEventListener("click", () => {
  toggleMenu();
  disableScroll();
});