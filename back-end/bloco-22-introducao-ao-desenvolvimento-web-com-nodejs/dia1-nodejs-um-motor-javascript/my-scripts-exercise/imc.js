const { question, questionInt, questionFloat } = require('readline-sync');

const askName = () => question('Qual é o seu nome? ');
const askHeight = () => questionFloat('Qual a sua altura? ');
const askWeight = () => questionInt('Qual o seu peso? ');

const imc = (weight, height) => (weight / (Math.pow(height, 2))).toFixed(2);

const returnUserIMC = () => {
  const userName = askName();
  const w = askWeight();
  const h = askHeight();
  const result = imc(w, h);

  if (result < 18.5) {
    console.log(`Olá ${userName}, seu IMC é: ${result} - Abaixo do peso.`);
    return
  };

  if (result >= 18.5 && result < 25) {
    console.log(`Olá ${userName}, seu IMC é: ${result} - Peso normal.`);
    return
  };

  if (result >= 25 && result < 30) {
    console.log(`Olá ${userName}, seu IMC é: ${result} - Acima do peso.`);
    return
  };

  if (result >= 30 && result < 25) {
    console.log(`Olá ${userName}, seu IMC é: ${result} - Obesidade grau I.`);
    return
  };

  if (result >= 35 && result < 40) {
    console.log(`Olá ${userName}, seu IMC é: ${result} - Obesidade grau II.`);
    return
  };

  console.log(`Olá ${userName}, seu IMC é: ${result} - Obesidade grau III e IV.`);
};

returnUserIMC();

// module.exports = {
//   returnUserIMC
// };
