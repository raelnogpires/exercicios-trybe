const checkLottery = (callback, chosenNumber) => {
  const drawnNumber = callback(1, 5);
  if (drawnNumber === chosenNumber) return 'Parabéns, você ganhou!';
  if (drawnNumber !== chosenNumber) return 'Tente novamente.'
};

const randomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

console.log(checkLottery(randomNumber, 2));
