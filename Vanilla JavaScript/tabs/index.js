// Select all the tab buttons
const tabs = document.querySelectorAll(".tab");
// Select all the tab content sections
const tabContents = document.querySelectorAll(".tab-content");

// Function to remove active classes from all tabs and contents
function removeActiveClasses() {
  tabs.forEach((tab) => tab.classList.remove("active"));
  tabContents.forEach((content) => content.classList.remove("active"));
}

// Loop through each tab and add click event listener
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs and contents
    removeActiveClasses();

    // Add active class to the clicked tab
    tab.classList.add("active");

    // Get the data-target attribute of the clicked tab
    const target = tab.getAttribute("data-target");

    // Show the corresponding tab content
    document.getElementById(target).classList.add("active");
  });
});
