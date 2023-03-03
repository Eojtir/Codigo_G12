// const celular = {
//   marca: "apple",
//   precio: 1200,
//   rating: 4.4,
// };

// const persona = {
//   nombre: "Juan",
//   apellido: "Perez",
//   edad: 28,
//   altura: 1.78,
//   peso: 76.4,
//   hobby: ["Futbol", "Natacion", "Bicicleta"],
//   esMayorDeEdad: true,
// };
// //key.value es lamejor manera de traer datos de un objeto, los objetos no son iterables
// console.log(persona["edad"]);
// console.log(persona.edad);
// console.log(persona.nombre, persona.apellido);

// persona["dni2"] = "11111";
// persona.dni = "88888888";
// persona.dni="99999999"

// console.log(persona);

// for (let hobby of persona.hobby) {
//   console.log(hobby);
// }


// console.log("--- USANDO FUNCIONES EN OBJETOS ---");
// console.log(persona.saludar());

// console.log("--- CONVERTIMOS UN OBJETO A UN ARRAY ---");
// console.log("values", Object.values(persona));
// console.log("keys", Object.keys(persona));

// for (let valor of Object.values(persona)) {
//   console.log("valor", valor);
// }


const celular = {
  marca: "apple",
  precio: 1200,
  rating: 4.4,
};

const persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 28,
  altura: 1.78,
  peso: 76.4,
  hobby: ["Futbol", "Natacion", "Bicicleta"],
  esMayorDeEdad: true,
  saludar: function () {
    return `Hola soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años`;
  },
};

console.log("--- USANDO FUNCIONES EN OBJETOS ---");
console.log(persona.saludar());

console.log("--- CONVERTIMOS UN OBJETO A UN ARRAY ---");
console.log("values", Object.values(persona));
console.log("keys", Object.keys(persona));

for (let valor of Object.values(persona)) {
  console.log("valor", valor);
}

console.log(persona["edad"]);
console.log(persona.edad);
console.log(persona.nombre, persona.apellido);

persona["dni2"] = "11111";
persona.dni = "88888888";

console.log(persona);

for (let hobby of persona.hobby) {
  console.log(hobby);
}

const carros = [
  {
    marca: "bmw",
    modelo: "m2",
    precio: 200000,
    anio: 2023,
    color: "rojo",
  },
  {
    marca: "mercedez",
    modelo: "gla 2",
    precio: 145000,
    anio: 2022,
    color: "azul",
  },
];

console.log("--- ITERANDO UN ARRAY DE OBJETOS ---");

for (let carro of carros) {
  console.log("marca", carro.marca);
}



// const celular = {
//   marca: "apple",
//   precio: 1200,
//   rating: 4.4,
//   oferta: 1000,
// };

// destructuracion sirve para poder extraer alguna propiedad
const {
  marca: nombreDeMarca,
  precio: precioFinal,
  rating: puntuacion,
  oferta,
} = celular;
console.log("marca", nombreDeMarca);