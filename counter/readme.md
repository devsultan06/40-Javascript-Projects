## Site Screenshot

![Site Screenshot](./Screenshot%202024-09-03%20120930.png)

# JavaScript Code Explanation

This JavaScript code controls a simple counter with three buttons: increase, decrease, and reset. The counter value is displayed on the webpage and updates based on user interaction with the buttons.

## Code Screenshot

![Code Screenshot](./Screenshot%202024-09-03%20120948.png)

# Explanation:

#### 1. Element Selection:

`const increase = document.getElementById("increase");`
`const decrease = document.getElementById("decrease");`
`const reset = document.getElementById("reset");`
`const value = document.getElementById("value");`

These lines select the button elements by their respective IDs (increase, decrease, reset) and the element where the current counter value will be displayed (value).

#### 2. Counter Initialization:

`let count = 0;`

The counter is initialized with a value of 0. This variable (count) will keep track of the current value of the counter.

#### 3. Event Listeners::

`increase.addEventListener("click", () => {count++; value.textContent = count; });`

`decrease.addEventListener("click", () => {count--; value.textContent = count; });`

`reset.addEventListener("click", () => {count = 0; value.textContent = count; });`

Each button has an event listener that listens for click events:

**1. Increase Button**: When the "Increase" button is clicked, the counter (count) is incremented by 1, and the updated value is displayed in the value element.

**2. Decrease Button**: When the "Decrease" button is clicked, the counter is decremented by 1, and the updated value is displayed.

**3. Reset Button**: When the "Reset" button is clicked, the counter is reset to 0, and the value is updated accordingly.

#### 4. Displaying the Counter Value:

`value.textContent = count;`

This line updates the text content of the value element to reflect the current value of the counter.

#### 6. Usage:

When the user clicks the "Increase" button, the counter value increases by . Clicking the "Decrease" button reduces the value by. Clicking the "Reset" button sets the counter back to 0. The current counter value is always displayed in the value element on the page.
