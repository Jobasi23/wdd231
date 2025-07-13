let allMembers = [];
let showingAll = false;

async function fetchMembers() {
  try {
    const response = await fetch("data/members.json");
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    allMembers = data.members;
    displayMembers(allMembers.slice(0, 3)); // Show only the first 3 initially
  } catch (error) {
    console.error("Error fetching member data:", error);
  }
}

function displayMembers(members) {
  const container = document.getElementById("business-cards");
  container.innerHTML = ""; // Clear current content

  members.forEach(member => {
    const section = document.createElement("section");
    section.classList.add("business-name");

    section.innerHTML = `
      <div class="shopping">
        <h3>${member.name}</h3>
        <p>${member.description}</p>
        <hr>
      </div>
      <div class="business-info">
        <img src="images/${member.image}" alt="${member.name}">
        <div class="card-info">
          <p>ADDRESS: ${member.address}</p>
          <p>PHONE: ${member.phone}</p>
          <p>URL: <a href="${member.website}" target="_blank">${member.website}</a></p>
          <p>LEVEL: ${["Member", "Silver", "Gold"][member.level - 1]}</p>
        </div>
      </div>
    `;

    container.appendChild(section);
  });
}

// Toggle between showing all and first 3
document.getElementById("seeMoreBtn").addEventListener("click", () => {
  if (showingAll) {
    displayMembers(allMembers.slice(0, 3));
    document.getElementById("seeMoreBtn").textContent = "See More";
    showingAll = false;
  } else {
    displayMembers(allMembers);
    document.getElementById("seeMoreBtn").textContent = "See Less";
    showingAll = true;
  }
});

fetchMembers();
