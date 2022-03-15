const main = (n1, n2, n3) => { // Exercício 1
  const promise = new Promise((resolve, reject) => {
    if (!n1 || !n2 || !n3) reject(new Error('Informe apenas números.'));

    const result = (n1 + n2) * n3;

    if (result < 50) reject(new Error('Valor muito baixo.'));

    resolve(result);
  });

  return promise;
};

const n = () => { // Exercício 2
  return Math.floor(Math.random() * 100 + 1)
};

// Executa a função utilizando .then e .catch - Exercício 3
// main(n(), n(), n())
//   .then((result) => console.log(`Cálculo final: ${result}`))
//   .catch(({ message }) => console.log(`Erro: ${message}`));

// Executa a função utilizando async/await - Exercício 4
const run = async () => {
  try {
    const result = await main(n(), n(), n());
    console.log(`Cálculo final: ${result}`);
  } catch(err) {
    console.log(`Erro: ${err.message}`)
  };
};

// run();


