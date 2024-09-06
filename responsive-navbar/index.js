const toggleButton = document.getElementById("navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");

toggleButton.addEventListener("click", () => {
  // Toggle the 'active' class when the menu is clicked
  navbarMenu.classList.toggle("active");
});
