const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const numericOrder = oddsAndEvens.sort((num1, num2) => num1 - num2);
// .sort() usando uma função de comparação como parâmetro.

const printNumber = (numberArray) => `Os números ${numberArray} se encontram ordenados de forma crescente!`;

console.log(printNumber(numericOrder));

// "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!"
// `Os números ${numericOrder} se encontram ordenados de forma crescente!`

//console.log(oddsAndEvens); // será necessário alterar essa linha 😉
