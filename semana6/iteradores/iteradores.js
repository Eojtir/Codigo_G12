const products = [
  {
    id: 1,
    name: "TV 75 pulgadas",
    category: ["Tech"],
    price: 3500.34,
    stock: 20,
  },
  {
    id: 2,
    name: "Cama king",
    category: ["Hogar"],
    price: 500.99,
    stock: 200,
  },
  {
    id: 3,
    name: "iPhone 14 pro",
    category: ["Tech"],
    price: 5600,
    stock: 10,
  },
  {
    id: 4,
    name: "microondas",
    category: ["Tech", "Hogar"],
    price: 500,
    stock: 120,
  },
  {
    id: 5,
    name: "iPhone 11",
    category: ["Tech", "Hogar"],
    price: 500,
    stock: 0,
  },
];

//creo un filtro para productos que cuestas mas de 1000
const filterPrice=products.filter((product) => product.price>1000);
console.log("filter");
console.log(filterPrice);


//*categoria tech

const filterCategory=products.filter((product) =>
product.category.includes("Hogar")
)

console.log("filtro categoria",filterCategory);



// filtro categoria ignorando las mayusculas
const filtro = products.filter((product) =>
  product.category
    .join("-") // "Tech-Hogar"
    .toLowerCase() // "tech-hogar"
    .split("-") // ["tech", "hogar"]
    .includes("TECH".toLowerCase())
);

console.log("filtro categoria2",filtro);

//.find solo se trae uno, al primer elemento que consiga
//recomendado 
const search=products.find(

  (product) => product.name.toLowerCase()=== "Iphone 14 Pro".toLowerCase()
);

console.log(search);


// findIndex buscar solo un elemento pero lo que retorna es el indice(posicion)

const searchIndex = products.findIndex((product) => product.price < 1000);

/**
 * 
const searchIndex = products.findIndex(function (product) {
  return product.price < 1000;
});

 */
console.log("searchIndex", searchIndex);

//for Soporta Return
// for of Soporta Return
//for in Soporta Return
//forEach no Soporta Return
//map return[]
//filter return[]
//find return element
//findIndex return element


//busqueda no exacta

// quiero hacer una busqueda, no es exacta ejemplo escribo iPhone

//el includes busca dentro del array con coincidencias parciales
const searchIphone = products.filter((product) =>
  product.name.toLowerCase().includes("IPH".toLowerCase())
);

console.log("searchIphone", searchIphone);


// every => todo    && todo tiene que cumplir la condicion para dar true
// some  => alguno  ||alguno tiene que cumplir la condicion para dar true

// ambos retornan true o false
const hasStock = products.every((product) => product.stock > 0);
console.log(hasStock);

const hasZeroStock = products.some((product) => product.stock === 0);
console.log(hasZeroStock);