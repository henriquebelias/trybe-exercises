import React from 'react';
import Pokedex from './Pokedex';
import pokemons from './data';
import './App.css';

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <Pokedex data={pokemons} />
    </div>
  );
  }
}

export default App;
