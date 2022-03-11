const { question, questionInt } = require('readline-sync');
// console.log('Hello, World');

const name = question('Qual é o seu nome? ');
const age = questionInt('Quantos anos você tem? ');

console.log(`Olá, ${name}! Você tem ${age} anos.`);
