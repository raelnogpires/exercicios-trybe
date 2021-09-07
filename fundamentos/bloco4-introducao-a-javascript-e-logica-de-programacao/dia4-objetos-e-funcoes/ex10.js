function sumAll(number) {
  let numbers = [];
  let totalSum = 0;

  for (let index = 1; index <= number; index += 1) {
    numbers.push(index);
  }

  for (let index = 0; index < numbers.length; index += 1) {
    totalSum += numbers[index];
  }

  console.log(totalSum);
}

sumAll(5);
