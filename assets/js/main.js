document.querySelectorAll(".scroll-down").forEach((scrollButton) => {
  scrollButton.addEventListener("click", () => {
    const footer = document.querySelector("#footer");
    footer.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
document.querySelectorAll(".scroll-down-about").forEach((scrollButton) => {
  scrollButton.addEventListener("click", () => {
    const footer = document.querySelector("#accordion");
    footer.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion-container");

  accordions.forEach((accordion) => {
    accordion.addEventListener("click", () => {
      accordion.classList.toggle("active");
    });
  });
});
