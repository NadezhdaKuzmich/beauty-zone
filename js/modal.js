const body = document.querySelector("body");
const modal = document.querySelector(".backdrop");
const btnOpen = document.querySelector(".modal-btn-open");
const btnClose = document.querySelector(".modal-btn-close");

const toggleModal = () => {
  body.classList.toggle("fixed");
  modal.classList.toggle("is-hidden");
};

btnOpen.addEventListener("click", toggleModal);
btnClose.addEventListener("click", toggleModal);