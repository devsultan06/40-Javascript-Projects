// Select the button and color elements
const btn = document.getElementById("btn");
const color = document.getElementById("color");

btn.addEventListener("click", () => {
  // Generate a random number between 0 and 255
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  // Set the background color of the body to the random color
  document.body.style.backgroundColor = "#" + randomColor;
  // Set the text content of the color element to the random color
  color.textContent = "#" + randomColor;
});
