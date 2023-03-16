// const selectBreed=document.querySelector("#select-breed");

// async function dogApi(){
// const Dogs = await fetch("https://dog.ceo/api/breeds/list/all")

// const listDogs= await Dogs.json();
// console.log(listDogs.message);
// }


// dogApi();

const selectBreed = document.querySelector("#select-breed");
const gallery = document.querySelector(".gallery");
// Creen una funcion que obtenga el JSON de la API de razas
//https://dog.ceo/api/breeds/list/all
const getBreeds = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();
  const breeds = Object.keys(data.message);//transformo el objeto en array

  breeds.forEach((breed) => {
    selectBreed.innerHTML += 
    `
    <option value="${breed}">${breed}</option>
    `
  });

};

getBreeds();


selectBreed.onchange =async function (event){
// console.log(event.target.value);
// console.log(this.value);
const currentBreed=this.value;

const response =await fetch(
  `https://dog.ceo/api/breed/${currentBreed}/images`
)
const data = await response.json();
const imagesdog = data.message;
gallery.innerHTML = "";
imagesdog.forEach((image)=>{
  gallery.innerHTML += `<img src="${image}" alt="" />`
});


}
