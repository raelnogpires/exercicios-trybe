const button = document.querySelector('.count-button');
let paragraph = document.querySelector('.count-refresher');
let count = 0;

const countClick = () => {
  count += 1;
  paragraph.innerText = `Este botão recebeu um total de ${count} cliques!`;
}

// function countClick () {
//   count += 1;
//   paragraph.innerText = `Este botão recebeu um total de ${count} cliques!`;
// }

button.addEventListener('click', countClick);
