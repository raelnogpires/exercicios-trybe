const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  let count = 0;
  const concat = names.reduce((acc, current) => acc + current);

  for (let i = 0; i < concat.length; i += 1) {
    if (concat[i] === 'A' || concat[i] === 'a') count += 1;
  };

  return count;
};

console.log(containsA());
