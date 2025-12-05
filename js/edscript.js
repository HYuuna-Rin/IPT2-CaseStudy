// Smooth scrolling
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) element.scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");

  // Active link highlighting
  window.addEventListener("scroll", function () {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 100) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === current) {
        link.classList.add("active");
      }
    });
  });

  // Form submission
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    form.reset();
  });

  // Mobile menu toggle
  const menuBtn = document.getElementById("menu-btn");
  const navLinksDiv = document.getElementById("nav-links");

  menuBtn.addEventListener("click", () => {
    navLinksDiv.classList.toggle("hidden");
    navLinksDiv.classList.toggle("flex");
    navLinksDiv.classList.toggle("flex-col");
    navLinksDiv.classList.toggle("bg-white");
    navLinksDiv.classList.toggle("absolute");
    navLinksDiv.classList.toggle("top-16");
    navLinksDiv.classList.toggle("right-6");
    navLinksDiv.classList.toggle("shadow-md");
    navLinksDiv.classList.toggle("p-4");
    navLinksDiv.classList.toggle("rounded-lg");
  });
});
