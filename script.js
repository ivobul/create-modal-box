const btn = document.querySelector(".open-modal");
const modalWrapper = document.querySelector(".modal-wrapper");
const closeModal = document.querySelector(".close-modal");

btn.addEventListener("click", () => {
  modalWrapper.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modalWrapper.style.display = "none";
});