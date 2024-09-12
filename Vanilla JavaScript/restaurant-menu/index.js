function filterMenu(category) {
  const menuItems = document.querySelectorAll(".menu-items");

  // Loop through each menu item
  menuItems.forEach((item) => {
    if (category === "all") {
      item.style.display = "flex"; // Show all items
    } else if (item.classList.contains(category)) {
      item.style.display = "flex"; // Show items of the selected category
    } else {
      item.style.display = "none"; // Hide items that don't match
    }
  });
}
