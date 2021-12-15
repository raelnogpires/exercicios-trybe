// Estado inicial da aplicação.
const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

// Estabelecendo action para botão Previous color.
const PREVIOUS_COLOR = () => ({
  type: 'previous',
});

// Estabelecendo action para botão Next color.
const NEXT_COLOR = () => ({
  type: 'next',
});

function createColor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

const RANDOM_COLOR = () => ({
  type: 'random',
  newColor: createColor(),
});

// Reducer que recebe um estado já estabelecido e
// a action que modifica esse estado.
const reducer = (state = ESTADO_INICIAL, action) => {
  const { colors, index } = state;

  switch (action.type) {
    case 'previous':
      return {
        ...state,
        index: index - 1,
        colors,
      };
    case 'next':
      return {
        ...state,
        index: index + 1,
        colors,
      }
    case 'random':
      return {
        ...state,
        index: colors.length,
        ...colors.push(action.newColor),
      }
    default:
      return state;
  }
};

// Criação do store da aplicação.
const store = Redux.createStore(reducer);

// Span da cor e container a ser colorido.
const colorNameSpan = document.getElementById('value');
const containerDiv = document.getElementById('container');

// State da aplicação é checado na primeira vez para validação
// e na segunda vez para alteração.
const prevBtn = document.getElementById('previous');
prevBtn.addEventListener('click', () => {
  // Estado atual, antes da action ser mandada ao reducer.
  const currentState = store.getState();
  const { index } = currentState;

  if (index !== 0) {
    store.dispatch(PREVIOUS_COLOR());
  }
});

const nextBtn = document.getElementById('next');
nextBtn.addEventListener('click', () => {
  const currentState = store.getState();
  const { colors, index } = currentState;

  if (colors[index] !== 'yellow') {
    store.dispatch(NEXT_COLOR());
 };
});

const randomBtn = document.getElementById('random');
randomBtn.addEventListener('click', () => {
  store.dispatch(RANDOM_COLOR());
});

// Subscribe para alteração das cores assim que uma action
// é mandada ao reducer.
store.subscribe(() => {
  const newState = store.getState();
  const { colors, index } = newState;

  colorNameSpan.innerText = colors[index];
  containerDiv.style.backgroundColor = colors[index];
});
