async function loadInterests() {
  try {
    const response = await fetch("./data/interests.json");
    if (!response.ok) {
      throw new Error("Failed to fetch interests data");
    }

    const data = await response.json();
    const container = document.getElementById("discoverContainer");

    data.interests.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("interest-card");

      card.innerHTML = `
        <h2>${item.name}</h2>
        <figure>
          <img src="../images/${item.image}" alt="${item.name}">
        </figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button>Learn More</button>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading interests:", error);
  }
}

loadInterests();

const sidebar = document.querySelector(".sidebar-message"); 

const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();
let message = "";

if (!lastVisit) {
  message = "Welcome! Let us know if you have any questions.";
} else {
  const daysDiff = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
  if (daysDiff < 1) {
    message = "Back so soon! Awesome!";
  } else if (daysDiff === 1) {
    message = "You last visited 1 day ago.";
  } else {
    message = `You last visited ${daysDiff} days ago.`;
  }
}

document.querySelector(".sidebar-message").textContent = message;
localStorage.setItem("lastVisit", now);
