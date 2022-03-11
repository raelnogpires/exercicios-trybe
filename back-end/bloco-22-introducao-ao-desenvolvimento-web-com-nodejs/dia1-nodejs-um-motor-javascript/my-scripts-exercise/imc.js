const imcCalc = (weight, height) => {
  const imc = (weight / (Math.pow(height / 100, 2))).toFixed(2);
  console.log(`Peso: ${weight}, altura: ${height}`);
  console.log(`Seu IMC é: ${imc}`);
};

const w = 70;
const h = 170;

imcCalc(w, h);
