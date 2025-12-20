document.addEventListener("DOMContentLoaded", function () {
  const UNSPLASH_ACCESS_KEY = "LxJKvHAT7t-bIWDOZt1l4nTW0LDvxKbBP9XE8_lmZ7Y"; // Replace with your key
  const HERO_SELECTOR = ".hero";
  const FALLBACK_IMAGE = "../images/tulips.webp"; // Local fallback image

  const heroBg = document.querySelector(".hero-bg");

function loadUnsplashHero() {
  fetch(`https://api.unsplash.com/photos/random?query=tulips,flowers,pink&orientation=landscape&client_id=${UNSPLASH_ACCESS_KEY}`)
    .then(response => response.json())
    .then(data => {
      const imageUrl = data?.urls?.regular || FALLBACK_IMAGE;

      // Fade out
      heroBg.style.opacity = 0;

      setTimeout(() => {
        heroBg.style.backgroundImage = `url('${imageUrl}')`;
        heroBg.style.opacity = 1;
      }, 800);

      console.log("Unsplash image loaded:", imageUrl);
    })
    .catch(error => {
      console.error("Unsplash API error:", error);
      heroBg.style.backgroundImage = `url('${FALLBACK_IMAGE}')`;
      heroBg.style.opacity = 1;
    });
}

  // Initial load
  loadUnsplashHero();
});

