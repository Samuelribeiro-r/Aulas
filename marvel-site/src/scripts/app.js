// src/scripts/app.js
document.addEventListener("DOMContentLoaded", () => {
    const heroContainer = document.getElementById("hero-container");

    // Function to fetch hero data
    async function fetchHeroes() {
        try {
            const response = await fetch("https://api.example.com/marvel-heroes");
            const heroes = await response.json();
            renderHeroes(heroes);
        } catch (error) {
            console.error("Error fetching heroes:", error);
        }
    }

    // Function to render hero cards
    function renderHeroes(heroes) {
        heroes.forEach(hero => {
            const heroCard = createHeroCard(hero);
            heroContainer.appendChild(heroCard);
        });
    }

    // Function to create a hero card element
    function createHeroCard(hero) {
        const card = document.createElement("div");
        card.className = "hero-card";
        card.innerHTML = `
            <h2>${hero.name}</h2>
            <img src="${hero.image}" alt="${hero.name}">
            <p>${hero.description}</p>
        `;
        return card;
    }

    // Initial fetch of heroes
    fetchHeroes();
});