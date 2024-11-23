// Select elements
const menuButtonHarmbuger = document.querySelector(".navbar-menu");
const menuButtonTimes = document.getElementById("navbar-close");
const mobileNav = document.querySelector(".mobile-nav");
const harmbuger = document.querySelector(".harmbuger");
const times = document.querySelector(".times");

const card = document.querySelector(".card");
const flipBtn = document.querySelector(".flip-btn");
const closeBtn = document.querySelector(".close-btn");

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
flipBtn.addEventListener("click", () => {
  card.style.transform = "rotateY(180deg)";
});
flipBtn.addEventListener("click",()=>{
    console.log("hell")
})

closeBtn.addEventListener("click", () => {
  card.style.transform = "rotateY(0deg)";
});
