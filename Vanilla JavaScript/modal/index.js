const openModalBtn = document.querySelector(".open-modal-btn");
const closeModalBtn = document.querySelector(".close-modal-btn");
const modal = document.querySelector(".modal");

// Open Modal
openModalBtn.addEventListener("click", () => {
  modal.classList.add("show");
});

// Close Modal
closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});
