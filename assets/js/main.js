document.querySelectorAll(".scroll-down").forEach((scrollButton) => {
  scrollButton.addEventListener("click", () => {
    const footer = document.querySelector("#footer");
    footer.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
document.querySelectorAll(".scroll-down-about").forEach((scrollButton) => {
  scrollButton.addEventListener("click", () => {
    const footer = document.querySelector("#about-us");
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

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting

  // Clear previous errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";
  document.getElementById("successMessage").textContent = "";

  // Form fields
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  let isValid = true;

  // Validate name
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  } else if (name.length < 3) {
    document.getElementById("nameError").textContent =
      "Name must be at least 3 characters long.";
    isValid = false;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email address.";
    isValid = false;
  }

  // Validate message
  if (message === "") {
    document.getElementById("messageError").textContent =
      "Message is required.";
    isValid = false;
  } else if (message.length < 10) {
    document.getElementById("messageError").textContent =
      "Message must be at least 10 characters long.";
    isValid = false;
  }

  // If the form is valid, display a success message
  if (isValid) {
    document.getElementById("successMessage").textContent =
      "Thank you for your message!";
    document.getElementById("contactForm").reset(); // Reset the form
  }
});
