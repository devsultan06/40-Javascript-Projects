## Site Screenshot

![Site Screenshot](./Screenshot%202024-09-02%20231831.png)

# JavaScript Code Explanation

This JavaScript code enables a button to change the background color of the webpage to a random color each time it's clicked. It also updates the displayed color code on the page.

## Code Screenshot

![Code Screenshot](./Screenshot%202024-09-02%20230847.png)

# Explanation:

#### 1. Element Selection:

`const btn = document.getElementById("btn");`
This line selects the button element by its ID (btn).

`const color = document.getElementById("color");`

This line selects the element where the current color code will be displayed.

#### 2. Event Listener:

`btn.addEventListener("click", () => { ... });`

An event listener is added to the button, which listens for click events. When the button is clicked, the function inside the event listener is executed.

#### 3. Generating a Random Color:

`Math.floor(Math.random() * 16777215).toString(16);`

This line generates a random hexadecimal color code:
Math.random() generates a random decimal number between 0 and 1.
Multiplying by 16777215 scales the number up to cover all possible hex color values.
Math.floor() rounds the number down to the nearest whole number.
.toString(16) converts the number to a hexadecimal string.

#### 4. Updating the Background Color:

`document.body.style.backgroundColor= "#" + randomColor;`

This line changes the background color of the webpage to the newly generated random color.

#### 5. Displaying the Color Code:

`color.textContent = "#" + randomColor;`
This line updates the text content of the color element to show the current color code on the webpage.

#### 6. Usage:

When the user clicks the button, the background color of the webpage changes to a random color, and the corresponding color code is displayed on the screen.
