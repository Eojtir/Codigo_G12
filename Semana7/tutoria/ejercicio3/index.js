// const categoriesSection = document.querySelector(".categories");
// const productsSection = document.querySelector("#Products");
// const button = document.querySelector("button");
// async function renderCategory(){
//   const  response = await fetch('https://fakestoreapi.com/products/categories');
//   const data = await response.json();
//   categoriesSection.innerHTML = ""

//   data.forEach(category => {
//   categoriesSection.innerHTML += `
//   <button
//   class="btn btn-info">${category}
//   </button>
//   `
//   const buttons = document.querySelector("button");

//   buttons.forEach(button=>{
//     button.addEventListener('click', event => {
//       console.log(event)
//     } )

//   })

// });
// }

// renderCategory();



async function renderCategories() {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  // console.log(response)
  const categorias = await response.json();
  console.log(categorias);

  const categoriesSection = document.querySelector(".categories");
  let categoryButtons = "";

  categorias.forEach((category) => {
    categoryButtons =
      categoryButtons +
      `<button class="btn btn-primary m-1">${category}</button>`;
    // categoryButtons += `<button>${category}</button>`
  });

  categoriesSection.innerHTML = categoryButtons;

  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      fetchProductsByCategory(event.target.textContent);
    });
    button.addEventListener('click', event => {
      button.classList.toggle(bg-red);

    })



  });
}
renderCategories();

const productsSection = document.querySelector("#Products");
async function fetchProductsByCategory(categoria) {
  productsSection.innerHTML = "";
  const responseProducts = await fetch(
    `https://fakestoreapi.com/products/category/${categoria}`
  );
  const dataProducts = await responseProducts.json();

  console.log(dataProducts);
  dataProducts.forEach((dataProduct) => {
    productsSection.innerHTML += `
    <div class="card2 col-3 mb-5">
    <div class="card-img2"><img src="${dataProduct.image}" alt=""></div>
    <div class="card-info2">
      <p class="text-title2">${dataProduct.title}</p>
      <p class="text-body2">${dataProduct.description}</p>
    </div>
    <div class="footer">
    <div class="card-footer2">
    <span class="text-title2">${dataProduct.price}</span>
    <div class="card-button2">
    <button class ="btn btn-info" value="${dataProduct.id}">add</button>
    </div>
  </div>
  </div></div>
    `;
  });
}
