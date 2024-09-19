const generateBtn = document.getElementById("generateBtn");
const output = document.getElementById("output");

// Custom Lorem Ipsum text (you can change this to any placeholder text)
const loremText = [
  "Your own text goes here. Create interesting sentences to fill up the space.",
  "You can make this text whatever you want! Get creative and customize it.",
  "The quick brown fox jumps over the lazy dog, or you can make up your own phrase.",
  "Every paragraph will be different, depending on the number of paragraphs requested.",
  "This is your personal Lorem Ipsum generator. Add as much text as you want!",
];

// Function to generate custom Lorem Ipsum
function generateLoremIpsum(paragraphsCount) {
  let result = "";
  for (let i = 0; i < paragraphsCount; i++) {
    // Pick a random sentence from the array
    const randomText = loremText[Math.floor(Math.random() * loremText.length)];
    result += `<p>${randomText}</p>`;
  }
  return result;
}

// Event listener for the generate button
generateBtn.addEventListener("click", () => {
  const paragraphs = document.getElementById("paragraphs").value;
  if (paragraphs > 0) {
    output.innerHTML = generateLoremIpsum(paragraphs);
  } else {
    output.innerHTML = `<p>Please enter a valid number of paragraphs.</p>`;
  }
});
