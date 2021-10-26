import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const myTasks = ['Estudar', 'Lavar o carro', 'Limpar areia dos gatos', 'Cuidar de mim mesmo'];

const appendTasks = myTasks.map((item) => Task(item));

function App() {
  return (
    appendTasks
  );
}

export default App;
