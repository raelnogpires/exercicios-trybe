const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  const flat = arrays.reduce((prev, current) => prev.concat(current), []);
// concat cria um novo array unindo todos os elementos que foram passados como parâmetro, na ordem dada,
// para cada argumento e seus elementos. 
  return flat;
};

console.log(flatten());
