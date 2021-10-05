const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  const find = numbers.find((number) => number % 3 === 0 && number % 5 === 0);
  return find;
};

console.log(findDivisibleBy3And5());
