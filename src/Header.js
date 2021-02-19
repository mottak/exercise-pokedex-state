import React, { Component } from 'react';
import pokedex2 from './Images/pokedex2.png';


class Header extends Component {
  render() {
    return (
      <header>
        <img src={pokedex2} alt="pokedex com letra amarela e borda azul" className="Pokedex-title"/>
      </header>
      )
  }
}

export default Header;
