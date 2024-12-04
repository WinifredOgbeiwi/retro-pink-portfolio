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


document.addEventListener("DOMContentLoaded", () => {
  const greetings = document.querySelectorAll(".greeting");
  const mainContent = document.querySelector(".body-container");
  const greetingsContainer = document.getElementById("greetings-container");

  let currentIndex = 0;

  // Check localStorage for the greeting flag
  const hasSeenGreeting = localStorage.getItem("hasSeenGreeting");

  if (hasSeenGreeting) {
    // Skip greetings if already shown
    greetingsContainer.style.display = "none";
    mainContent.style.display = "block";
  } else {
    // Show greetings and set the flag in localStorage
    localStorage.setItem("hasSeenGreeting", "true");

    function showNextGreeting() {
      if (currentIndex > 0) {
        greetings[currentIndex - 1].style.display = "none";
      }

      if (currentIndex < greetings.length) {
        greetings[currentIndex].style.display = "block";
        currentIndex++;
        setTimeout(showNextGreeting, 1000);
      } else {
        greetingsContainer.style.display = "none";
        mainContent.style.display = "block";
      }
    }

    showNextGreeting();
  }
});




document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll(".activities-header h4");
    const items = document.querySelectorAll(".activity-item");

    // Function to set "All" as the default view
    function showDefault() {
        headers.forEach(header => header.classList.remove("active"));
        document.querySelector('[data-category="all"]').classList.add("active");
        items.forEach(item => item.classList.add("active"));
    }

    // Initialize the default view
    showDefault();

    headers.forEach(header => {
        header.addEventListener("click", () => {
            const category = header.getAttribute("data-category");

            // Remove active class from all headers
            headers.forEach(h => h.classList.remove("active"));

            // Add active class to the clicked header
            header.classList.add("active");

            // Hide all items initially
            items.forEach(item => item.classList.remove("active"));

            // Show relevant items
            if (category === "all") {
                items.forEach(item => item.classList.add("active"));
            } else {
                items.forEach(item => {
                    if (item.getAttribute("data-category") === category) {
                        item.classList.add("active");
                    }
                });
            }
        });
    });
});
