// Select elements
const menuButtonHarmbuger = document.querySelector(".navbar-menu");
const menuButtonTimes = document.getElementById("navbar-close");
const mobileNav = document.querySelector(".mobile-nav");
const harmbuger = document.querySelector(".harmbuger");
const times = document.querySelector(".times");

const cards = document.querySelectorAll(".card");

menuButtonHarmbuger.addEventListener("click", () => {
  mobileNav.classList.toggle("show");
  times.classList.toggle("show");
  harmbuger.classList.toggle("hide");
});

menuButtonTimes.addEventListener("click", () => {
  mobileNav.classList.remove("show")
    harmbuger.classList.remove("hide");
      times.classList.remove("show");
});

cards.forEach((card) => {
  const flipBtn = card.querySelector(".flip-btn");
  const closeBtn = card.querySelector(".close-btn");

  flipBtn.addEventListener("click", () => {
    card.style.transform = "rotateY(180deg)";
  });


  closeBtn.addEventListener("click", () => {
    card.style.transform = "rotateY(0deg)";
  });
});
