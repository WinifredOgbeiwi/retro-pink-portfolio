// Select all cards
const cards = document.querySelectorAll(".card");

// Loop through each card and add event listeners
cards.forEach((card) => {
  const flipBtn = card.querySelector(".flip-btn");
  const closeBtn = card.querySelector(".close-btn");

  // Flip the card when the "Flip" button is clicked
  flipBtn.addEventListener("click", () => {
    card.style.transform = "rotateY(180deg)";
  });

  // Flip the card back when the "Close" button is clicked
  closeBtn.addEventListener("click", () => {
    card.style.transform = "rotateY(0deg)";
  });
});
