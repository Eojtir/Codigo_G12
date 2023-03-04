//  // Objeto Math
// // Math.pow 

// const Math.pow(base, exponente)
// console.log(Math.pow (2, 2))
// console.log(Math.pow (2.4, 5)) 


// // Math.round = redondea un número decimal al entero más proximo
// console.log(Math.roundd(6.45))
// console.log(Math.roundd(6.5))

// // Math.floor = redondea el número decimal al entero de menor valor

// console.log(Math.floor(6.999))

// // Math.ceil = redonde un número al entero más cercano hacia arriba

// console.log(Math.ceil(6.0001))


// Math.max, Math.min

console.log(Math.max(1,2,3,4,5));

console.log(Math.min(1,2,3,4,5));

const numero = [1,2,3,4,5]
console.log(Math.max(...numero)) // spread operator 


// Object.keys() nos devuelve un arreglo con el nombre de todas las propiedades de un objeto.

const libro = {
  autor: 'Borges',
  genero: 'Policial',
  año: 1990
}

const todasLasPropiedades1 = Object.keys(libro)
console.log(todasLasPropiedades1)

// Object.values() devuelve todos los valores de nuestro objeto

// const libro = {
//   autor: 'Borges',
//   genero: 'Policial',
//   año: 1990
// }

const todasLasPropiedades2 = Object.values(libro)
console.log(todasLasPropiedades2)





// Métodos del objeto string

"Codigo Frontend"
'Codigo Frontend'

const nombre = 'Mariana'
const apellido = 'Navarro'
const edad = 28

const resultado = nombre + apellido + edad 
console.log(resultado)

const resultado2 = 'Hola ' + nombre + ' ' + apellido +  ' tu edad es ' + edad
console.log(resultado2)

// Template string: una forma de concatenar cadenas de manera más sencilla

const resultado3 = `Hola ${nombre} ${apellido} tu edad es ${edad}`
console.log(resultado3)

const resultado4 = `
Hola ${nombre} ${apellido}
tu edad es ${edad}
`
console.log(resultado4)




function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
   return(Math.pow(num, 2));
    
}

console.log( elevarAlCuadrado(9))


// function elevar(num, exponent) {
//   // Devuelve el valor de "num" elevado al exponente dado en "exponent"
//   // Tu código:
//   return(math.pow(num,exponent))
  
// }


// console.log(elevar(2, 3)) ;



// function numeroRandom() {
//   // Generar un número al azar entre 15 y 34 y devolverlo
  
// }



function numeroRandom(min,max) {
  // Generar un número al azar entre 15 y 34 y devolverlo
   return Math.floor(Math.random() * (max - min + 1) + min);
}

nAzar=numeroRandom(15,34);
console.log(nAzar);


function esPositivo(num){

if(Math.round(num) ===0) return false;
if(Math.round(num) >0) return "Es Positivo";
return "es Negativo";
}


const resul= esPositivo(12.75);
const resul2= esPositivo(-212.75);
const resul3= esPositivo(0);

console.log(resul);
console.log(resul2);
console.log(resul3);



function esVocal(letra) {
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  
  letra.toLowerCase()
  if (letra.toLowerCase() === 'a' || letra.toLowerCase() === 'e'|| letra.toLowerCase() === 'i'|| letra.toLowerCase() === 'o'|| letra.toLowerCase() === 'u') return "es vocal"
  if(letra.length >=2 )return "Dato Incorrecto, muy largo el texto"
  return "dato incorrecto, no es vocal"
}


const resul1= esVocal("A");
const resul02= esVocal("casa");
const resul03= esVocal("h");

console.log(resul1);
console.log(resul02);
console.log(resul03);



//.trim elimina los espacion en blanco


//includes= nos dice si tenemos una cadena dentro de otra cadena

const cadena="quiero buscar el -"
console.log(cadena.includes('-'))