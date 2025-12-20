    
const card = document.getElementById("painting-card");
const nextBtn = document.getElementById("next-btn");
const backBtn = document.getElementById("back-btn");

let paintingIDs = [];
let index = 0;

// Load paintings list
async function loadPaintings() {
  const url =
    "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&departmentId=11&q=painting";

  const res = await fetch(url);
  const data = await res.json();

  paintingIDs = data.objectIDs.slice(0, 50);
  showPainting();
}

// Show one painting
async function showPainting() {
  card.classList.remove("show");

  const id = paintingIDs[index];
  const url =
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`;

  const res = await fetch(url);
  const art = await res.json();

  card.innerHTML = `
    <img src="${art.primaryImageSmall}" alt="Painting">

    <h2>${art.title || "Untitled"}</h2>
    <p><strong>Artist:</strong> ${art.artistDisplayName || "Unknown"}</p>
    <p><strong>Date:</strong> ${art.objectDate || "Unknown"}</p>
    <p><strong>Medium:</strong> ${art.medium || "Unknown"}</p>
    <p><strong>Department:</strong> ${art.department || "Unknown"}</p>
  `;

  // Fade in animation
  setTimeout(() => card.classList.add("show"), 50);

  // Disable buttons at edges
  backBtn.disabled = index === 0;
  nextBtn.disabled = index === paintingIDs.length - 1;
}

// Buttons
nextBtn.addEventListener("click", () => {
  if (index < paintingIDs.length - 1) {
    index++;
    showPainting();
  }
});

backBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    showPainting();
  }
});

// Start
loadPaintings();
