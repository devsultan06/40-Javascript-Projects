// Select the video element
const video = document.getElementById("video");

// Show the video when it has fully loaded
video.addEventListener("loadeddata", () => {
  video.classList.add("loaded"); // Add the "loaded" class to show the video
});

// Play the video when the Play button is clicked
document.getElementById("playBtn").addEventListener("click", () => {
  video.play();
});

// Pause the video when the Pause button is clicked
document.getElementById("pauseBtn").addEventListener("click", () => {
  video.pause();
});
