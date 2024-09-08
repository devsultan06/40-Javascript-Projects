## Site Screenshot

![Site Screenshot](./Screenshot%202024-09-06%20205346.png)

# JavaScript Code Explanation

This JavaScript code controls the behavior of a responsive navigation bar. When the user clicks the menu icon, the navigation links toggle between showing and hiding, depending on the current state.

## Code Screenshot

![Code Screenshot](./Screenshot%202024-09-06%20205340.png)

# Explanation:

#### 1. Element Selection:

`const toggleButton = document.getElementById("navbar-toggle"); const navbarMenu = document.querySelector(".navbar-menu");`

These lines select the menu toggle button and the navigation menu list using getElementById and querySelector. The navbar-toggle is the button that will be clicked to show or hide the menu, and the navbar-menu is the list of links.

#### 2. Toggle Functionality:

`toggleButton.addEventListener("click", () => { navbarMenu.classList.toggle("active"); });`

This event listener listens for a click event on the toggleButton. When clicked, it toggles the "active" class on the navbarMenu. The "active" class is used to show or hide the menu in small screens.

#### 3. Displaying the Menu:

In the CSS, the ul element (navigation menu) is hidden off-screen by default using the transform: translateY(-500px) property. When the "active" class is added, the transform property changes to translateY(-5px) to bring the menu into view.

#### 4. Responsive Design:

The media query in the CSS ensures that the menu behaves differently on screens smaller than 860px. On smaller screens, the menu items are hidden until the user clicks the toggle button, which activates the ul.active class and makes the menu visible.

#### 5. Usage:

When the user clicks the toggle button (hamburger icon), the navigation links slide down and become visible. Clicking the button again will hide the links. On larger screens, the menu is always visible, so the toggle button is hidden.
