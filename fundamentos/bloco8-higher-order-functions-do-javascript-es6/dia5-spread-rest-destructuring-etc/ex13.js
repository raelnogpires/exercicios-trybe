const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = (carrArray) => {
  const [ model, brand, year ] = carrArray;

  return {
    model,
    brand,
    year,
  }
};

console.log(toObject(palio));
console.log(toObject(shelbyCobra));
console.log(toObject(chiron));

