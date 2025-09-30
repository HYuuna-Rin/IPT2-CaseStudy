const memberCards = document.querySelectorAll('.member-card');

memberCards.forEach(card => {
  const name = card.querySelector('h2');

  card.addEventListener('mouseenter', () => {
    name.style.color = '#ff6600';
  });

  card.addEventListener('mouseleave', () => {
    name.style.color = '#007acc';
  });
});
