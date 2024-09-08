## Site Screenshot

![Site Screenshot](./Screenshot%202024-09-07%20234536.png)

# JavaScript Code Explanation

This JavaScript code controls the behavior of a responsive navigation bar. When the user clicks the menu and close icon, the navigation links toggle between showing and hiding, depending on the current state.

## Code Screenshot

![Code Screenshot](./Screenshot%202024-09-07%20234548.png)

# Explanation:

#### 1. Element Selection:

`const toggleButton = document.getElementById("navbar-toggle"); const navbarMenu = document.querySelector(".navbar-menu");`

These lines select the menu toggle button and the navigation menu list using getElementById and querySelector. The navbar-toggle is the button that will be clicked to show or hide the menu, and the navbar-menu is the list of links.

#### 2. Add Functionality:

`toggleButton.addEventListener("click", () => { navbarMenu.classList.add("active"); });`

This event listener listens for a click event on the toggleButton. When clicked, it adds the "active" class on the navbarMenu. The "active" class is used to show the menu

#### 2. Remove Functionality:

`toggleButtonClose.addEventListener("click", () => { navbarMenu classList.remove("active");});`

This event listener listens for a click event on the toggleButton. When clicked, it adds the "active" class on the navbarMenu. The "active" class is used to show the menu

#### 3. Displaying the Nav Menu:

In the CSS, the nav element (navigation menu) is hidden off-screen by default using the left:-800px property. When the "active" class is added, then the left:0px to bring the menu into view.

#### 4. Responsive Design:

The media query in the CSS ensures that the menu behaves differently on screens smaller than 860px. On smaller screens, the nav menu width ic changed to 100%.

#### 5. Usage:

When the user clicks the toggle button (hamburger icon), the navbar menu slide left:0px and become visible. Clicking the close icon will hide the navbar menu.
