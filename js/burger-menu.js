const header = document.querySelector("header");
const menuBtnOpen = document.querySelector(".menu-btn-open");
const menuBtnClose = document.querySelector(".menu-btn-close");

const toggleMenu = () => header.classList.toggle("mobile-menu");
const disableScroll = () =>
  document.body.classList.toggle("is-scroll-disabled");

menuBtnOpen.addEventListener("click", () => {
  toggleMenu();
  disableScroll();
});
menuBtnClose.addEventListener("click", () => {
  toggleMenu();
  disableScroll();
});