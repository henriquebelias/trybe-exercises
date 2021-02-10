import './App.css';

const task = (...value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const tasks = ['Aprender React', 'Aplicar o aprendizado do bloco de introdução', 'Me tornar um densenvolvedor'];
  return tasks.map(taskItem => task(taskItem));
}

export default App;
