const toggleButton = document.getElementById("navbar-toggle");
const toggleButtonClose = document.getElementById("navbar-toggle-close");
const navbarMenu = document.querySelector(".navbar");

toggleButton.addEventListener("click", () => {
  // Toggle the 'active' class when the menu is clicked
  navbarMenu.classList.add("active");
});

toggleButtonClose.addEventListener("click", () => {
  // Toggle the 'active' class when the close button is clicked
  navbarMenu.classList.remove("active");
});
