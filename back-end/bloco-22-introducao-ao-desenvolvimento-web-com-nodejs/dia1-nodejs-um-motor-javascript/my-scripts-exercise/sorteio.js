const { question, questionInt } = require('readline-sync');

const returnResult = (number, answer) => {
  if (number !== answer) {
    return console.log(`Não foi dessa vez! O número era ${number} :(`);
  } else {
    return console.log('Parabéns, você acertou! :)');
  }
};

const game = () => {
  const number = parseInt(Math.random() * 10);

  const aswer = questionInt('Tente acertar o número que estou pensando, digite algum de 1 a 10: ');

  returnResult(number, aswer);

  const playAgain = question(
    'Se quiser jogar mais uma vez digite s para SIM e qualquer outra coisa para não: '
  );

  if (playAgain !== 's') {
    console.log('Espero que tenha se divertido :)');
  } else {
    game();
  }
};

game();
