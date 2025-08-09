let allCakes = [];
let showingAll = false;
const gallery = document.getElementById("cakeGallery");
const toggleBtn = document.getElementById("toggleBtn");

fetch("data/cakes.json")
    .then(response => response.json())
    .then(data => {
        allCakes = data.cakes;
        displayCakes(12);
    });

function displayCakes(limit) {
    gallery.innerHTML = "";
    let cakesToShow = showingAll ? allCakes : allCakes.slice(0, limit);

    cakesToShow.forEach(cake => {
        let cakeCard = document.createElement("div");
        cakeCard.classList.add("cake-card");

        cakeCard.innerHTML = `
            <img src="${cake.image}" alt="${cake.name}">
            <div class="cake-info">
                <h3>${cake.name}</h3>
                <p>${cake.description}</p>
                <p class="price">${cake.price} <span class="discount">${cake.discount}</span></p>
            </div>
        `;

        gallery.appendChild(cakeCard);
    });
}

toggleBtn.addEventListener("click", () => {
    showingAll = !showingAll;
    toggleBtn.textContent = showingAll ? "See Less" : "See More";
    displayCakes(10);
});
