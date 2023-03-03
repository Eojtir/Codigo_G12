const celulares = ["iPhone", "samsung", "lg", "xiami", "alcatel", "nokia"];

// Las formas antiguas de recorrer un array

// bucle for: Sirve para poder recorrer un arreglo

// let i = 0;
// i < celulares.length
// i++ => i = i + 1

console.log("----- Bucle For -----");//forma antigua

for (let i = 0; i < celulares.length; i++) {
  console.log(celulares[i]);
}

console.log("----- Bucle For of -----");  

for (let celular of celulares) {   //una de las formas mas actuales crea una variable y almacena en ella y su recorrrido es de 1 en uno
  console.log(celular);
}


let contador = 0;
let contador2 = 0;

for (let celular of celulares) {
  if (contador % 2 === 0) console.log(contador, celular);

  contador++;
}




// for (let celularIndice in celulares) {
//   if (contador2 % 2 === 0) console.log(contador2, celular);

//   contador++;
// }


console.log("---- Bucle For in ---");

for (let celularIndice in celulares) {
  if (celularIndice % 2 !== 0)
    console.log(celularIndice, celulares[celularIndice]);
}




// Hacer una funcion que detecte si un numero es primo o no primo
console.log("---- Resolviendo problemas ---");

function saberSiNumeroEsPrimo(numero) {
  let contador = 0;
  
  for (let i = 1; i <= numero; i++) if (numero % i === 0) contador++;

  if (contador === 2) return "Es primo";
  return "No es primo";
}

console.log(saberSiNumeroEsPrimo(1));




console.log("---- Resolviendo 2do problema  ---");

// Escribir una function que pida una frase y escriba cuantas veces aparece la letra a

// Ejemplo

// frase: ama de casa
// resultado: la letra a se repite 4 veces





function buscarLetraA(frase){

  const frase_array= frase.toLowerCase().replaceAll(" ","").split("");

  let contador = 0;

for (let letra of frase_array ) {

  if (letra === "a") contador++;
}

return contador;

}


console.log("la letra a se repite",buscarLetraA("Ana es ama de casa"),"veces")



console.log("---- Resolviendo 2do problema  ---");