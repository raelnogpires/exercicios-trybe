import './App.css'

const handleFirstButton = () => {
  console.log('Funcionou! XD');
};

const handleSecondButton = () => {
  console.log('Esse aqui também está funcionando :O');
};

const handleThirdButton = () => {
  console.log('O último funcionou também, ufa! :P');
};

function App() {
  return (
    <div className='button-div'>
      <button onClick={handleFirstButton}>Botão Nº1</button>
      <button onClick={handleSecondButton}>Botão Nº2</button>
      <button onClick={handleThirdButton}>Botão Nº3</button>
    </div>
  );
}

export default App;
