// Exercicio 1 sobre .find
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  const findNumber = numbers.find((number) => number % 3 === 0 && number % 5 === 0);
  return findNumber;
};

// console.log(findDivisibleBy3And5());

// Exercicio 2
const names = ['João', 'Rael', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  const findBiggerName = names.find((name) => name.length === 5);
  return findBiggerName;
}

// console.log(findNameWithFiveLetters());

// Exercicio 3
const musicas = [
  { id: '31031687', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031685', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  const objects = Object.values(musicas);

  const result = objects.find((music) => music.id === id);

  return result;
}

console.log(findMusic('31031685'));
