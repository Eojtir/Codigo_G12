let page = 1;
const pokemonsList = document.querySelector(".pokemonslist");

const fechPokemons = async (page = 1) => {
  const limit = 9;
  const offset = (page - 1) * limit;
  const urlPokemons = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
  const response = await fetch(urlPokemons);
  const data = await response.json();
  const dataResults = data.results.map(pokemon => {
    const id = pokemon.url.split("/").at(6);
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

    return {
      ...pokemon, //name, url
      id,
      image
    }
  });


};

const documentReady = async () => {
  const nextPage = document.querySelector("#nextPage");
  const prevPage = document.querySelector("#prevPage");
  const curretPage = document.querySelector("#curretPage");

  nextPage.addEventListener("click", async () => {
    const pokemons = await fechPokemons(++page);
    renderPokemons(pokemons);
    curretPage.innerHTML = page;
  });
  const pokemons = await fechPokemons();
  renderPokemons(pokemons);
};

const renderPokemons = (pokemons) => {
  pokemonsList.innerHTML = "";
  pokemons.forEach((pokemon) => {
    pokemonsList.innerHTML += `<h2>${pokemon.name}</h2>`;
  });
};

document.addEventListener("DOMContentLoaded", documentReady);
