## Site Screenshot

![Site Screenshot](./Screenshot%202024-09-06%20204023.png)

# JavaScript Code Explanation

This JavaScript code controls a review carousel with buttons to view the next, previous, and random reviews.

## Code Screenshot

![Code Screenshot](./Screenshot%202024-09-06%20204241.png)

# Explanation:

#### 1. Element Selection:

`const reviews = document.querySelectorAll(".review");`
`const totalReviews = reviews.length;`
`const nextBtn = document.getElementById("next-btn");`
`const prevBtn = document.getElementById("prev-btn");`
`const randomBtn = document.querySelector(".random-btn");`

These lines select all review elements, count the total number of reviews, and grab the navigation buttons by their respective IDs (next, previous, and random).

#### 2. Initializing the Current Review::

`let currentIndex = 0;`

The currentIndex variable is initialized to 0 to track which review is currently displayed.

#### 3. Review Display Function:

`const showReview = (index) => {document.querySelector(".review-container").style.transform = translateX(-${index 100}%);`

This function displays the review corresponding to the passed index by moving the container with CSS transform.

#### 4. Next and Previous Button Functions:

`const nextReview = () => { currentIndex = (currentIndex + 1) % totalReviews; showReview(currentIndex); };`

`const prevReview = () => { currentIndex = (currentIndex - 1 + totalReviews) % totalReviews; showReview(currentIndex); };`

The nextReview function increments the currentIndex and loops back to the first review when the last one is reached. The prevReview function decrements the currentIndex and loops to the last review if the current review is the first one.

#### 5. Random Review Function:

`const randomReview = () => { let randomIndex;  do { randomIndex = Math.floor(Math.random() * totalReviews);  } while (randomIndex === currentIndex); currentIndex = randomIndex; showReview(currentIndex); };`

This function generates a random review index, ensuring it’s different from the current review, then displays the corresponding review.

#### 6. Event Listeners:

`nextBtn.addEventListener("click", nextReview);`
`prevBtn.addEventListener("click", prevReview);`
`randomBtn.addEventListener("click", randomReview);`

These event listeners trigger the respective functions when the next, previous, or random button is clicked.

#### Usage:

**Next Button**: Displays the next review.
**Previous Button**: Displays the previous review.
**Random Button**: Displays a random review.

This carousel is fully functional with smooth transitions and navigation controls for better user interaction.
