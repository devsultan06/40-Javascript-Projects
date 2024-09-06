let currentIndex = 0;
const reviews = document.querySelectorAll(".review");
const totalReviews = reviews.length;
const showReview = (index) => {
  document.querySelector(".review-container").style.transform = `translateX(-${
    index * 100
  }%)`;
};

const nextReview = () => {
  currentIndex = (currentIndex + 1) % totalReviews;
  showReview(currentIndex);
};

const prevReview = () => {
  currentIndex = (currentIndex - 1 + totalReviews) % totalReviews;
  showReview(currentIndex);
};
const randomReview = () => {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * totalReviews);
  } while (randomIndex === currentIndex);
  currentIndex = randomIndex;
  showReview(currentIndex);
};

document.getElementById("next-btn").addEventListener("click", nextReview);
document.getElementById("prev-btn").addEventListener("click", prevReview);
document.querySelector(".random-btn").addEventListener("click", randomReview);
