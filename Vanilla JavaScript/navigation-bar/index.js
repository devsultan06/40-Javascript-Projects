// script.js
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    // Adjust this value as needed
    navbar.classList.add("sticky");
    if (scrollPosition > 300) {
      // Adjust this value to determine when to hide the navbar
      navbar.classList.add("hidden");
    } else {
      navbar.classList.remove("hidden");
    }
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("hidden");
  }
});
