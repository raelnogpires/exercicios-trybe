const imcCalc = (weight, height) => {
  const imc = (weight / (Math.pow(height, 2))).toFixed(2);
  console.log(`Peso: ${weight}, altura: ${height.toFixed(2)}`);
  console.log(`Seu IMC é: ${imc}`);
};

const w = 70;
const h = 1.70;

module.exports = {
  imcCalc,
  w,
  h
};
