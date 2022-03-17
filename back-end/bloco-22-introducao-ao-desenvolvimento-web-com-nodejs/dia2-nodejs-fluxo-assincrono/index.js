const { readFile, writeFile } = require('fs').promises;

const main = (n1, n2, n3) => { // Exercício 1
  const promise = new Promise((resolve, reject) => {
    if (!n1 || !n2 || !n3) reject(new Error('Informe apenas números.'));

    const result = (n1 + n2) * n3;

    if (result < 50) reject(new Error('Valor muito baixo.'));

    resolve(result);
  });

  return promise;
};

const n = () => { // Exercício 2.1
  return Math.floor(Math.random() * 100 + 1)
};

// Executa a função utilizando .then e .catch - Exercício 2.2
// main(n(), n(), n())
//   .then((result) => console.log(`Cálculo final: ${result}`))
//   .catch(({ message }) => console.log(`Erro: ${message}`));

// Executa a função utilizando async/await - Exercício 2.3
const runMain = async () => {
  try {
    const result = await main(n(), n(), n());
    console.log(`Cálculo final: ${result}`);
  } catch(err) {
    console.log(`Erro: ${err.message}`)
  };
};

// runMain();

const readSimpsons = () => { // Exercício 4.1
  readFile('simpsons.json', 'utf-8')
    .then((data) => {
      const treated = JSON.parse(data);
      treated.forEach((s) => console.log(`${s.id} - ${s.name}`));
    })
    .catch((err) => console.log(err));
};

// readSimpsons();

const findSimpsonById = (id) => { // Exercício 4.2
  const promise = new Promise((resolve, reject) => {
    const treated = readFile('simpsons.json', 'utf-8')
      .then((data) => {
        const treated = JSON.parse(data);
        const simpson = treated.find((s) => id === Number(s.id));
        if (simpson === undefined) reject(new Error('id não encontrado.'));
        resolve(simpson);
      })
    return treated;
  });
  return promise;
};

const runSimpsons = async () => {
  try {
    const s = await findSimpsonById(25);
    console.log(`${s.id} - ${s.name}`);
  } catch(err) {
    console.log(err.message);
  };
};

// runSimpsons();

const deleteSimpsonsById = () => { // Exercício 4.3
  readFile('simpsons.json', 'utf-8')
    .then((data) => {
      const treated = JSON.parse(data);
      const simpson = treated.filter((s) => Number(s.id) !== 6 && Number(s.id) !== 10);
      simpson.forEach((simp) => console.log(`${simp.id} - ${simp.name}`));
    })
};

// deleteSimpsonsById();

const createAnotherSimpsonFile = async () => { // Exercício 4.4
  const ids = [1, 2, 3, 4];

  const data = await readFile('simpsons.json', 'utf-8')
    .then((d) => JSON.parse(d));

  const filter = data.filter((simp) => ids.includes(Number(simp.id)));

  await writeFile('simpsonFamily.json', JSON.stringify(filter));
};

// createAnotherSimpsonFile();

const addNelsonToSimpsonsFamily = async () => { // Exercício 4.5
  const data = await readFile('simpsonFamily.json', 'utf-8')
    .then((d) => JSON.parse(d));

  data.push({ "id": "8", "name": "Nelson Muntz" });

  await writeFile('simpsonFamily.json', JSON.stringify(data), { flag: 'w' });
};

// addNelsonToSimpsonsFamily();

const nelsonOutMaggieIn = async () => {
  const data = await readFile('simpsonFamily.json', 'utf-8')
    .then((d) => JSON.parse(d));

  const nelsonOut = data.filter((simp) => Number(simp.id) !== 8);

  const maggieIn = nelsonOut.concat([{ "id": "5", "name": "Maggie Simpson" }]);

  await writeFile('simpsonFamily.json', JSON.stringify(maggieIn), { flag: 'w' });
};

nelsonOutMaggieIn();
