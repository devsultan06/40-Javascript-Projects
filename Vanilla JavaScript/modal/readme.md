## Site Screenshot

![Site Screenshot](./Screenshot%202024-09-08%20214923.png)

# JavaScript Code Explanation

This JavaScript code controls the opening and closing behavior of the modal.

## Code Screenshot

![Code Screenshot](./Screenshot%202024-09-08%20214936.png)

# Explanation:

#### 1. Element Selection:

`const openModalBtn = document.querySelector(".open-modal-btn");`
`const closeModalBtn = document.querySelector(".close-modal-btn");`
`const modal = document.querySelector(".modal");`

These lines select the "Open Modal" and "Close Modal" buttons and the modal container using querySelector. These elements are then used to control the visibility of the modal.

#### 2. Open Modal Functionality:

`openModalBtn.addEventListener("click", () => { modal.classList.add("show"); });`

This event listener listens for a click event on the "Open Modal" button. When clicked, it adds the show class to the modal, making it slide down into view.

#### 3. Close Modal Functionality:

`closeModalBtn.addEventListener("click", () => { modal.classList.remove("show"); });`

This event listener listens for a click event on the "Close Modal" button. When clicked, it removes the show class from the modal, hiding it by sliding it back up out of view.

#### 4. Usage:

**1. Opening the Modal:** Click the "Open Modal" button. The modal will slide down from the top of the screen into view.
**2. Closing the Modal:** Click the "Close Modal" button within the modal, and it will slide back up, out of view.
**3. Customizing:** You can modify the modal content and add additional styling or functionality as needed.
