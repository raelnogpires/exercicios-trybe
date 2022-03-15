const main = (n1, n2, n3) => {
  const promise = new Promise((resolve, reject) => {
    if (!n1 || !n2 || !n3) reject(new Error('Informe apenas números.'));

    const result = (n1 + n2) * n3;

    if (result < 50) reject(new Error('Valor muito baixo.'));

    resolve(result);
  });

  return promise;
};

const n = () => {
  return Math.floor(Math.random() * 10 + 1)
};

main(n(), n(), n())
  .then((result) => console.log(`Cálculo final: ${result}`))
  .catch(({ message }) => console.log(`Erro: ${message}`));
