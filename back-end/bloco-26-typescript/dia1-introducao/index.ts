import * as f from './functions';

console.log(f.greeter('João'))

console.log(f.personAge('Rael', 21, false));
console.log(f.personAge('Lara', 21, true));

console.log(`A soma do array é igual a: ${f.sumArray([10, 4, 3, 7])}`)

console.log(`Triângulo de base 10cm e e altura 17cm: ${f.triangle(10, 17)}cm²`)
console.log(`Triângulo de base 8cm e e altura 13cm: ${f.triangle(8, 13)}cm²`)

console.log(`Quadrado de lado 8cm: ${f.square(8)}cm²`);
console.log(`Quadrado de lado 13cm: ${f.square(13)}cm²`);

console.log(`Retângulo de base 10cm e altura 45cm: ${f.rectangle(10, 45)}cm²`);
console.log(`Retângulo de base 97cm e altura 205cm: ${f.rectangle(100, 200)}cm²`);

// Retorno:
// Olá, João! Como você está?

// Olá Rael, você tem 21 anos!
// Olá Lara, você tem 21 anos. Espere, hoje é seu aniversário? Parabéns! :)

// A soma do array é igual a: 24

// Triângulo de base 10cm e e altura 17cm: 85cm²
// Triângulo de base 8cm e e altura 13cm: 52cm²

// Quadrado de lado 8cm: 64cm²
// Quadrado de lado 13cm: 169cm²

// Retângulo de base 10cm e altura 45cm: 450cm²
// Retângulo de base 97cm e altura 205cm: 20000cm²