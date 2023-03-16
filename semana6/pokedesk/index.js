const inputPokemon=document.querySelector("#iptPokemon");
const form = document.querySelector("form");
const btnSearch=document.querySelector("buttom");
const container=document.querySelector(".result")



async function getPokemon(nPokemon) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nPokemon.toLowerCase().trim()}`);
  const data = await response.json();
  const imgPokemon= data.sprites.front_default;
const namePokemon= data.species.name;
  console.log(nPokemon,data);
  container.innerHTML =`
  <img src="${imgPokemon}" alt="image">
  <h2>${namePokemon.toUpperCase()}</h2>
  
  
  `

}





form.onsubmit = function (event) {
  const pokemon=inputPokemon.value;
  event.preventDefault();
  getPokemon(pokemon);
  input.value=""
};