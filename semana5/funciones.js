/**
 * Una function recibe parametros, esos van dentros
 * de los parenteis
 *
 * Queremos hacer una funcion la cual recibe un nombre y edad
 * y retorna el siguiente mensaje
 *
 * Hola soy nombre y tengo edad años
 *
 * La funciones son creada para hacer una instruccion
 * por ende hay 2 tipos de funciones
 *
 * Primer tipo (puras) las cuales usar una palabra
 * reservada llamada return la cual indica que es
 * lo que nuestra funcion retorna
 *
 * Segundo tipo (impura) la cuales solo sirven para ejecutar
 * una accion, pero estas no retornan nada
 */

/**
 * Cuando queremos juntar un string mas variable
 * eso se llama concatenar y en JS hay 2 formas
 * "Hola soy " + nombre + " y tengo " + edad + "años"
 *
 * existe un concepto llamado template string,
 * el cual permite concatenar string + variables de la
 * siguiente forma
 *
 * `Hola soy ${nombre} y tengo ${edad} años`
 */

function saludar(nombre, edad) {
  return `Hola soy ${nombre} y tengo ${edad} años`;
}

const saludo = saludar("Juan", 98);
let saludo2 = saludar("Pepe", 11);
const saludo3=saludar("Ritjoe",37);

console.log(saludo);
console.log(saludo2);
console.log(saludo3);
// calcular el area de cuadrado
function calcularAreaDeCuadrado(lado) {
  return lado ** 2;
}

console.log(calcularAreaDeCuadrado(10));
console.log(calcularAreaDeCuadrado(4));

/* Una funciona que me diga si una persona es mayor o menor 
de edad
*/

//OPERADORES LOGICOS EN JS
// < > == ===(EVALUA HASTA EL TIPO DE DATO)
//LOS VALORES QUE DEVUELVEN ES TRUE O FALSE
//EL IF EVALUA SI ES TRUE

function esMayorDeEdad(edad) {
  if (edad >= 18) {
    return "Es mayor de edad";
  } else {
    return "Es menor de edad";
  }
}

const res1 = esMayorDeEdad(10);
const res2 = esMayorDeEdad(20);

console.log("res1", res1);
console.log("res2", res2);

// Operadores logicos
// > < >= <= ===
console.log("10 > 20", 10 > 20);
console.log("20 >= 20", 20 >= 20);
console.log("10 < 5", 10 < 5);
console.log("5 <= 20", 5 <= 20);
console.log("1 == 1", "1" == 1);
console.log("1 === 1", "1" === 1);



//problema n1

//evalua si un numero par


function esNumerParOinpar(numero){
  if (numero % 2 === 0){
    return"es numero par";
  }
  else
  {
    return"es numero impar";
  }


}

////reto 01
// Hay 2 operadores que permite juntar mas de una opcion
// y => and => &&
// ó => or => ||
// distinto => !==

//typeof: retorna tipo de dato

function calcularFizzBuzz(numero) {
  if (typeof numero !== "number") {
    return "El programa solo acepta numeros";
  }

  if (numero % 3 === 0 && numero % 5 === 0) {
    return "fizzbuzz";
  } else if (numero % 3 === 0) {
    return "fizz";
  } else if (numero % 5 === 0) {
    return "buzz";
  } else {
    return "El numero no cumple las condicones del juego";
  }
}

const r1 = calcularFizzBuzz(100); // buzz
const r2 = calcularFizzBuzz(351); // fizz
const r3 = calcularFizzBuzz(123); // fuzzbuzz
const r4 = calcularFizzBuzz(1110);


console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);




//aqui no valimos que el RETURN termina la funcion 


function calcularFizzBuzzRefactor(numero) {
  if (typeof numero !== "number") return "El programa solo acepta numeros";

  if (numero % 15 === 0) return "fizzbuzz";
  if (numero % 3 === 0) return "fizz";
  if (numero % 5 === 0) return "buzz";

  return "El numero no cumple las condicones del juego";
}

const r11 = calcularFizzBuzzRefactor(100); // buzz
const r21 = calcularFizzBuzzRefactor(351); // fizz
const r31 = calcularFizzBuzzRefactor(75); // fuzzbuzz
const r41 = calcularFizzBuzzRefactor(true);

console.log(r11);
console.log(r21);
console.log(r31);
console.log(r41);



// Funciones anonimas

//las funciones las puedo declarar sin un nombre usando esta estructura y llamandola normalmente

console.log("Funciones anonimas");

const calcularAreaReactangulo = function (base, altura) {
  return base * altura;
};

console.log(calcularAreaReactangulo(10, 20));

// FUNCIONES TIPO FLECHA => arrow functions

/**
 * este me sirve para saber el tipo de moneda
 * @param {string} moneda 
 * @returns {string}
 */

const decifrarMoneda = (moneda) => {
  if (moneda === "S/") return "Soles";
  if (moneda === "$") return "Dolares";
  if (moneda === "MXM") return "Pesos mexicanos";
  return moneda;
};

//la funcion se llaman  de la misma manera no importa como la creamos

console.log(decifrarMoneda("S/"));
console.log(decifrarMoneda("$"));

// arrow funcion inline
// solo lo usa cuando se va ejecutar una sola cosa en el  funcion 
const calcularReactangulo = (base, altura) => base * altura;

console.log(calcularReactangulo(100, 200));