// Select all FAQ icons
const faqIcons = document.querySelectorAll(".fa-regular");

faqIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const faq = icon.closest(".faq"); // Get the closest .faq element

    // Close other FAQs
    faqIcons.forEach((otherIcon) => {
      const otherFaq = otherIcon.closest(".faq");
      if (otherFaq !== faq) {
        otherFaq.classList.remove("open");
        otherFaq.querySelector(".answer").style.maxHeight = null;
      }
    });

    // Toggle the current FAQ
    faq.classList.toggle("open");
    const answer = faq.querySelector(".answer");

    if (faq.classList.contains("open")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = null;
    }
  });
});
