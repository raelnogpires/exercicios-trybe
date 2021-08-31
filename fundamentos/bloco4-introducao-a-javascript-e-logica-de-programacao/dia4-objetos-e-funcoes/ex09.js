let numbers = [6, 3, 6, 5, 8, 6, 3];

function repeatedNumbers(numbersArray) {
  let num = {};

  for (let index = 0; index < numbers.length; index += 1) {
    let valor = numbersArray[index];
    if (num[valor] === undefined) {
      num[valor] = 1;
    } else {
			num[valor] = num[valor] + 1;
		}
  }

  let repeated = 0;
  let number = 0;

  for (let prop in num) {
    if (repeated < num[prop]) {
      repeated = num[prop];
      number = prop;
    }
  }

  return number;
}

console.log(repeatedNumbers(numbers));
