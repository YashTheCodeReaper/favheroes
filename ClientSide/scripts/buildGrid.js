"use strict"; //operate js in strict mode

// function to build grid components using hero array data
export function buildGridFunction(heroArray) {
  // loop through heroArray
  heroArray.forEach((hero) => {
    // Take out certain part in image url
    const heroImg = hero.image.split("FavHeroes/")[1];

    // Take out only birth year from the date of birth
    const birthYear = new Date(hero.dob).getFullYear();

    // Present year
    const currentYear = new Date().getFullYear();

    // Html content variable
    const html = `
        <div class="heroes-grid-component">
          <div class="hero-img-container">
            <div class="blue-pink-overlay"></div>
            <img src="../${heroImg}" alt="hero" class="hero-img" />
          </div>
          <div class="hero-details">
            <h2 class="hero-name">${hero.name}</h2>
            <p class="hero-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              explicabo.
            </p>
          </div>
          <div class="stats-container">
            <div class="stat-box">
              <h3 class="stat-field">Fans</h3>
              <h2 class="stat-value">${hero.fans}</h2>
            </div>
            <div class="stat-box">
              <h3 class="stat-field">Rating</h3>
              <h2 class="stat-value">${hero.rating}/10</h2>
            </div>
            <div class="stat-box">
              <h3 class="stat-field">Gender</h3>
              <h2 class="stat-value">${
                hero.gender == "M" ? "Male" : "Female"
              }</h2>
            </div>
            <div class="stat-box">
              <h3 class="stat-field">Age</h3>
              <h2 class="stat-value">${currentYear - birthYear}</h2>
            </div>
          </div>
        </div>
    `;

    // append the html variable as a child to grid component for heroes grid
    $(".heroes-grid").append(html);
  });

  // Hero grid component select
  const heroComponent = document.querySelectorAll(".heroes-grid-component");

  // Event bubbling for background change
  heroComponent.forEach((hero) => {
    hero.addEventListener("mouseover", function (e) {
      let image = e.target.closest(".hero-img-container");

      if (!image) return;
      else {
        let heroOverlay = document.querySelector(".hero-overlay");
        heroOverlay.style.opacity = "0";

        setTimeout(() => {
          heroOverlay.src = image.lastElementChild.src;
          heroOverlay.style.opacity = "0.3";
        }, 100);
      }
    });
  });
}
