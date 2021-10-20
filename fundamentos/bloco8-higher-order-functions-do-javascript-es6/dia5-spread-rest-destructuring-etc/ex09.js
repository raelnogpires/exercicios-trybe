const sum = (...values) => {
  return values.reduce((prev, next) => prev + next, 0);
};

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const total = [1, 2, 3, 5, 6, 9]

console.log(sum(...total));
