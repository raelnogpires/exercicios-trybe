// Faça uma lista com as suas frutas favoritas
const specialFruit = ['apple', 'banana', 'orange'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'honey', 'condesend milk'];

const fruitSalad = (fruit, additional) => {
  const allItems = [];
  allItems.push(...fruit, ...additional);

  return allItems;
};

console.log(fruitSalad(specialFruit, additionalItens));