let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

const newArray = [comida, animal, bebida];

const [pet, drink, food] = newArray;
// [comida, animal, bebida] = [bebida, comida, animal];

console.log(comida, animal, bebida); // arroz gato água

console.log(pet, drink, food); //gato água arroz

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
