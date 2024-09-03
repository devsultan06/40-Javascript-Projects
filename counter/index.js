// Select the button and color elements
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const value = document.getElementById("value");

let count = 0;

increase.addEventListener("click", () => {
  count++;
  value.textContent = count;
});

decrease.addEventListener("click", () => {
  count--;
  value.textContent = count;
});

reset.addEventListener("click", () => {
  count = 0;
  value.textContent = count;
});

//The Code increments, decrements, or resets a counter value displayed on the page. The counter value starts at 0 and can be increased, decreased, or reset to 0 by clicking the corresponding buttons. The current counter value is displayed in the "value" element on the page.
