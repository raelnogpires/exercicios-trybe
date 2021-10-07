// Exercicio 1 de .some e .every
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  const verification = arr.some((i) => name === i);
  return verification;
}

// console.log(hasName(names, 'Ana'));

// Exercicio 2
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  const verify = arr.every((person) => {
    return minimumAge <= person.age;
  })
  return verify;
}

console.log(verifyAges(people, 18));