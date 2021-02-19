import React, { Component } from 'react';
import pokedex from './Images/pokedex.png';

class Header extends Component {
  render() {
    return (
      <header>
        <img src={pokedex} alt="pokedex com letra amarela e borda azul" className="Pokedex-title"/>
      </header>
      )
  }
}

export default Header;
