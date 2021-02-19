import React from 'react';
import './App.css';
import Header from './Header';
import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <Header />
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;