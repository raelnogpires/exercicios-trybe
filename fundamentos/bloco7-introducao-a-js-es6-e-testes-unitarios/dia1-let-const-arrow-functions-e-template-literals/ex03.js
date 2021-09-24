const calcFactorial = (number) => {
  let resultado = number;
  for (let i = 1; i < number; i += 1) {
    resultado *= i;
  }
  return resultado;
}

console.log(calcFactorial(5));

// function calcFactorial (number) {
//   const resultado = number;
//   for (let i = 1; i < number; i += 1) {
//     resultado *= i;
//   }
//   console.log(resultado);
// }

// calcFactorial(5);
