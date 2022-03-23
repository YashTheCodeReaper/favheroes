import * as grid from "./buildGrid.js"; //import buildGrid.js file

// Make ajax call to get all heroes
export const getAllHeroes = () => {
  $.ajax({
    method: "GET",
    url: "https://favheroes-api.herokuapp.com/getallheroes/",
  }).done((response) => {
    // Build the grid components using the fetched data
    grid.buildGridFunction(response.data);
  });
};

// Make ajax call to get all marvel heroes
export const getAllMarvelHeroes = () => {
  $.ajax({
    method: "GET",
    url: "https://favheroes-api.herokuapp.com/getallmarvelheroes/",
  }).done((response) => {
    // Build the grid components using the fetched data
    grid.buildGridFunction(response.data);
  });
};

// Make ajax call to get all dc heroes
export const getAllDcHeroes = () => {
  $.ajax({
    method: "GET",
    url: "https://favheroes-api.herokuapp.com/getalldcheroes/",
  }).done((response) => {
    // Build the grid components using the fetched data
    grid.buildGridFunction(response.data);
  });
};
