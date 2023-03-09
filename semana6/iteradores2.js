////semana 6 iteradores 

const numbers = [1, 10, 12, 30, 21, 32, 94];

/**
 * Cuando usar forEach?
 * Cuando necesitamos iterar sobre un array y no necesitamos retornar un nuevo array
 */
numbers.forEach(function (number, index) {
  if (number > 20) {
    console.log("Es mayor a 20", number, index);
  } else {
    console.log("Es menor a 20", number, index);
  }
});

//**cuando usar map? */

// map
const powNumbers = numbers.map(function (number) {
  return { number: number ** 2 };
});

console.log("powNumbers");
console.log(powNumbers);
console.log(numbers);



///tambien puedo usar arrowfuncion  

console.log("Usando arrow function");

numbers.forEach((number, index) => {
  console.log(`${index}) ${number}`);
});

const powNumbersArrow = numbers.map((number) => {
  return { number: number ** 3 };
});

console.log(powNumbersArrow);

const powNumbersArrowInline = numbers.map((number) => number * 2);//inLine funcion
console.log(powNumbersArrowInline);




