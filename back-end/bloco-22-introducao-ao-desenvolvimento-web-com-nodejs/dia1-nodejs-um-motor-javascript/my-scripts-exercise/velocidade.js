const { questionInt } = require('readline-sync');

const askDistance = () => questionInt('Qual a distância, em metros, que o carro percorreu? ');
const askTime = () => questionInt('Em quantos segundos? ');

const returnAverageSpeed = () => {
  const distance = askDistance();
  const time = askTime();
  const avgSpeed = (distance / time).toFixed(2);
  console.log(`A velocidade média desse veículo foi ${avgSpeed}m/s`);
};

returnAverageSpeed();
