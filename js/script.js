document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".member-card");

  cards.forEach((card, index) => {
    if (index % 2 === 0) {
      card.classList.add("from-left");
    }

    setTimeout(() => {
      card.classList.add("visible");
    }, index * 300);
  });
});
