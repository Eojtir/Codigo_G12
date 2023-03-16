const pokemonForm=document.querySelector("#pokemon-form");
const container= document.querySelector(".result");





pokemonForm.onsubmit = async function (event){
  event.preventDefault();
  const pokemonName = event.target[0].value;

  if(!pokemonName){
    alert("El nombre No puede estar vacio");
  }
// debemos hacer la busqueda usando el API
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
  // si es falso o el no existe
  if(!response.ok){
  alert(" El pokemon que buscas no existe");
  return;
  }
  const pokeData = await response.json();

  console.log(pokeData);

   container.innerHTML =`
   <img src=${pokeData.sprites.other.home.front_shiny} alt="image">
   <h2>${pokeData.name.toUpperCase()}</h2>
  
   `


  

}