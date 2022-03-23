"use strict";

// variables
let count = 1;
let allHeroesCount = 0;

// After html dom tree ready
$(document).ready(function () {
  // make ajax call to get counts for heroes
  $.ajax({
    method: "GET",
    url: "https://favheroes-api.herokuapp.com/getuniverseheroescount/",
  }).done((response) => {
    response.data.forEach((data) => {
      allHeroesCount += data.count;
      buildCards(data);
    });
  });

  // Building cards to home-container
  const buildCards = (data) => {
    const html = `
    <div class="card-outer">
        <a href=${data.universe == "DC" ? "./dcgrid.html" : "./mcugrid.html"}>
        <div class="card-inner">
          <img
            src=${data.universe == "DC" ? "assets/dc.jpg" : "assets/marvel.jpg"}
            alt="allheroes-bg"
            class="allheroesimg"
          />
          <div class="card-inner-details">
            <h1 class="big-number">0${count}</h1>
            <h2 class="main-title">Get ${data.universe} Heroes</h2>
            <p class="main-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequuntur, sapiente eum vel harum non illo ab assumenda
              blanditiis vero molestiae?
            </p>
            <h2 class="main-title">${data.count} Heroes</h2>
          </div>
        </div>
        </a>
    </div>`;
    // appending cards to home-container
    $(".home-container").append(html);
    // increase the count
    count++;
    if (count === 3) buildCardOnce();
  };

  // Building all heroes cards to home-container
  const buildCardOnce = (data) => {
    const html = `
    <div class="card-outer">
        <a href="./allgrid.html">
          <div class="card-inner">
            <img
              src="assets/allheroes.jpg"
              alt="allheroes-bg"
              class="allheroesimg"
            />
            <div class="card-inner-details">
              <h1 class="big-number">0${count}</h1>
              <h2 class="main-title">Get All Heroes</h2>
              <p class="main-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequuntur, sapiente eum vel harum non illo ab assumenda
                blanditiis vero molestiae?
              </p>
              <h2 class="main-title">${allHeroesCount} Heroes</h2>
            </div>
          </div>
        </a>
      </div>`;

    // appending cards to home-container
    $(".home-container").append(html);

    // increase the count
    count++;
  };
});
