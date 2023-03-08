// # Problemas con JS

// ## Problema 1

// Escribe una función que reciba un número y devuelva el doble de ese número.


function dobleDelNumero(num) {
  return (`el doble de ${num} es ${2*num}` );   
 }

 console.log(dobleDelNumero(2548));


//  Escribe una función que reciba un número y devuelva el triple de ese número.

function tripleDelNumero(num) {
  
  return (`el Triple de ${num} es ${3*num}` );   
}

console.log(tripleDelNumero(256));


// ## Problema 3

// Escribe una función que reciba un número y devuelva el cuadrado de ese número.


const nElevado=(num,exponente) => `El ${num} Elevado a la ${exponente} es ${Math.pow(num,exponente)}`

console.log(nElevado(3,2));


// ## Problema 4

// Escribe una función que reciba un número y devuelva el cubo de ese número.

console.log(nElevado(5,3));

// ## Problema 5

// Completar las condiciones de los if del siguiente script para que los mensajes se muestren siempre de forma correcta:

// ```js
const numero1 = 5;
const numero2 = 8;
 
if(numero1<numero2) {
  console.log("numero1 no es mayor que numero2");
}

if(numero2>0) {
  console.log("numero2 es positivo");
}

if(numero1<0) {
  console.log("numero1 es negativo o distinto de cero");
}

if((numero1+1) <= numero2) {
  console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}


/** ## Problema 6

Escribe una función que reciba un número y devuelva el doble de ese número si es par o el triple de ese número si es impar.*/


function DobleOTriple(num) { 
  if(num %2 === 0) return `El ${num} es Par y `+ dobleDelNumero(num)
  if(num %3 === 0) return `El ${num} es Inpar y `+tripleDelNumero(num)
  return 'No es ni Par ni Impar'
  
} 

console.log(DobleOTriple(38))
console.log(DobleOTriple(33))
console.log(DobleOTriple(11))


/**Escribir una funcion que calcule el factorial de un número entero n es una operación matemática que consiste en multiplicar todos los factores. */

function nFactorial(num) {
  let numero=num;
for (let i = 1; i < num ; i++) {
  
 numero=numero*i

}
return `El factorial de ${num} es igual a ${numero}`
} 

console.log(nFactorial(5))


/** ## Problema 8

Escribir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplos de palíndromos:

`La ruta nos aporto otro paso natural`

`Sé verlas al revés`

`Anita lava la tina`

`Dabale arroz a la zorra el abad`

nota: Las tildes y los espacios no deben ser tenidos en cuenta.*/



function palindromo(frase) {

  if( frase.toLowerCase().replaceAll(" ","").split("").join("") === frase.toLowerCase().replaceAll(" ","").split("").reverse().join("")) 

  return `El texto ${frase} es un Palindromo`;
  return `El texto ${frase} No es un Palindromo`;
  
}


console.log(palindromo("La ruta nos aporto otro paso natural"))
console.log(palindromo("verifico si es un palindromo"))


/**## Problema 9

Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla los doce nombres utilizando la función console.log().
 */


const meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre',]


for (const mes of meses) {
  console.log(mes)
    
  }


  /**## Problema 10  

A partir del siguiente array que se proporciona:

```js
const valores = [true, 5, false, "hola", "amigos", 20, 3.4, 10];
```

Determinar cuales con los tipos de datos que contiene el array. Utilizar funciones para resolverlo. */

const valores = [true, 5, false, "hola", "amigos", 20, 3.4, 10];

function tipoDato(miArray){

for(let miDato of miArray){
  console.log(`el dato ${miDato} es de tipo `+typeof(miDato))

}
}
 tipoDato(valores)


