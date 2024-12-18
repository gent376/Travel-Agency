// 1. SLIDESHOW VARIABLES
const slidesContainer = document.querySelector(".slides-container");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
let currentIndex = 0;
let autoScrollInterval;

// 2. SLIDESHOW FUNCTIONS

function updateSlidePosition() {
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Move to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlidePosition();
}

// Move to the previous slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlidePosition();
}

// Start auto-scroll (every 3 seconds)
function startAutoScroll() {
  stopAutoScroll(); // Clear any existing intervals
  autoScrollInterval = setInterval(nextSlide, 3000);
}

// Stop auto-scrolling
function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

// 3. SLIDESHOW EVENT LISTENERS
nextButton.addEventListener("click", () => {
  nextSlide();
  startAutoScroll();
});

prevButton.addEventListener("click", () => {
  prevSlide();
  startAutoScroll();
});

startAutoScroll();
